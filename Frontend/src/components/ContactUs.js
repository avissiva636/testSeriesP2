import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import CallIcon from "@mui/icons-material/Call";
import { Email } from "@mui/icons-material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "./css/ContactUs.css";
import { useEffect } from "react";
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
    return (
      <div>
        <Navigationbar />
        <div className="heading-container">
            <img src="/Users/jagan/Documents/Projects/inspiroias/Frontend/src/components/contact-banner.jpg" alt="contact-banner"/>
        <h1 >Contact Us</h1>  
          <p>Home &gt;&gt; Contact Us</p>
        </div>
        <div className="contact-container">
          <div className="left-section">
            <h4>Address</h4>
            <p className="left-item">
               #508, Second Floor,
            </p>
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
            <p className="left-item">Sunday & Saturday: 8.00 AM - 10.00 PM</p>
          </div>
          <div className="right-section">
            <div className="quick-contact">
              <h2>Quick Contact</h2>
              <form>
                <div className="input-group">
                  <label>Name:</label>
                  <input type="text" name="name" required />
                </div>
                <div className="input-group">
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div className="input-group">
                  <label>Phone Number:</label>
                  <input type="tel" name="phone" required />
                </div>
                <div className="input-group">
                  <label>Qualification:</label>
                  <input type="text" name="qualification" />
                </div>
                <div className="input-group">
                  <label>Place:</label>
                  <input type="text" name="place" />
                </div>
                <div className="input-group">
                  <label>Your Message:</label>
                  <textarea name="message" required></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
export default ContactUs;
