import React, { Fragment, useState } from "react";
import { Navbar } from "./Navbar";
import "./style/Nav.css";
import "./style/Table1.css";
import { Route, Routes } from "react-router-dom";
import { Table_top } from "./Table_top";
import { Table_mid } from "./Table_mid";
import { ScheduledOrder } from "./ScheduledOrder";
import { DeniedOrder } from "./DeniedOrder";
import { DisputedOrder } from "./DisputedOrder";

const Table_Container2 = () => {
  const [userData, setNewData] = useState([]);
  return (
    <>
      <Navbar />
      <Table_top />
      <Table_mid
        setNewData={setNewData}
        name1={"Denied Order"}
        name2={"Disputed Order"}
        name3={"Scheduled Order"}
      />

      <div className="section_3">
        {/* <Table userData={userData}/> */}
        <Routes>
          <Route path="scheduledOrder" element={<ScheduledOrder />} />
          <Route path="deniedOrder" element={<DeniedOrder />} />
          <Route path="disputedOrder" element={<DisputedOrder />} />
        </Routes>
      </div>
    </>
  );
};

export { Table_Container2 };
