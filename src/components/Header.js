import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

// if no dependency array → useEffect is called on every render
//if dependency array is empty = [] → useEffect is called on initial render(just once)
  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;