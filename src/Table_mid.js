import React, { Fragment } from "react";
import "./style/Mid.css";
import {
  carPerssonDetails,
  deliveryBoyDetails,
  userDetails,
} from "./data/data.js";
import { scheduledOrder, deniedOrder, disputedOrder } from "./data/data2.js";
import { NavLink } from "react-router-dom";

const Table_mid = ({ setNewData, name1, name2, name3 }) => {
  const onDataAdd = (myData) => {
    setNewData(myData);
  };

  const onClickHandler = (value) => {
    switch (value) {
      case carPerssonDetails:
        onDataAdd(carPerssonDetails);

      case deliveryBoyDetails:
        onDataAdd(deliveryBoyDetails);

      case userDetails:
        return onDataAdd(userDetails);

      case scheduledOrder:
        return onDataAdd(scheduledOrder);

      case deniedOrder:
        return onDataAdd(deniedOrder);

      case disputedOrder:
        return onDataAdd(disputedOrder);
    }
  };
  return (
    <>
      <div className="section_2">
        <NavLink
          // to="cardperson"
          to={name1 === "Cart Person Details" ? 'cardperson' : 'deniedOrder'}
         
          className={({ isActive }) => (isActive ? "route_active1" : "route_1")}
          // className={
          //   "route_1" + ((isActive) => (isActive ? "route_active" : ""))
          // }
        >
          {/* <div className="route_1 "> */}
          <div>
            {/* <div className="route_1 route_active"> */}
            <h4 onClick={onClickHandler(name1)}> {name1} </h4>
          </div>
        </NavLink>

        <NavLink
          to={name2 === "Delivery Boy Details"? "delivery":"disputedOrder"}
          className={({ isActive }) => (isActive ? "route_active2" : "route_2")}
        >
          {" "}
          <div>
            <h4 onClick={onClickHandler(name2)}> {name2}</h4>
          </div>
        </NavLink>

        <NavLink
          to={name3 === "User Details"? "userDetails":"scheduledOrder"}
          className={({ isActive }) => (isActive ? "route_active3" : "route_3")}
        >
          <div>
            <h4 onClick={onClickHandler(name3)}>{name3}</h4>
          </div>
        </NavLink>

        {/* <NavLink to="/"  className= {"route_1"+ ((isActive)=>(isActive? 'route_active': ''))}>Add Your Favourite IceCream</NavLink> */}
      </div>
    </>
  );
};

export { Table_mid };
