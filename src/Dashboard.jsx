import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
    const navigate = useNavigate();

    const handleBedClick = (id) => {
        navigate(`/patient/${id}`);
    };

    return (
        <div className="container">
            <h2>Diaper Status Tracker</h2>
            <p>Welcome, {user?.username} ({user?.role})</p>

            {user?.role === "admin" && (
                <div>
                    <h3>Admin Dashboard - Bed Status</h3>
                    <div className="grid-container">
                        {[...Array(10)].map((_, i) => {
                            const bedId = i + 1;
                            const statusClass = ["yellow", "green", "red"][i % 3];
                            return (
                                <div
                                    key={bedId}
                                    className={`bed ${statusClass}`}
                                    onClick={() => handleBedClick(bedId)}
                                >
                                    {bedId}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {user?.role === "doctor" && <p>Doctor's Panel: View and manage reports.</p>}
            {user?.role === "nurse" && <p>Nurse's Section: Update diaper status.</p>}

            <button
    className="logout-button"
    onClick={() => {
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload(); // Optional: force app re-render
    }}
>
    Logout
</button>

        </div>
    );
};

export default Dashboard;
