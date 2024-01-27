import CallIcon from "@mui/icons-material/Call";
import { Email } from "@mui/icons-material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useInspiroCrud } from "./context/InspiroContext";

const ContactUs = () => {
  const { sendEmailContent } = useInspiroCrud();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    place: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const emailHandler = (event) => {
    event.preventDefault();
    sendEmailContent(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      place: "",
      message: "",
    });
  };

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
            Sunday & Saturday: 8.00 AM - 10.00 PM
          </p>
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
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="input-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="input-group">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="input-group">
                  <label>Qualification:</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="input-group">
                  <label>Place:</label>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                  />
                </Col>
                <div className="input-group">
                  <label>Your Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </Row>
              <div
                onClick={(event) => {
                  emailHandler(event);
                }}
              >
                <button className="submit__btn" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default ContactUs;
