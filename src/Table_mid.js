import React, { Fragment } from "react";
import "./style/Mid.css";
import{ carPerssonDetails,  deliveryBoyDetails, userDetails} from './data/data.js'

const Table_mid = ({setNewData}) => {
  

   const onDataAdd=(myData)=>{
      setNewData(myData)
   }
  return (
    <>
      <div className="section_2">
        <div className="route_1 route_active">
          <h4 onClick={()=>onDataAdd(carPerssonDetails)} >Cart Person Details</h4>
        </div>
        <div className="route_2">
          <h4 onClick={()=>onDataAdd(deliveryBoyDetails)}>Delivery Boy Details</h4>
        </div>
        <div className="route_3">
          <h4 onClick={()=>onDataAdd(userDetails)}>User Details</h4>
        </div>
        {/* <NavLink to="/"  className= {"route_1"+ ((isActive)=>(isActive? 'route_active': ''))}>Add Your Favourite IceCream</NavLink> */}
      </div>
    </>
  );
};

export { Table_mid };
