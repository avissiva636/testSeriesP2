import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import CallIcon from "@mui/icons-material/Call";
import { Email } from "@mui/icons-material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div>
      {/* <Navigationbar /> */}
      <div className="heading-container">
        <h1>Contact Us</h1>
        <p>Home &gt;&gt; Contact Us</p>
      </div>
      <div className="contact-container p-4">
          <Col lg={3} md={5} sm={12} className="left-section mb-5 p-3">
            <h4>Address</h4>
            <p className="left-item">#508, Second Floor,</p>
            <p className="left-item">10th Main Road, 18th Cross Road</p>
            <p className="left-item">MRCR Layout, Vijayanagar</p>
            <p className="left-item">Bengaluru - 560040</p>
            <p className="left-item">
              <Email /> inspiroschools@gmail.com
            </p>
            <p className="left-item">
              <CallIcon /> 08041327777
            </p>
            <p className="left-item">
              <AccessTimeFilledIcon />
              Monday - Friday: 09.00 AM - 06.00 PM
            </p>
            <p className="left-item">
            <AccessTimeFilledIcon />
            Sunday & Saturday: 8.00 AM - 10.00 PM</p>
            <div className="social-icons text-center">
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
          </Col>
          <Col lg={9} md={7} sm={12} className="right-section mb-5">
            <div className="quick-contact">
              <h2>Quick Contact</h2>
              <Form>
                <Row>
                  <Col md={6} className="input-group">
                    <label>Name:</label>
                    <input type="text" name="name" required />
                  </Col>
                  <Col md={6} className="input-group">
                    <label>Email:</label>
                    <input type="email" name="email" required />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="input-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="phone" required />
                  </Col>
                  <Col md={6} className="input-group">
                    <label>Qualification:</label>
                    <input type="text" name="qualification" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="input-group">
                    <label>Place:</label>
                    <input type="text" name="place" />
                  </Col>
                  <div className="input-group">
                  <label>Your Message:</label>
                  <textarea name="message" required></textarea>
                </div>
                </Row>
                <div><button className="submit__btn" type="submit">Submit</button></div>
              </Form>
            </div>
          </Col>
      </div>
    </div>
  );
};

export default ContactUs;
