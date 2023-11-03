import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import auth from "../routes/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: "admin", password: "password123" };
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      auth.storeAuthCredential(user.token); // Simpan token ke dalam cookie jika diperlukan
      navigate("/"); // Redirect ke halaman utama
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      auth.storeAuthCredential(dummyUser.token); // Simpan token ke dalam cookie jika diperlukan
      navigate("/"); // Redirect ke halaman utama
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <Header />
      <div className="container content mt-3">
        <h1 className="text-center">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              autoComplete="username"
              placeholder="enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              autoComplete="current-password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
}
