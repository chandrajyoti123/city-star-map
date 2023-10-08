import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ThreeLogin.css";

export default function ThreeLogin() {

  function savetolocalstorage(obj) {
    const setofinfo = JSON.stringify(obj);
    localStorage.setItem("userinfo", setofinfo);
  }

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("emailpas"));
    const { email, password } = loginData;

    const basicInfoData = JSON.parse( localStorage.getItem("nameinfo"));
    const { firstname, lastname, gender, city } = basicInfoData;
    
    const object = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      gender: gender,
      city: city,
     
    };

    savetolocalstorage(object);
  }, []);
 
  return (
    <div>
      <Navbar />
      <div className="logincontainer">
        <div className="loginform loginthree">
          <div className="loginheading">Thank You</div>
          <div className="loginsubheading">You have Login successfully</div>
        </div>
      </div>
    </div>
  );
}
