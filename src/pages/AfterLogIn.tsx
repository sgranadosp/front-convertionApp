import React from "react";
import AfterLoginForm from "../components/AfterLoginForm";
import NavBar from "../components/NavBar";
import "./AfterLogin.css";

const AfterLogIn = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <AfterLoginForm />
    </>
  );
};

export default AfterLogIn;
