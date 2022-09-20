import React, { useState } from "react";
import "./styles.css";
import { sigupUserApiCall, loginUserAPIcall } from "./apis";
import { useNavigate } from "react-router-dom";

export default function LoginSignupPage(props) {
  const [data, setData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function loginUser() {
    let res = await loginUserAPIcall(data);
    if (res.state) {
      localStorage.setItem("token", res.data.data);
      navigate("/dashboard");
      setData({ username: "", password: "" });
    } else {
      setStatus("User not authorized", res.data);
    }
  }

  async function signupUser() {
    let res = await sigupUserApiCall(data);
    if (res.state) {
      setStatus("Accound Created");
      setData({ username: "", password: "" });
    } else {
      setStatus("Failed to create Account, ", res.data);
    }
  }

  return (
    <div className="container">
      <div className="box">
        <input
          className="inputbox-1"
          placeholder="Enter Username"
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          className="inputbox-2"
          placeholder="Enter Password"
          type="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <span className="button-1" onClick={loginUser}>
          Login
        </span>
        <span className="button-2" onClick={signupUser}>
          SignUp
        </span>
      </div>
      {status.length > 0 && <span>{status}</span>}
    </div>
  );
}
