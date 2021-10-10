import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("https://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };
  return (
    <div className="login">
      <h1> Login</h1>

      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChnage={handleChange}
        required
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your passwrord"
        onChnage={handleChange}
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <button
        type="button"
        className="link-button"
        onClick={() => history.push("/register")}
      >
        New User? Create an account
      </button>
    </div>
  );
};
export default Login;
