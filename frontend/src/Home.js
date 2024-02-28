import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    // if (!sessionStorage.getItem("login")) {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.username);
          // console.log(sessionStorage.getItem("login"));
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
    // }
  }, []);

  return (
    <div>
      <p>Welcome Home {name}</p>
      HOME IS HERE...
    </div>
  );
};

export default Home;
