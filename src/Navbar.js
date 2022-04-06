import React, { Fragment } from "react";
import './style/Nav.css'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="nav">
        <div className="div1">
          <img src="/img/whitelogo.png" alt="error"></img>
          <h2>Dashboard</h2>
        </div>
        <div className="div2">
          <img src="/img/Group.png" alt="error"></img>
          <img src="/img/Group.png" alt="error"></img>
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
};

export { Navbar };
