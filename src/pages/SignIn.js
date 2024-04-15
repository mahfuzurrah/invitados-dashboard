import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "../components/assets/img/logo.png";
import InputField from "../components/inputField/InputField";
import PasswordInput from "../components/inputField/PasswordInput";

function SignIn() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlepassChange = (event) => {
    setPass(event.target.value);
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="bg"></div>
      <div className="sign_in_area log_container">
        <img src={Logo} alt="Logo" />
        <div action="" className="from_area">
          <h2>Sign in to your account</h2>
          <div className="btn_group">
            <button className="btn">
              <FaGoogle />
              Sign in with Google
            </button>
            <button className="btn">
              <FaFacebook />
              Sign in with Facebook
            </button>
            <button className="btn">
              <FaApple />
              Sign in with Apple
            </button>
          </div>
          <p className="my-3 text-center">OR</p>
          <form action="" className="input_form">
            <div className="input_group">
              <InputField
                label="Email"
                value={name}
                placeholder="Email"
                star="*"
                onChange={handleNameChange}
              />
              <PasswordInput
                label="Password"
                value={pass}
                placeholder="Password"
                star="*"
                onChange={handlepassChange}
              />
            </div>
            <button className="rem_btn mt-3" onClick={handleToggle}>
              {isToggled ? (
                <PiToggleLeftFill className="icons" />
              ) : (
                <PiToggleRightFill className="icons" />
              )}{" "}
              Remember me
            </button>
            <Link to="/dashboard" className="mt-3">
              <button className="btn mt-4 sign_in_btn">Sing In</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
