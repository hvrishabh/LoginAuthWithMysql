const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const session = require("express-session");
// const cookieParse = require("cookie-parser");

// import express from "express";
// import mysql from "mysql";
// import cors from "cors";
// import session from "express-session";
// import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
// app.use(cookieParse());
// app.use(session(), {
//   secret: "secret", // a secret key used to encrypt the session cookie
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 60 * 24,
//   }, // set the session cookie properties
// });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

//// signup api
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?) ";

  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, result) => {
    // if (err) return res.json(err);
    if (err) return res.json({ Message: "error in signup node api" });
    return res.json(result);
  });
});

//// login api
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ? AND password = ? ";

  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json(err);

    if (result.length > 0) {
      //   req.session.username = result[0].username;
      //   console.log(req.session.username);
      return res.json({ Login: true });
    } else {
      return res.json({ Login: false });
    }
  });
});

// //
app.listen(8081, () => {
  console.log("connected with server of LoginAuthWithMysql");
});
