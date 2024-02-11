import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useNavigate } from "react-router-dom";
import { useInspiroCrud } from "./context/InspiroContext";

const Footer = () => {
  const { Courses, getCourseList } = useInspiroCrud();
  useEffect(() => {
    getCourseList();
  }, []);
  const coursesToShow = Courses.slice(0, 3);
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
  const handleWhyInspiro = () => {
    navigate("/WhyInspiro");
  };
  const handleContactUs = () => {
    navigate("/ContactUs");
  };
  const handleCourses = () => {
    const Title = coursesToShow[0].Title;
    const Description = coursesToShow[0].Description;
    if (coursesToShow[0].SubTitle.length > 0) {
      console.log("Hi")
      navigate(`ListAllCourses/${encodeURIComponent(coursesToShow[0].SubTitle[0].Title)}`, {
        state: { data: { Title:coursesToShow[0]?.SubTitle[0]?.Title, Description: coursesToShow[0]?.SubTitle[0]?.Description} },
      });

    } else if (coursesToShow[0].SubTitle.length === 0) {
      console.log("Hi1")
      navigate(`ListAllCourses/${encodeURIComponent(Title)}`, {
      state: { data: { Title, Description } },
    });
    } ;
  };
  return (
    <>
      {" "}
      <div className="footer">
        {/* <Container className="test"> */}
        <Row className="footer-text col-12">
          
          <Col lg={6}>
            <h2 className="text-light head-text">Inspiro</h2>
            <h4 style={{color:"white", fontStyle:"italic"}}>Dedicated to one Dream. Yours.</h4>
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
              <a
                href="https://www.facebook.com/groups/inspiroschools/"
                target="_blank"
              >
                <FacebookRoundedIcon />
              </a>
              <a href="https://www.instagram.com/inspiroias/" target="_blank">
                <InstagramIcon />
              </a>
              <a
                href="https://in.linkedin.com/in/inspiro-ias-kas-962549230"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://www.youtube.com/@InspiroIASKAS" target="_blank">
                <YouTubeIcon />
              </a>
            </div>
          </Col>
          <Col lg={3} className="mb-4 footer__right">
            <h3 className="text-light">Quick links</h3>
            <ul>
              <li>
                <div>
                  <a
                    href="https://www.instamojo.com/inspiroiaskas"
                    target="_blank"
                  >
                    Current Affairs
                  </a>
                </div>
              </li>
              <li>
                <div onClick={handleCourses}>
                  <a href="">Courses</a>
                </div>
              </li>
              <li>
                <div onClick={handleWhyInspiro}>
                  <a href="">Why Inspire</a>
                </div>
              </li>
              <li>
                <div onClick={handleContactUs}>
                  <a href="">Contact Us</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-disclaimer">
          <div>
            <p>
              <a
                className="link"
                onClick={handlePrivacyPolicy}
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                className="link"
                onClick={handleTermsAndConditions}
                style={{ cursor: "pointer" }}
              >
                Terms and Conditions
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                className="link"
                onClick={handleRefundPolicy}
                style={{ cursor: "pointer" }}
              >
                Refund and Cancellation Policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <aside className="text-light">
          Copyright 2023. Inspiro IAS Academy All Rights Reserved | Website
          Design and Development : <a href="http://www.agilewebwizards.com" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color='red'} onMouseOut={(e) => e.target.style.color='white'}>Agilewebwizards</a>

        </aside>
      </div>
    </>
  );
};

export default Footer;
