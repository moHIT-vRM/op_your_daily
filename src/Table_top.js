import React, { Fragment, useState } from "react";
import "./style/Top.css";
import { User_profile } from "./User_profile";
import { useNavigate } from "react-router-dom";

const Table_top = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onOpenHandle=(open)=>{
    setOpen(open)
  }
  return (
    <>
      <div className="section_1">
        {/* <h4 id="btn1">Back</h4> */}
        <input
          type="button"
          value="Back"
          id="btn1"
          onClick={() => navigate('/')}
        ></input>
        {/* <h4 id="btn2">+ Add A New Cart Person</h4> */}

        {open ? <User_profile open={open} handleOpen={onOpenHandle}/> : null}

        <input
          type="button"
          value="+ Add A New Cart Person"
          id="btn2"
          onClick={ ()=>{ onOpenHandle(true)}}
        ></input>
      </div>
    </>
  );
};

export { Table_top };
