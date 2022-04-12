import React, { Fragment, useState } from "react";


import "./style/Table1.css";
import {  Route, Routes } from "react-router-dom";
// import { Table } from "./Table";

import { CardPerson } from "./CardPerson";
import { Delivery } from "./Delivery";
import { UserDetails } from "./UserDetails";

import { TableHeaders } from "./TableHeaders";


const Table_Container = (props) => {
//   const sectionHeading={
//     heading1: "Cart Person Details",
//     heading2: "Delivery Boy Details",
//     heading3: "User Details",
//   }
//   const valueHeading={
//     heading1: "Denied Orders",
//     heading2: "Diputed Orders",
//     heading3: "Scheduled Orders",
//   }
  
 
  // if({props.value}===1){
  //   <TableHeaders props={sectionHeading}/>
  //   }
  //   else if({props.value}===2){
  //     <TableHeaders props={valueHeading}/>

  //   }
  
  return (
    <>
   <TableHeaders/>
 
    
      <div className="section_3">
        {/* <Table userData={userData}/> */}
          <Routes>
            <Route path="cardperson" element={<CardPerson/>}/>
            <Route path="delivery" element={<Delivery/>}/>
            <Route path="userDetails" element={<UserDetails/>}/>
           
          </Routes>
      </div>
    </>
  );
};

export { Table_Container };


/*    {/* <div className='section_1' >
          <h4 id='btn1'>Back</h4>
          <h4 id='btn2'>+ Add A New Cart Person</h4>
      </div> */
      /* <div className='section_2' >
          <div className='route_1 route_active'><h4>Cart Person Details</h4></div>
          <div className='route_2'><h4>Delivery Boy Details</h4></div>
          <div className='route_3'><h4>User Details</h4></div>
      </div> */
      /* <NavLink to="/"  className= {"route_1"+ ((isActive)=>(isActive? 'route_active': ''))}>Add Your Favourite IceCream</NavLink> */ 
