import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
    return (
        <div className="container">
            <h2>Diaper Status Tracker</h2>
            <p>Welcome, {user?.username} ({user?.role})</p>

            {user?.role === "admin" && (
                <div>
                    <h3>Admin Dashboard - Bed Status</h3>
                    <div className="grid-container">
                        <div className="bed yellow" onClick={() => alert('Viewing Patient 1')}>1</div>
                        <div className="bed green">2</div>
                        <div className="bed red">3</div>
                        <div className="bed green">4</div>
                        <div className="bed yellow">5</div>
                        <div className="bed green">6</div>
                        <div className="bed red">7</div>
                        <div className="bed green">8</div>
                        <div className="bed yellow">9</div>
                        <div className="bed green">10</div>
                    </div>
                </div>
            )}

            {user?.role === "doctor" && <p>Doctor's Panel: View and manage reports.</p>}
            {user?.role === "nurse" && <p>Nurse's Section: Update diaper status.</p>}

            <button className="logout-button" onClick={() => alert('Logging out')}>Logout</button>
        </div>
    );
};

export default Dashboard;
