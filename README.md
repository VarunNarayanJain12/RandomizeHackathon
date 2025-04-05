# 🛡️ ExamGuard AI - AI-Powered Cheating Detection System

**ExamGuard AI** is a full-stack solution built to detect and prevent cheating in both **online and offline exams**, using real-time monitoring, post-exam analysis, and AI-powered automation. The system features a smart dashboard for **faculty and students**, and integrates seamlessly with the college website to reduce manual intervention.

---

## 🚀 Features

### 🔍 Online Monitoring (Real-Time)
- Detects cheating via webcam in real-time
- Tracks face, eye movement, and head direction
- Instant alerts for anomalies

### 🎥 Offline Monitoring
- Upload recorded videos or **CCTV footage**
- Analyzes and flags cheating behavior
- Fast and efficient frame-wise video classification

### 🧠 AI-Powered Detection
- Built using TensorFlow/Keras with a custom CNN model
- Trained on a dataset of cheating and non-cheating scenarios
- Frame-wise binary classification

### 📣 Automated Alerts
- Flags suspicious behavior in real-time or post-processing
- Pushes alerts to the faculty dashboard
- Records event timestamps and logs

### 🧑‍🎓 Student Dashboard
- View exam sessions and status
- Get notified of flagged incidents
- Access feedback and resolution info

### 👨‍🏫 Faculty Dashboard
- Monitor live exams or review past sessions
- View flagged students with evidence and timestamps
- Manage alerts and submit reports

### 🏫 College Website Integration
- Dashboards embedded within the institution's portal
- Auto-sync student and faculty data
- Reduces manual review, data entry, and communication overhead

### 📊 Reporting System
- Generate reports per session or student
- Export PDFs with predictions, timestamps, and video references
- Centralized records for audits or academic review

---

## 🎥 Demo & Video Showcase

- 📺 **Prototype Overview**  
  🔗 [Watch here](https://drive.google.com/drive/folders/1INt6SyCqYIho9vAquzB4UuxJqMDhsM0M?usp=share_link)
  
---

## 🛠️ Tech Stack

| Layer       | Tech Used                     |
|-------------|-------------------------------|
| Frontend    | Next.js, Tailwind CSS, TypeScript |
| Backend     | FastAPI (Python)              |
| AI Model    | TensorFlow/Keras              |
| Video Processing | OpenCV, NumPy            |
| Data Flow   | RESTful APIs + FormData       |
| Dashboard   | Embedded in college portal    |


---

## 🧪 How It Works

1. **Live Exams**: AI detects cheating in real-time using webcam.
2. **Recorded Exams**: Videos (including CCTV) are uploaded for analysis.
3. **Alerts**: AI flags behaviors; alerts go to faculty dashboard.
4. **Dashboards**:
   - **Students**: Track exam sessions, status, and alerts.
   - **Faculty**: View flagged videos, submit decisions, and generate reports.
5. **College Portal**: Dashboards are integrated to auto-fetch user data and reduce manual admin work.

---

## 🧰 Setup (Local)

1. **Clone the Repository**
   ```bash
   git clone https://git
   cd examguard-ai
---
