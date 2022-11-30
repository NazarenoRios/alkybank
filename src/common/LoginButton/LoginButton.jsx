import React from "react";
import "./LoginButton.css";

const LoginButton = () => {
  return (
    <div>
      <button className="loggin">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Log in</span>
      </button>
    </div>
  );
};

export default LoginButton;
