import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Nav.css";

const Navbar = () => {
  const [hide, show] = useState(false);
  const navigate = useNavigate();

  const onLogout = (e) => {
    localStorage.removeItem("auth_Token");
    navigate("/login");
  };
  return (
    <React.Fragment>
      <div className="nav">
        <div className="div1">
          <img src="/img/whitelogo.png" alt="error"></img>
          <h2>Dashboard</h2>
        </div>
        <div className="div2">
          <img src="/img/Group.png" alt="error"></img>
          <img
            src="/img/logout.svg"
            alt="error"
            id="logout"
            onClick={onLogout}
          ></img>
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
};

export { Navbar };
