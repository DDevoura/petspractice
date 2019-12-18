import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { username: username, password: password };
    console.log("hi");
    return axios({
      url: "https://mypets-app.herokuapp.com/api/auth/login",
      method: "POST",
      data: credentials
    }).then(res => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
