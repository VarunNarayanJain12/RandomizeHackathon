import argparse
import cv2
import mediapipe as mp
import time
from pose_estimation import estimate_yaw
from datetime import datetime
import os
import shutil

face_missing = False
face_logged = False
screenshot_index = 0

# Screenshot folder setup
screenshot_dir = "temp"
if os.path.exists(screenshot_dir):
    shutil.rmtree(screenshot_dir)
os.makedirs(screenshot_dir)

# Parse device
ap = argparse.ArgumentParser()
ap.add_argument('-d', '--device', type=int, default=0, help='Device to use')
args = ap.parse_args()

# Initialize MediaPipe
mp_face = mp.solutions.face_mesh
mp_drawing = mp.solutions.drawing_utils
face_mesh = mp_face.FaceMesh(
    max_num_faces=5,  # Allow multiple face detection
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)

# Suspicion tracking
look_away_start_times = {}
last_look_away_warning_time = {}
last_multiple_faces_warning_time = 0
multiple_face_cooldown = 10
look_away_duration = 1
look_away_cooldown = 6
warmup_duration = 3  # Warmup: Ignore suspicions for 3 seconds
start_time = time.time()
suspicion_count = 0

# Save screenshot with overlays
def save_screenshot(frame):
    global screenshot_index
    filename = f"suspect_{screenshot_index}.jpg"
    filepath = os.path.join(screenshot_dir, filename)
    cv2.imwrite(filepath, frame)
    screenshot_index += 1
    print(f"📸 Screenshot saved: {filepath}")
    print('\a')

# Log suspicious activity
def log_suspicion(reason, frame, warning_text=None):
    global suspicion_count
    suspicion_count += 1
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{timestamp}] ⚠️ Suspicious Activity: {reason}")

    frame_copy = frame.copy()
    if warning_text:
        cv2.putText(frame_copy, warning_text, (50, 80),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)
    save_screenshot(frame_copy)

# Start webcam
print("📷 Starting webcam...")
cv2.namedWindow("preview")
vc = cv2.VideoCapture(args.device)

if vc.isOpened():
    rval, frame = vc.read()
else:
    print("❌ Unable to open webcam")
    exit()

while rval:
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    face_results = face_mesh.process(frame_rgb)

    current_time = time.time()
    ready_for_suspicion = (current_time - start_time) > warmup_duration

    if face_results.multi_face_landmarks:
        face_missing = False
        face_logged = False

        num_faces = len(face_results.multi_face_landmarks)

        if num_faces > 1:
            cv2.putText(frame, "⚠️ Multiple faces detected!", (50, 110),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)

            if current_time - last_multiple_faces_warning_time > multiple_face_cooldown and ready_for_suspicion:
                log_suspicion("Multiple faces detected", frame, warning_text="⚠️ Multiple faces detected!")
                last_multiple_faces_warning_time = current_time

        for idx, landmarks in enumerate(face_results.multi_face_landmarks):
            # mp_drawing.draw_landmarks(frame, landmarks, mp_face.FACEMESH_CONTOURS,
            #                           landmark_drawing_spec=mp_drawing.DrawingSpec(color=(0, 255, 0), thickness=1, circle_radius=1),
            #                           connection_drawing_spec=mp_drawing.DrawingSpec(color=(0, 255, 255), thickness=1))

            yaw = estimate_yaw(landmarks.landmark, frame.shape[1], frame.shape[0])
            cv2.putText(frame, f"Yaw {idx+1}: {int(yaw)}°", (frame.shape[1] - 200, 30 + idx * 30),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

            if abs(yaw) > 10:
                if idx not in look_away_start_times or look_away_start_times[idx] is None:
                    look_away_start_times[idx] = current_time
                elif current_time - look_away_start_times[idx] > look_away_duration and ready_for_suspicion:
                    if idx not in last_look_away_warning_time:
                        last_look_away_warning_time[idx] = 0

                    if current_time - last_look_away_warning_time[idx] > look_away_cooldown:
                        log_suspicion(f"User {idx+1} looked away", frame, warning_text=f"⚠️ User {idx+1}: Look at the screen!")
                        last_look_away_warning_time[idx] = current_time
            else:
                look_away_start_times[idx] = None

            if idx in last_look_away_warning_time and current_time - last_look_away_warning_time[idx] <= 3:
                cv2.putText(frame, f"⚠️ User {idx+1}: Look at the screen!", (50, 80 + idx * 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 255), 2)

    else:
        face_missing = True
        cv2.putText(frame, "❗ Face not detected", (50, 50), cv2.FONT_HERSHEY_SIMPLEX,
                    0.8, (0, 0, 255), 2)

        if not face_logged and ready_for_suspicion:
            log_suspicion("Face not detected", frame)
            face_logged = True

    # Suspicion counter
    cv2.putText(frame, f'Suspicious: {suspicion_count}', (15, 40),
                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 255), 2)

    # Show preview
    cv2.imshow("preview", frame)
    rval, frame = vc.read()

    if cv2.waitKey(20) == 27:
        break

# Cleanup
cv2.destroyAllWindows()
vc.release()
