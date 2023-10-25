import Features from "./Features";
import Footer from "./Footer";
import { useEffect } from "react";
import Navigationbar from "./Navigationbar";
import ContactUs from "./ContactUs";
import ContactUsHomePage from "./ContactUsHomePage";
const WhyInspiro = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <Navigationbar />
      <Features />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContactUsHomePage />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default WhyInspiro;
