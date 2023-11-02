import React from "react";
import "./css/Footer.css";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              How it will be if highly motivated and dedicated coaching experts
              from Delhi come together to start a school, the sole purpose of
              which is to provide high-end focused guidance to the aspirants to
              crack one of the toughest exams? Inspiro School of Civil Services
              is the outcome of such a team.
            </p>
            <div className="social-icons">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Current Affairs</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <Link to={"/WhyInspiro"}>
                <li>
                  <a href="#">Why Inspire</a>
                </li>
              </Link>
              <Link to={"/ContactUs"}>
                <li>
                  <a>Contact Us</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className="address">
            <h3>Address</h3>
            <address>
              #508, Second Floor,
              <br />
              10th Main Road, 18th Cross Road,
              <br />
              MRCR Layout, Vijayanagar,
              <br />
              Bengaluru - 560040
            </address>
            <div className="contact-info">
              <p>Tel: 08041327777</p>
              <p>Email: inspiroschools@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-disclaimer">
        <div>
          <p>
            Privacy Policy | Terms and Conditions | Refund and Cancellation
            Policy
          </p>
        </div>
        <div>
          <p>
            Copyright 2023. Inspiro IAS Academy All Rights Reserved | Website
            Design and Development :{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
