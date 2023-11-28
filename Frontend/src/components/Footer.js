import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handlePrivacyPolicy = () => {
    navigate("/PrivacyPolicy");
  };
  const handleRefundPolicy = () => {
    navigate("/RefundPolicy");
  };
  const handleTermsAndConditions = () => {
    navigate("/TermsAndConditions");
  };
  return (
    <>
      {" "}
      <div className="footer">
        {/* <Container className="test"> */}
        <Row className="footer-text col-12">
          <Col lg={6}>
            <h2 className="text-light head-text">Inspiro</h2>
            <div className="contact-info">
              <address className="d-flex text-light address__text">
                #508, Second Floor, 10th Main Road, 18th Cross Road,<br></br>{" "}
                MRCR Layout, Vijaya Nagar, Bengaluru – 560 040
              </address>
            </div>
          </Col>
          <Col lg={3} className="">
            <h3 className="text-light">Connect us</h3>
            <aside className="footer__mail">inspiroschools@gmail.com</aside>
            <aside className="text-light mb-3"> 08041327777</aside>
            <div className="social-icons">
              <a href="#">
                <FacebookRoundedIcon />
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
          </Col>
          <Col lg={3} className="mb-4 footer__right">
            <h3 className="text-light">Quick links</h3>
            <ul>
              <li>
                <a href="#">Current Affairs</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Why Inspire</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-disclaimer">
          <div>
            <p>
              <a className="link" onClick={handlePrivacyPolicy}>
                Privacy Policy
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a className="link" onClick={handleTermsAndConditions}>
                Terms and Conditions
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a className="link" onClick={handleRefundPolicy}>
                Refund and Cancellation Policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <aside className="text-light">
          Copyright 2023. Inspiro IAS Academy All Rights Reserved | Website
          Design and Development :{""}
        </aside>
      </div>
    </>
  );
};

export default Footer;
