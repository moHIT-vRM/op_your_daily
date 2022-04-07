import React, { Fragment } from "react";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import "./style/Dash.css";
import "./style/Nav.css";

const Dashboard = () => {
  return (
    <>
      {/* <div className="nav">
        <div className="div1">
          <img src="/img/whitelogo.png" alt="error"></img>
          <h2>Dashboard</h2>
        </div>
        <div className="div2">
          <img src="/img/Group.png" alt="error"></img>
          <img src="/img/Group.png" alt="error"></img>
        </div>
      </div>
      <div> */}
      <Navbar />
      <div className="cardblock">
        <div className="mainSec">
          <Card content={"Total Cart Person"} number={"12"} TrueFalse={true} />
          <Card content={"Total Delivery Boy"} number={"23"} TrueFalse={true} />
          <Card
            content={"Total Users"}
            number={"1234"}
            TrueFalse={true}
            id={"cd_blue"}
          />
          <Card content={"Unassigned orders"} number={"14"} TrueFalse={true} />
          <Card content={"Total Items"} number={"45"} TrueFalse={true} />
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
            TrueFalse={true}
          />
          <Card content={"Scheduled Order"} number={"14"} TrueFalse={true} />
        </div>
      </div>
    </>
  );
};

export { Dashboard };

/*  
 <div className="count1">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="count2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>


  lorem late 1880s by the Dunbar & Sullivan Company to manufacture and
          store explosives during their dredging of the Livingstone Channel, in
          a successful attempt to circumvent an 1880 court order forbidding the
          company from storing explosives on nearby lorem late 1880s by the
          Dunbar & Sullivan Company to manufacture and store explosives during
          their dredging of the Livingstone Channel, in a successful attempt to
          circumvent an 1880 court order forbidding the company from storing
          explosives on nearby lorem late 1880s by the Dunbar & Sullivan Company
          to manufacture and store explosives during their dredging of the
          Livingstone Channel, in a successful attempt to circumvent an 1880
          court order forbidding the company from storing explosives on nearby
          lorem late 1880s by the Dunbar & Sullivan Company to manufacture and
          store explosives during their dredging of the Livingstone Channel, in
          a successful attempt to circumvent an 1880 court order forbidding the
          company from storing explosives on nearby
*/
