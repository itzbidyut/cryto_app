import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="cryto-navbar">
      <p className="appName">
        <Link to="/">CrytoApp</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/cryto-currencies">Cryto Currencies</Link>
      </p>
      {/* <p>
        <Link to="/exchanges">Exchanges</Link>
      </p> */}
      <p>
        <Link to="/news">News</Link>
      </p>
    </div>
  );
}
