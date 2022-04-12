import React, { Fragment, useEffect, useRef } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
// import { Card } from "./Card";
// import { Table_Container } from "./Table_Container";
// import { Navbar } from "./Navbar";
// import { User_profile } from "./User_profile";
// import { Anothertable } from "./Anothertable";
// import { AnotherUser } from "./AnotherUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Table_Container } from "./Table_Container";
import { Table_Container2 } from "./Table_Container2";
// import { Table_Container2 } from "./Table_Container2";

const App = () => {
  const navigate = useNavigate();
  const token = useRef(localStorage.getItem("auth_token"));

  useEffect(() => {
    if (!token.current) {
      navigate("/login");
    }
  }, []);
  return (
    <Fragment>
      {/* <p>hello</p> */}
      {/* <Dashboard /> */}
      {/* <Card /> */}
      {/* <Table_Container /> */}
      {/* <Table_Container /> */}

      {/* <User_profile /> */}

      {/* <Anothertable /> */}
      {/* <AnotherUser /> */}
      {/* <Navbar /> */}
      {/* <Login /> */}
    
        <Routes>
          <Route path="/login" element={<Login />} />
          {token && (
            <>
             
              <Route path="/" element={<Dashboard />} />
              <Route path="/userData/*" element={<Table_Container />} />
              <Route path="/order/*" element={<Table_Container2 />} />{" "}
            </>
          )}
        </Routes>
   
    </Fragment>
  );
};

export default App;
