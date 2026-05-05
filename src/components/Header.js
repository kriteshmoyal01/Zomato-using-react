import { LOGO_URL } from "../utils/constant";

const Header = () => (
  <div className="header">
    <div className="logo_container">
      <img className="logo" src={LOGO_URL} alt="logo" />
    </div>
    <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;