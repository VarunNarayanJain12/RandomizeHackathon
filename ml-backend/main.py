from fastapi import FastAPI, File, UploadFile, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import shutil
import os
import base64
from utils.predict import analyze_video

app = FastAPI()

# Allow frontend (Next.js) to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
async def predict_cheating(file: UploadFile = File(...)):
    video_path = f"temp_{file.filename}"
    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = analyze_video(video_path)

    os.remove(video_path)  # Clean up

    print("Result:", result)
    return {"result": result}


# ✅ Safe YOLOv8 deserialization
def enable_yolov8_deserialization():
    from torch.serialization import add_safe_globals
    from ultralytics.nn.tasks import DetectionModel
    add_safe_globals([DetectionModel])


# ✅ Pydantic model for base64 image input
class ImageInput(BaseModel):
    image: str  # base64-encoded image (with or without data:image/jpeg;base64, prefix)


@app.post("/predict-yolov8")
async def predict_with_yolov8(data: ImageInput):
    try:
        enable_yolov8_deserialization()
        from ultralytics import YOLO

        # Extract and decode base64 image
        image_data = data.image
        if "," in image_data:
            image_data = image_data.split(",")[1]  # remove data:image/jpeg;base64, if present

        image_bytes = base64.b64decode(image_data)

        # Save temporary image
        image_path = "temp_frame.jpg"
        with open(image_path, "wb") as f:
            f.write(image_bytes)

        # Load model and make prediction
        model = YOLO("utils/best.pt")
        results = model.predict(image_path, save=False)
        predictions = results[0].tojson()

        os.remove(image_path)  # Clean up

        return {"result": predictions}

    except Exception as e:
        print("🔥 Prediction error:", str(e))
        return {"error": str(e)}
