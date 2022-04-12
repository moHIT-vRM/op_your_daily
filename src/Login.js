import React, { useState } from "react";
import "./style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const intialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(intialState);
  const [type, setType] = useState("password");

  const url = "http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com";

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  // const onPasswordHandler = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setType()
  // };

  // const sendLogin = async (e) => {
  //   e.preventDefault();
  //   const rep = await fetch(`${url}/api/sm-login`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(user),
  //   });
  //   console.log(rep);
  // };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${url}/api/sm-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const response = await res.json();
    if (res.status === 200) {
      localStorage.setItem("auth_Token", response.Authorization);
      navigate("/");
    }
    // console.log(res);
  };

  return (
    <React.Fragment>
      <div className="fullbackground">
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
            <div className="login_btn">
              <div className="t1">
                <div className="text">
                  <h3>LOGIN</h3>
                  <p>Please login to your account</p>
                </div>
              </div>

              <form className="form" onSubmit={onSubmitHandler}>
                {" "}
                <div className="t3">
                  <fieldset className="field">
                    <legend htmlFor="user">User ID:</legend>
                    <div className="details">
                      <input
                        type="text"
                        placeholder="Enter Your User ID"
                        id="user"
                        name="email"
                        value={user.email}
                        onChange={onChangeHandler}
                        autoComplete="off"
                      ></input>
                      <img src="/img/user.png" alt="error" id="img1"></img>
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
                        placeholder="Enter Your Password"
                        id="pass"
                        name="password"
                        value={user.password}
                        onChange={onChangeHandler}
                      ></input>
                      <img
                        src="/img/eye.png"
                        alt="error"
                        id="img2"
                        // onClick={onPasswordHandler}
                      ></img>
                    </div>
                  </fieldset>
                </div>
                {/* `````````````````````````````````````` */}
                <div className="t5">
                  <input
                    type="submit"
                    // onClick={() => navigate(-1)}
                    value="LOGIN"
                  ></input>
                </div>
              </form>

              <div className="t6">Forget Password?</div>
            </div>
          </div>
          <div className="sec_3">{/* Yep */}</div>
        </div>
        <div className="footer"></div>
      </div>
    </React.Fragment>
  );
};

export { Login };
