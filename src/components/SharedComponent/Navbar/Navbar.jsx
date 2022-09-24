import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar ">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="check-btn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        {" "}
        <i
          className="fa-solid fa-droplet"
          style={{ color: "#ED0404" }}
        ></i>{" "}
        রক্তবন্ধু
      </label>
      <ul>
        <li>
          <Link className="active" to="/">
            হোম
          </Link>
        </li>
        <li>
          <Link to="/platelet">প্লাটিলেট</Link>
        </li>
        <li>
          <Link to="/thalassemia">থ্যালাসেমিয়া</Link>
        </li>
        <li>
          <Link to="/volunteers">ভলান্টিয়ার্স</Link>
        </li>
        <li>
          <Link to="/partner">সহযোগী সংগঠন</Link>
        </li>
        <li>
          <Link to="/blog">ব্লগ</Link>
        </li>
        <li>
          <Link to="/login">লগইন</Link>
        </li>
        <li>
          <Link to="/signin">রেজিস্ট্রেশন</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
