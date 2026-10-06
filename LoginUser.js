import React, { useState } from "react";
import API from "../api/api";

function LoginUser() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", formData);

      alert(res.data.message);

      // ✅ Store user in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setIsLoggedIn(true);

    } catch (error) {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Login</h2>

      {!isLoggedIn ? (
        <>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br /><br />

          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <p>Welcome User</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default LoginUser;