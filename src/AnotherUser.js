import React, { Fragment } from "react";
import "./style/Anotheruser.css";

const AnotherUser = () => {
  return (<>


<div className="profile">
        <div className="details0">
          <img src="/img/cross.png" alt="error"></img>
        </div>
        <div className="details1">
          <div className="img_part">
            <img src="/img/Group.svg" alt="error"></img>
            <img src="/img/photo.svg" alt="error" id="photo"></img>
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
              <input type="text" placeholder="Enter Your Password" ></input>
            </div>
            <div>
              <input type="text" placeholder="Enter Your Reg. Date" id="edit"></input>
            </div>
          </div>
        </div>
       
        <div className="details3">
          <input type="button" value="Add"></input>
        </div>
      </div>
  </>
    
  )
}

export  {AnotherUser}