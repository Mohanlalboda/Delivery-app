import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sing Up");

  return (
    <div className="login-popup">
      <from className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="text" placeholder="Your email" required />
          <input type="text" placeholder="Password" required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "Loing"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & Privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrState("Sing Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
        )}
      </from>
    </div>
  );
};

export default LoginPopup;
