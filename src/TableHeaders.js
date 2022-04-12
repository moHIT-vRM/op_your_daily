
import React ,{Fragment, useEffect, useState} from 'react'
import { Table_top } from "./Table_top";
import { Table_mid } from "./Table_mid";
import { Navbar } from "./Navbar";
import "./style/Nav.css";

const TableHeaders = (props) => {
    const [userData, setNewData] = useState();
   

    
  return (
    <>
     <Navbar />
      <Table_top />
     
      <Table_mid setNewData={setNewData} name1={"Cart Person Details"} name2={"Delivery Boy Details"} name3={"User Details"}/>

    
     
      

        
    </>
  )
}

export  {TableHeaders}