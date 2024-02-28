import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  axios.defaults.withCredentials = true;

  useEffect(() => {
    // if (!sessionStorage.getItem("login")) {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        if (res.data.valid) {
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
    // }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", values)

      .then((res) => {
        if (res.data.Login) {
          // console.log(res);
          navigate("/");
        } else {
          // console.log(res);
          alert("No record found");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2 className="mb-3">Log-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="fw-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-success w-100">Log-In</button>
          <p>You are agreed to our terms and condition</p>
          <Link
            to="/signup"
            className=" bg-light w-100 btn btn-default border rounded-0
            text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
