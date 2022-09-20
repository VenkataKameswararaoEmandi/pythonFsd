import React, { useState } from "react";
import "./SignIn.css";
function SignIn() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      console.log(data);
    } else {
      alert("passwords are not matched");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 text-center py-5">
          <div className="sign-here">
            <h3>SignUpHere</h3>
            <form className="form" onSubmit={submitHandler}>
              <input
                type="text"
                className="input"
                value={name}
                name="name"
                placeholder="Enter Your Name"
                onChange={changeHandler}
              />
              <br />
              <input
                type="email"
                className="input"
                value={email}
                name="email"
                onChange={changeHandler}
                placeholder="Enter Your email"
              />
              <br />

              <input
                type="password"
                className="input"
                value={password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Your Password"
              />
              <br />
              <input
                type="password"
                className="input"
                value={confirmPassword}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Your Password"
              />
              <br />
              <input type="submit" className="btn" name="submit" />

              <p>
                If you have already account ?
                <span>
                  <a href="/login" style={{ color: "white" }}>
                    LogIn Here
                  </a>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
