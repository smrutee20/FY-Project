// PatientDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PatientDetail.css"; // optional: create if you want to style

const patientData = {
  1: {
    name: "Rahul Sharma",
    age: 32,
    admitDate: "20/02/2025",
    diaperChanges: 7,
    nextChange: "2h 15m",
    nurse: "Shanti Gupta",
    contact: "+91 786897878",
    status: "moderate",
    statusText: "🟡 Moderate Wetness",
  },
  2: {
    name: "Anjali Mehra",
    age: 45,
    admitDate: "12/01/2025",
    diaperChanges: 5,
    nextChange: "1h 40m",
    nurse: "Rita Singh",
    contact: "+91 9876543210",
    status: "dry",
    statusText: "🟢 Dry",
  },
  3: {
    name: "Vikram Das",
    age: 60,
    admitDate: "15/03/2025",
    diaperChanges: 8,
    nextChange: "3h 10m",
    nurse: "Amit Sinha",
    contact: "+91 9123456780",
    status: "wet",
    statusText: "🔴 Heavy Wetness",
  },
  4: {
    name: "Sneha Rao",
    age: 28,
    admitDate: "05/02/2025",
    diaperChanges: 6,
    nextChange: "1h 50m",
    nurse: "Pooja Iyer",
    contact: "+91 9998887777",
    status: "moderate",
    statusText: "🟡 Moderate Wetness",
  },
  5: {
    name: "Amitabh Sen",
    age: 72,
    admitDate: "25/01/2025",
    diaperChanges: 9,
    nextChange: "3h 00m",
    nurse: "Rakesh Goyal",
    contact: "+91 9012345678",
    status: "wet",
    statusText: "🔴 Heavy Wetness",
  },
  6: {
    name: "Deepika Verma",
    age: 34,
    admitDate: "18/02/2025",
    diaperChanges: 3,
    nextChange: "2h 30m",
    nurse: "Kajal Mishra",
    contact: "+91 7896541230",
    status: "dry",
    statusText: "🟢 Dry",
  },
  7: {
    name: "Suresh Kumar",
    age: 50,
    admitDate: "22/02/2025",
    diaperChanges: 4,
    nextChange: "1h 20m",
    nurse: "Lata Pawar",
    contact: "+91 7766554433",
    status: "moderate",
    statusText: "🟡 Moderate Wetness",
  },
  8: {
    name: "Kavita Joshi",
    age: 40,
    admitDate: "28/01/2025",
    diaperChanges: 2,
    nextChange: "4h 00m",
    nurse: "Sunita Rani",
    contact: "+91 9988776655",
    status: "dry",
    statusText: "🟢 Dry",
  },
  9: {
    name: "Rajeev Batra",
    age: 55,
    admitDate: "03/03/2025",
    diaperChanges: 10,
    nextChange: "0h 30m",
    nurse: "Vikash Mehta",
    contact: "+91 6677889900",
    status: "wet",
    statusText: "🔴 Heavy Wetness",
  },
  10: {
    name: "Nikita Jain",
    age: 26,
    admitDate: "10/02/2025",
    diaperChanges: 6,
    nextChange: "2h 45m",
    nurse: "Neha Kapoor",
    contact: "+91 1234567890",
    status: "moderate",
    statusText: "🟡 Moderate Wetness",
  },
};

const PatientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = patientData[id];

  if (!patient) return <p style={{ textAlign: "center" }}>Patient not found!</p>;

  return (
    <div className="patient-container">
      <h2>Diaper Status Report - Bed {id}</h2>
      <p><strong>Patient Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Date of Admit:</strong> {patient.admitDate}</p>
      <p><strong>Number of Diaper Changes:</strong> {patient.diaperChanges}</p>
      <p><strong>Time Until Next Diaper Change:</strong> {patient.nextChange}</p>
      <p><strong>Nurse Name:</strong> {patient.nurse}</p>
      <p><strong>Contact Number:</strong> {patient.contact}</p>
      <p className={`status ${patient.status}`}>{patient.statusText}</p><br></br>

      <button onClick={() => navigate(-1)}>Back to Dashboard</button>
    </div>
  );
};

export default PatientDetail;
