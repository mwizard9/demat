import React, { useEffect, useState } from "react";
import { CustomButton } from "../../common";
import './home.css'
import { Navbars } from "../../Components";


export const Home = () => {
    const onButtonClick =()=> {
        console.log("this is onclick")
    }
    const [color, setColor] = useState('yellow');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []); 

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
      colorCode += letters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
  };
  return (
    <>
    <div className="homepage-cover">
      <div className="nav">
      <Navbars/>
      </div>
      <div className="welcome">
        <div className="welcome-text">
        <span style={{color:color }}>
        Welcome </span> <span>To</span><span> Demat Multipurpose</span>
        </div>
       
      </div>
      <div className="button">
      <CustomButton onButtonClick={onButtonClick}>Join Us</CustomButton>
      </div>
      </div>
      </>
  );
};
