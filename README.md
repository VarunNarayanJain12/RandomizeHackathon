# 🛡️ ExamGuard AI - AI-Powered Cheating Detection System

**ExamGuard AI** is a full-stack solution built to detect and prevent cheating in both **online and offline exams**, using real-time monitoring, post-exam analysis, and AI-powered automation. The system features a smart dashboard for **faculty and students**, and integrates seamlessly with the college website to reduce manual intervention.

---

## 🚀 Features

### 🔍 Online Monitoring (Real-Time)
- Detects cheating via webcam in real-time
- Tracks face, eye movement, and head direction
- Detects if the user looks away from the screen
- Flags when **no user is found** in the frame
- Identifies **multiple persons** in the frame
- Detects presence of **hands or unauthorized gestures**
- Implements an **Erit Score system**:
  - Starts at **100** for every user
  - Points are **deducted based on the type/severity** of suspicious activity
  - If score goes **below 60**, the exam is marked for **manual evaluation**
- Each flagged activity **captures a screenshot** as evidence and stores it with a timestamp

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
- Stores screenshots for every suspicious detection

### 🧑‍🎓 Student Dashboard
- View exam sessions and status
- Get notified of flagged incidents
- Access feedback and resolution info

### 👨‍🏫 Faculty Dashboard
- Monitor live exams or review past sessions
- View flagged students with evidence, timestamps, and screenshots
- Manage alerts, review Erit Score status, and submit reports

### 🏫 College Website Integration
- Dashboards embedded within the institution's portal
- Auto-sync student and faculty data
- Reduces manual review, data entry, and communication overhead

### 📊 Reporting System
- Generate reports per session or student
- Export PDFs with predictions, Erit Scores, timestamps, and screenshots
- Centralized records for audits or academic review

---

## 🎥 Demo & Video Showcase

- 📺 **Prototype Overview**  
  🔗 [Watch here](https://drive.google.com/drive/folders/1INt6SyCqYIho9vAquzB4UuxJqMDhsM0M?usp=share_link)

---

## 🛠️ Tech Stack

| Layer           | Tech Used                     |
|------------------|-------------------------------|
| Frontend         | Next.js, Tailwind CSS, TypeScript |
| Backend          | FastAPI (Python)              |
| AI Model         | TensorFlow/Keras              |
| Video Processing | OpenCV, NumPy                 |
| Data Flow        | RESTful APIs + FormData       |
| Dashboard        | Embedded in college portal    |

---

## 🧪 How It Works

1. **Live Exams**:
   - AI detects cheating in real-time using webcam feed.
   - Uses detection models for faces, hands, gaze direction, multiple persons, and presence.
   - Every student starts with an **Erit Score of 100**.
   - Suspicious activities lead to score deduction.
   - **If the score drops below 60**, session is escalated to manual review.
   - Screenshots are captured for each flagged moment.

2. **Recorded Exams**:
   - Videos (including CCTV) are uploaded and processed for frame-wise analysis.
   - Reports with predictions and flagged events are generated.

3. **Alerts & Screenshots**:
   - AI flags behaviors and generates alerts in real-time or during post-processing.
   - Screenshots are auto-stored with timestamps and type of suspicion.

4. **Dashboards**:
   - **Students**: Track exam sessions, status, Erit Score, and alerts.
   - **Faculty**: View flagged sessions, review Erit Score trend, examine screenshots, and generate reports.

5. **College Portal Integration**:
   - Student/faculty dashboards are embedded within the institution's website.
   - Eliminates data duplication and reduces manual work.

---

## 🧰 Setup (Local)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/VarunNarayanJain12/RandomizeHackathon.git
   cd examguard-ai
