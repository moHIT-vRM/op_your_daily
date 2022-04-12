import React, { Fragment, useRef } from "react";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import "./style/Dash.css";
import "./style/Nav.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="cardblock">
        <div className="mainSec">
          <Card
            content={"Total Cart Person"}
            number={"12"}
            path={"/userData/cardperson"}
            TrueFalse={true}
            
          />
          <Card
            content={"Total Delivery Boy"}
            number={"23"}
            path={"/userData/delivery"}
            TrueFalse={true}
            
          />

          <Card
            content={"Total Users"}
            path={"/userData/userDetails"}
            number={"1234"}
            TrueFalse={true}
            id={"cd_blue"}
        
          />
          <Card
            content={"Unassigned orders"}
            number={"14"}
            path={"/userData/Unassigned-orders"}
            TrueFalse={true}
          />
          <Card
            content={"Total Items"}
            number={"45"}
            path={"/userData/Total-Items"}
            TrueFalse={true}
          />
          <Card
            content={"Total Active Users"}
            number={"768"}
            id={"cd_green"}
            TrueFalse={false}
          />
          <Card
            content={"Total Ongoing Bookings"}
            number={"321"}
            TrueFalse={false}
          />
          <Card
            content={"Past Week Bookings"}
            number={"170"}
            TrueFalse={false}
          />
          <Card
            content={"Denied/Disputed order"}
            number={"9999/9999"}
            id={"cd_size"}
            path={"/order/deniedOrder"}
            TrueFalse={true}
           
          />
          <Card
            content={"Scheduled Order"}
            number={"14"}
            path={"/order/scheduledOrder"}
            TrueFalse={true}
           
          />
        </div>
      </div>
    </>
  );
};

export { Dashboard };

/* <div className="nav">
  <div className="div1">
    <img src="/img/whitelogo.png" alt="error"></img>
    <h2>Dashboard</h2>
  </div>
  <div className="div2">
    <img src="/img/Group.png" alt="error"></img>
    <img src="/img/Group.png" alt="error"></img>
  </div>
</div>
<div> */