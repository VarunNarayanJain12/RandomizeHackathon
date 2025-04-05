import tensorflow as tf
import cv2
import numpy as np

model = tf.keras.models.load_model("final_cheating_detector_model.keras")

def preprocess_video(path):
    cap = cv2.VideoCapture(path)
    frames = []
    frame_count = 0
    max_frames = 100  # Optional: Limit to 100 frames

    while True:
        ret, frame = cap.read()
        if not ret or frame_count >= max_frames:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        resized = cv2.resize(gray, (48, 48))
        frames.append(resized)
        frame_count += 1

    cap.release()
    frames = np.array(frames)
    frames = frames / 255.0  # normalize
    frames = frames.reshape(-1, 48, 48, 1)  # Add channel dimension
    return frames  # shape: (N, 48, 48, 1)


def analyze_video(path):
    try:
        video_data = preprocess_video(path)  # shape: (N, 48, 48, 1)
        prediction = model.predict(video_data)

        # Use average confidence across frames
        avg_confidence = np.mean(prediction[:, 0])

        return "Cheating" if avg_confidence > 0.5 else "Not Cheating"
    except Exception as e:
        return f"Error processing video: {e}"

