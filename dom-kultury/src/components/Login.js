import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GeneralData } from "../Context";
import "../styles/Login.css";

function Login() {
  const { setUserData } = useContext(GeneralData);
  const [name, setName] = useState("Guest");
  const [userType, setUserType] = useState("guest");
  const history = useHistory();
  const login = () => {
    setUserData({
      isLoggedIn: true,
      userType: userType,
      name: name,
    });
    history.push("/");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h5>Zaloguj sie do aplikacji</h5>
        <h4>Zarzadzania Domami Kultury FLEX</h4>
        <div>Twoje imie:</div>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <div>Wybierz role:</div>
        <select
          name="userType"
          onChange={(event) => setUserType(event.target.value)}
        >
          <option value="guest">Guest</option>
          <option value="developer">Developer/Administrator</option>
          <option value="organizator">Employee</option>
          <option value="student">Student</option>
        </select>
        <button onClick={login}>Zaloguj</button>
      </div>
    </div>
  );
}

export default Login;
