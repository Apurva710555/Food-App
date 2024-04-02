import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [logTrigger, SetlogTrigger] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              logTrigger === "Login"
                ? SetlogTrigger("Logout")
                : SetlogTrigger("Login");
            }}
          >
            {logTrigger}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
