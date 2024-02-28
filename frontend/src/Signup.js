import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      // .then((res) => console.log(res))
      .then((res) => {
        setValues(res);
        // console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2 className="mb-3">Sign-Up Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="fw-bold">
              UserName
            </label>
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="UserName"
              onChange={handleInput}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="fw-bold">
              Email
            </label>
            <input
              className="form-control rounded-0"
              type="email"
              placeholder="email"
              onChange={handleInput}
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              placeholder="Password"
              onChange={handleInput}
              name="password"
            />
          </div>
          <button className="btn btn-success w-100">Sign Up</button>
          <p>You are agreed to our terms and condition</p>
          <Link
            to="/signup"
            className=" bg-light w-100 btn btn-default border rounded-0
            text-decoration-none"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
