import React from "react";
import "./footer.css";
import facebook from "../../Assets/images/facebook.png";
import insta from "../../Assets/images/instagram.png";
import gmail from "../../Assets/images/gmail.png";
import linkedin from "../../Assets/images/linkedin.png";
import phone from "../../Assets/images/phone-call.png";
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export const Footer = () => {
  const position = [27.7172, 85.3240]
  return (
    <>
      <div className="footerComponent d-flex justify-content-between p-2">
        <div className="companyLogo d-flex flex-column justify-content-center">
          <h2>Demat Multipurpose Pvt. Ltd.</h2>
          <p>Kathmandu-32,Koteswor,Nepal</p>
        </div>
        <div className="ContactInfo d-flex flex-column justify-content-between">
          <h3>Keep Connected</h3>
          <div className="d-flex justify-content-between">
          <img src={facebook} alt="fb" />
          <span>https:/facebook.demat.com.np</span>
          </div>
          <div className="d-flex justify-content-between">
          <img src={insta} alt="fb" />
          <span>https:/instagram/demat09.insta</span>
          </div>
          <div className="d-flex justify-content-between">
          <img src={phone} alt="fb" />
          <span>+977-01-9292929/98025255151</span>
          </div>
          <div className="d-flex justify-content-between">
          <img src={gmail} alt="fb" />
          <span>demat.multipurpose.gmail.com</span>
          </div>
          <div className="d-flex justify-content-between">
          <img src={linkedin} alt="fb" />
          <span>https:/linkedin/demat9</span>
          </div>
        </div>
        <div className="location p-3">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width:'25vw',height:'25vh'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
      </div>
      <div className="copyrightContainer">
        <p>
          © Copyright Agency and contributors 2023. Dmat Multipropose ABN 53 001
          228 799
        </p>
      </div>
    </>
  );
};
