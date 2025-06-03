#  Real-Time Wetness Detection System for Hospital Management

This project presents an IoT-based smart wetness monitoring system designed to improve hygiene and patient care in hospitals—especially in ICUs and for bedridden patients. The system replaces traditional urine bags with a more efficient, hygienic, and real-time monitoring solution that alerts medical staff when it is wet.



---

##  Hardware Components

- **NodeMCU ESP8266** – Wi-Fi-enabled microcontroller  
- **Moisture Sensor** – Detects wetness level  
- **ULN2003A Driver IC** – Drives LED indicators safely  
- **SATA Cable** – For moisture sensor connection  
- **LEDs (Green, Yellow, Red)** – For real-time moisture indication  
- **BERG Strip** – Sensor pin interfacing  
- **Power Supply (5V or USB)** – Powers NodeMCU and components  
- **Breadboard, Jumpers, Resistors** – Basic circuit assembly  

---

##  Hardware Workflow

1. **Sensor Placement**  
   The moisture sensor is attached to the diaper using a SATA cable for secure and reusable placement.

2. **Signal Detection**  
   The sensor sends analog moisture readings to the NodeMCU's input pin.

3. **Threshold & LED Indication**  
   - Green LED → Dry (<33%)  
   - Yellow LED → Moderate (33–66%)  
   - Red LED → Wet (>66%)  
   The LED blinks accordingly, providing a quick physical indication of the diaper status.

4. **Data Transmission**  
   NodeMCU sends the wetness status to Firebase using Wi-Fi.

---

##  Firebase Integration

- Firebase is used to store real-time wetness data and manage patient records.
- Each update is synced instantly and is accessible via the front-end dashboards.

> ![image](https://github.com/user-attachments/assets/cdb23dd5-e6c2-4815-bb78-48b470cf2882)


---

##  Nurse Dashboard (React JS)

- **Live wetness status** updates from Firebase.
- **Color-coded UI** for diaper status:
  - 🟩 Dry (<33%)
  - 🟨 Moderate (33–66%)
  - 🟥 Wet (>66%)
- **"Diaper Changed" button** starts a **10-hour countdown timer**.
- If no wetness is detected within the 10-hour window, a **reminder alert** is triggered.
- Each nurse is assigned specific patients and only sees relevant data.

---

##  Admin Dashboard

- Built in React JS for managing overall system control.
- Admin can:
  - View **all patient records bed-wise**
  - Assign patients to nurses
  - Add, edit, or delete patient entries
  - Monitor **logs and diaper change alerts**
- MongoDB (optional) is used to store:
  - Historical data
  - Alerts
  - Change history
 
    ![image](https://github.com/user-attachments/assets/2676b8fb-f06c-4a0a-b221-4399176f8e96)


---

##  Backend Overview

- **MongoDB** (NoSQL) for storing long-term data and event logs.
- Can be extended with Node.js/Express APIs to provide advanced querying and analytics.




