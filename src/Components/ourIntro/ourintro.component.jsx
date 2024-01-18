import React from "react";
import backImage from "../../Assets/images/back.jpg";
import './ourintro.css'

export const OurIntro = () => {
  return (
    <>
      <h2 className="pagehead">OurIntro</h2>
      <div className=" d-flex justify-content-between align-items-center mx-5">
        <div className="introImage">
          <img src={backImage} alt="backimage" />
        </div>
        <div className="intro d-flex align-items-center p-4">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            architecto esse, minima cum atque nisi ab mollitia odit consectetur
            adipisci dolore, commodi sunt enim, expedita porro error distinctio
            inventore possimus labore unde aliquid pariatur dicta. Veritatis
            saepe omnis quae beatae aliquam! Enim corrupti necessitatibus
            ratione iste dolores? Consequatur, libero. Voluptas.
          </span>
        </div>
      </div>
    </>
  );
};
