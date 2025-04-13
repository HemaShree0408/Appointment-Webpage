import React, { useState } from "react";
import "./index.css";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  const addAppointment = () => {
    if (!name || !reason || !date) return;
    const newAppointment = {
      name,
      reason,
      date,
      status: "scheduled"
    };
    setAppointments([...appointments, newAppointment]);
    setName("");
    setReason("");
    setDate("");
  };

  const markAsCompleted = (index) => {
    const updated = [...appointments];
    if (updated[index].status !== "Completed") {
      updated[index].status = "Completed";
      setCompletedCount(completedCount + 1);
    }
    setAppointments(updated);
  };

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Appointment List</h2>
        <input 
          type="text" 
          placeholder="Patient Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Reason" 
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addAppointment}>Add Appointment</button>

        {appointments.map((app, idx) => (
          <div className="card" key={idx}>
            <p><strong>Name of Patient:</strong>{app.name}</p>
            <p><strong>Reason:</strong>{app.reason}</p>
            <p><strong>Date:</strong>{new Date(app.date).toLocaleDateString()}</p>
            <p><strong>Status:</strong>{app.status}</p>
            {app.status !== "Completed" && (
              <button onClick={() => markAsCompleted(idx)}>Mark as completed</button>
            )}
          </div>
        ))}
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Total Completed Appointments: {completedCount}
        </p>
      </div>
    </div>
  );
}

export default App;
