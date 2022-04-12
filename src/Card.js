import React, { Fragment } from "react";
import {  NavLink } from "react-router-dom";
import "./style/Card.css";

const Card = ({ content, number, TrueFalse, id, path }) => {
  
  return (
    <>
      <div className="card">
        <div className="card_title">
          <h4>{content}</h4>
        </div>
        <div className={"card_number Cedit"} id={id}>
          <h5>{number}</h5>
        </div>
        {/* { TrueFalse?  <div className='card_btn' >View Details</div> : '' } */}
        {TrueFalse ? 
         
  <NavLink to={path}    className={({ isActive }) => (isActive ? "" : "card_btn")}>
  <div>
  {/* <div className="card_btn"> */}
          View Details
          </div>
  </NavLink>
          
        : 
          ""
        }
      </div>
    </>
  );
};

export { Card };
