import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("jwtToken", data.token);
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login.");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
  };

  const getToken = () => {
    const token = sessionStorage.getItem("jwtToken");
    console.log(token);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={getToken}>Get Token</button>
      </form>
    </div>
  );
};

export default Login;
