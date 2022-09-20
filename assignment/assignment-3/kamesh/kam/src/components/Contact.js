import React, { useState } from "react";
import "./Contact.css";
import { Button } from "react-bootstrap";
function Contact() {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const { name, mobile, email } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // setData(" ");
    console.log(data);
    setData(" ");
  };
  return (
    <div style={{ marginTop: 20 }}>
      <div className="container">
        <div className="col-lg-12 text-center py-2">
          <h3>Hava Some Question ?</h3>
          <p style={{ color: "brown" }}>
            Submit your info and we will reach you through ph call....
          </p>
          <hr />
        </div>
      </div>
      <div
        className="desc"
        style={{ marginLeft: 30, padding: 10, fontSize: 20, color: "blue" }}
      >
        we are new startup in india right now....we promise you that we can make
        your intrests better with our products and our through our website
      </div>

      {/* <div className="form" style={{width:400,height:300}> */}
      <form
        onSubmit={submitHandler}
        style={{
          marginLeft: 500,
          backgroundColor: "gray",
          height: 300,
          width: 430,
          borderRadius: 40,
          marginTop: 40,
        }}
      >
        <div className="input-area">
          <label>Your Name:</label>
          <br />
          <input
            style={{ width: 250 }}
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
          <br />
          <label>Your Mobile:</label>
          <br />
          <input
            style={{ width: 250 }}
            type="text"
            name="mobile"
            value={mobile}
            onChange={changeHandler}
          />
          <br />
          <label>Your email:</label>
          <br />
          <input
            style={{ width: 250 }}
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <Button style={{ marginLeft: 38, marginTop: 18 }} variant="success">
            Submit
          </Button>
        </div>
      </form>

      {/* </div> */}
    </div>
  );
}

export default Contact;
