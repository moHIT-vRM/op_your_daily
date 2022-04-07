import React, { Fragment, useState } from "react";
import { Navbar } from "./Navbar";
import "./style/Nav.css";
import "./style/Table1.css";
import { NavLink } from "react-router-dom";
import { Table } from "./Table";
import { Table_top } from "./Table_top";
import { Table_mid } from "./Table_mid";

const Table_Container = () => {
  const [userData, setNewData] = useState([]);
  return (
    <>
      <Navbar />
      <Table_top />
      <Table_mid setNewData={setNewData}/>
      {/* <div className='section_1' >
          <h4 id='btn1'>Back</h4>
          <h4 id='btn2'>+ Add A New Cart Person</h4>
      </div> */}
      {/* <div className='section_2' >
          <div className='route_1 route_active'><h4>Cart Person Details</h4></div>
          <div className='route_2'><h4>Delivery Boy Details</h4></div>
          <div className='route_3'><h4>User Details</h4></div>
      </div> */}
      {/* <NavLink to="/"  className= {"route_1"+ ((isActive)=>(isActive? 'route_active': ''))}>Add Your Favourite IceCream</NavLink> */}
      <div className="section_3">
        <Table userData={userData}/>
      </div>
    </>
  );
};

export { Table_Container };
