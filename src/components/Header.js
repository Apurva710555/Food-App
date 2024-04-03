import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressCard} />{" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} /> <Link>Cart</Link>
          </li>
          <div className="login-icon">
            <FontAwesomeIcon icon={faRightToBracket} />{" "}
          </div>
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
