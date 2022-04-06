import React, { Fragment } from "react";
import "./style/Dash.css";
import { Card } from "./Card";

const Dashboard = () => {
  return (
    <>
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
      <div>
        <div className="cardblock">
          <div className="mainSec">
            <Card content={"Total Cart Person"} number={"12"}   TrueFalse={true}/>
            <Card content={"Total Delivery Boy"} number={"23"}   TrueFalse={true}/>
            <Card content={"Total Users"} number={"1234"}   TrueFalse={true} cd={'cd_blue'}/>
            <Card content={"Unassigned orders"} number={"14"}   TrueFalse={true}/>
            <Card content={"Total Items"} number={"45"}   TrueFalse={true}/>
            <Card content={"Total Active Users"} number={"768"}   TrueFalse={false}  />
            <Card content={"Total Ongoing Bookings"} number={"321"}   TrueFalse={false}/>
            <Card content={"Past Week Bookings"} number={"170"}   TrueFalse={false}/>
            <Card content={"Denied/Disputed order"} number={"9999/9999"}   TrueFalse={true}/>
            <Card content={"Scheduled Order"} number={"14"}   TrueFalse={true}/>
          </div>
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
