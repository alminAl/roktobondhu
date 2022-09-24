import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <div className="main-footer">
        <div className="logoinfo" data-aos="fade-up">
          <i className="fa-solid fa-droplet" style={{ color: "#fff" }}>
            {" "}
            রক্তবন্ধু
          </i>
          <div className="contact-details">
            <h4>যোগাযোগ করুন</h4>
            <li>
              <div className="fa fa-phone"> </div>
              <a href="0123456789"> 0123456789</a>
            </li>
          </div>
        </div>
        <div className="com text-start" data-aos="fade-up">
          <h3>রক্তবন্ধু সম্পর্কে জানতে</h3>
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
        <div className="info" data-aos="fade-up">
          <h4>সোশ্যাল মিডিয়া</h4>
          <div className="sociallogos">
            <div className="logobox">
              <i
                className="fa-brands fa-instagram"
                style={{ "marginRight": "10px" }}
              ></i>
              <i
                className="fa-brands fa-facebook"
                style={{ "marginRight": "10px" }}
              ></i>
              <i
                className="fa-brands fa-linkedin"
                style={{ "marginRight": "10px" }}
              ></i>
              <i
                className="fa-brands fa-youtube"
                style={{ "marginRight": "10px" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <footer>© রক্তবন্ধু Copyright 2022 All Rights Reserved</footer>
    </section>
  );
};

export default Footer;
