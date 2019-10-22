import React from 'react';
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"

const Header = () => {
  return (
    <div className={"ui menu"} style={{height : '50px'}}>
      <Link to="/" className={"header item"}>
        iStream
      </Link>
      <div className={"right menu"}>
        <Link to="/" className={"item"}>
          All Streams
        </Link>
        <GoogleAuth/>
      </div>
    </div>
  );
};

export default Header;