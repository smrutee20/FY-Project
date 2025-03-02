import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "./mockUsers";

const Login = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/dashboard");
        } else {
            setError("Invalid Credentials");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Login;