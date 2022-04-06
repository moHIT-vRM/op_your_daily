import React, { Fragment } from "react";
import "./style/Mid.css";

const Table_mid = () => {
  return (
    <>
      <div className="section_2">
        <div className="route_1 route_active">
          <h4>Cart Person Details</h4>
        </div>
        <div className="route_2">
          <h4>Delivery Boy Details</h4>
        </div>
        <div className="route_3">
          <h4>User Details</h4>
        </div>
        {/* <NavLink to="/"  className= {"route_1"+ ((isActive)=>(isActive? 'route_active': ''))}>Add Your Favourite IceCream</NavLink> */}
      </div>
    </>
  );
};

export { Table_mid };
