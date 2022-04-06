import React from "react";
import "./style/Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="heading">
        <p></p>
        <div>
          {" "}
          <img src="/img/Logo.png" alt="error"></img>
        </div>
      </div>
      <div className="section">
        <div className="sec_1">
          <img src="/img/End.png" alt="error"></img>
        </div>
        <div className="sec_2">
          <div className="form">
            <div className="t1">
              <div className="text">
                <h3>LOGIN</h3>
                <p>Please login to your account</p>
              </div>
            </div>

            <div className="t3">
              <fieldset className="field">
                <legend htmlFor="user">User ID:</legend>
                <div className="details">
                  <input
                    type="text"
                    value=""
                    placeholder="Enter Your User ID"
                    id="user"
                  ></input>
                  <div>
                    <img src="/img/user.png" alt="error"></img>
                  </div>
                </div>
              </fieldset>
            </div>

         

            <div className="t4">
              {" "}
              <fieldset className="field">
                <legend>Password:</legend>
                <div className="details">
                  <input
                    type="password"
                    value=""
                    placeholder="Enter Your Password"
                    id="pass"
                  ></input>
                  <div>
                    <img src="/img/eye.png" alt="error"></img>
                  </div>
                </div>
              </fieldset>
            </div>
           


            {/* `````````````````````````````````````` */}
            <div className="t5">
              <input type="button" value="LOGIN"></input>
            </div>
            <div className="t6">Forget Password?</div>
          </div>
        </div>
        <div className="sec_3">{/* Yep */}</div>
      </div>
      <div className="footer"></div>
    </React.Fragment>
  );
};

export { Login };
