import mediapipe as mp
import cv2
import numpy as np

# Initialize MediaPipe solutions
mp_hands = mp.solutions.hands
mp_face_mesh = mp.solutions.face_mesh
mp_drawing = mp.solutions.drawing_utils

# Hand detection

def estimate_head_pose(frame, landmarks, image_width, image_height):
    # Select 2D image points from MediaPipe FaceMesh landmarks
    image_points = np.array([
        [landmarks.landmark[1].x * image_width, landmarks.landmark[1].y * image_height],   # Nose tip
        [landmarks.landmark[33].x * image_width, landmarks.landmark[33].y * image_height], # Left eye inner corner
        [landmarks.landmark[263].x * image_width, landmarks.landmark[263].y * image_height], # Right eye inner corner
        [landmarks.landmark[61].x * image_width, landmarks.landmark[61].y * image_height], # Mouth left
        [landmarks.landmark[291].x * image_width, landmarks.landmark[291].y * image_height], # Mouth right
        [landmarks.landmark[199].x * image_width, landmarks.landmark[199].y * image_height]  # Chin
    ], dtype="double")

    # 3D model points (approximate for a neutral face)
    model_points = np.array([
        (0.0, 0.0, 0.0),             # Nose tip
        (-30.0, -30.0, -30.0),       # Left eye
        (30.0, -30.0, -30.0),        # Right eye
        (-40.0, 30.0, -30.0),        # Left mouth corner
        (40.0, 30.0, -30.0),         # Right mouth corner
        (0.0, 60.0, -50.0)           # Chin
    ])

    # Camera internals
    focal_length = image_width
    center = (image_width / 2, image_height / 2)
    camera_matrix = np.array(
        [[focal_length, 0, center[0]],
         [0, focal_length, center[1]],
         [0, 0, 1]], dtype="double"
    )
    dist_coeffs = np.zeros((4,1))  # No lens distortion

    # Solve PnP
    success, rotation_vector, translation_vector = cv2.solvePnP(
        model_points, image_points, camera_matrix, dist_coeffs, flags=cv2.SOLVEPNP_ITERATIVE
    )

    if not success:
        return None

    # Convert rotation vector to euler angles (head direction)
    rmat, _ = cv2.Rodrigues(rotation_vector)
    angles, _, _, _, _, _ = cv2.RQDecomp3x3(rmat)

    pitch, yaw, roll = angles  # In degrees
    return pitch, yaw, roll

def detect_hands(frame):
    with mp_hands.Hands(static_image_mode=False,
                        max_num_hands=2,
                        min_detection_confidence=0.5) as hands:
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(rgb_frame)
        return results

# Face landmarks (useful for gaze or peeking)
def detect_face_landmarks(frame, frame_rgb):
    face_results = face_mesh.process(frame_rgb)
    if face_results.multi_face_landmarks:
        for landmarks in face_results.multi_face_landmarks:
            mp_drawing.draw_landmarks(frame, landmarks, mp_face.FACEMESH_TESSELATION)
            h, w, _ = frame.shape
            angles = estimate_head_pose(frame, landmarks, w, h)
            if angles:
                pitch, yaw, roll = angles
                cv2.putText(frame, f'Yaw: {int(yaw)}', (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 255), 2)

                return yaw  # Return YAW only for now
    return 0

