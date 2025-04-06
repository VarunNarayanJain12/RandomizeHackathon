import numpy as np
import cv2

# 3D model points of facial landmarks for head pose estimation
MODEL_POINTS = np.array([
    (0.0, 0.0, 0.0),           # Nose tip
    (0.0, -330.0, -65.0),      # Chin
    (-225.0, 170.0, -135.0),   # Left eye left corner
    (225.0, 170.0, -135.0),    # Right eye right corner
    (-150.0, -150.0, -125.0),  # Left mouth corner
    (150.0, -150.0, -125.0)    # Right mouth corner
], dtype=np.float64)

# MediaPipe landmark indices for the above model points
LANDMARK_IDS = [1, 152, 33, 263, 61, 291]

def estimate_yaw(landmarks, image_width, image_height):
    """Estimate yaw (left/right head turn) using solvePnP and selected face landmarks."""
    # Get 2D image points
    image_points = np.array([
        [landmarks[idx].x * image_width, landmarks[idx].y * image_height]
        for idx in LANDMARK_IDS
    ], dtype=np.float64)

    # Camera internals
    focal_length = image_width
    center = (image_width / 2, image_height / 2)
    camera_matrix = np.array([
        [focal_length, 0, center[0]],
        [0, focal_length, center[1]],
        [0, 0, 1]
    ], dtype=np.float64)

    dist_coeffs = np.zeros((4, 1))  # Assuming no lens distortion

    # Solve PnP to get rotation vector
    success, rotation_vector, _ = cv2.solvePnP(MODEL_POINTS, image_points, camera_matrix, dist_coeffs)
    if not success:
        return 0

    # Convert rotation vector to rotation matrix
    rotation_matrix, _ = cv2.Rodrigues(rotation_vector)
    proj_matrix = np.hstack((rotation_matrix, np.zeros((3, 1))))
    _, _, _, _, _, _, euler_angles = cv2.decomposeProjectionMatrix(proj_matrix)

    yaw = euler_angles[1][0]  # Yaw angle in degrees
    return yaw
