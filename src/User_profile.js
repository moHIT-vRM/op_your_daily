import React, { Fragment, useState } from "react";
import "./style/User.css";


const User_profile = ({open , handleOpen}) => {
  
const handleCross =()=>{
  handleOpen(false);
  // console.log(open)
}
  
  return (
    <>
   
      <div className="profile">
      
        <div className="details0" onClick={handleCross}>
          <img src="/img/cross.png" alt="error"></img>
        </div>
        <div className="details1">
          <div className="img_part">
            <img src="/img/person.png" alt="error"></img>
          </div>
          <div className="content">
            <div>Name</div>
            <div>Contact</div>
            <div>Reg. Date</div>
          </div>
          <div className="input_part">
            <div>
              <input type="text" placeholder="Enter Your Name"></input>
            </div>
            <div>
              <input type="text" placeholder="Enter Your Password" id="edit"></input>
            </div>
            <div>
              <input type="text" placeholder="Enter Your Reg. Date"></input>
            </div>
          </div>
        </div>
        <div className="details2">
          <div className="div_block">
        
            <div className="total_num green_color">  <img src="/img/rupee.png" alt="error"></img>1340 </div>
            <div className="total_name">Total Business</div>
          </div>
          <div className="div_block">
        
            <div className="total_num red_color">  <img src="/img/flag.png" alt="error"></img> 32</div>
            <div className="total_name">Flagged</div>
          </div>
          <div className="div_block">
            
            <div className="total_num orange_color">4.2  <img src="/img/star.png" alt="error"></img> </div>
            <div className="total_name">Avg. Rating</div>
          </div>
          <div className="div_block">
            
            <div className="total_num green_color">30</div>
            <div className="total_name">Total Order</div>
          </div>
          <div className="div_block">
            
            <div className="total_num red_color">03</div>
            <div className="total_name">Denied</div>
          </div>
          <div className="div_block">
            
            <div className="total_num orange_color">02</div>
            <div className="total_name">Cancel</div>
          </div>
          
        </div>
        <div className="details3">
          <input type="button" value="Save Changes"></input>
        </div>
      </div>
    </>
  );
};

export { User_profile };
