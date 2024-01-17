import React from "react";
import { CustomButton } from "../../common";
import './home.css'
import { Navbars } from "../../Components/navbar";

export const Home = () => {
    const onButtonClick =()=> {
        console.log("this is onclick")
    }
  return (
    <>
    <div className="homepage-cover">
      <div className="nav">
      <Navbars/>
      </div>
      <div className="button">
      <CustomButton onButtonClick={onButtonClick}>Join Us</CustomButton>
      </div>
      </div>
      </>
  );
};
