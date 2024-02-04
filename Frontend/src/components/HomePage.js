import Gallery from "./Gallery";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import ContactUsHomePage from "./ContactUsHomePage";
import PopularCourse from "./PopularCourses";
import ProductsHomePage from "./ProductsHomePage";
import Sidebar from "./Sidebar";
// import Popup from "./Popup";
import Testimonial from "./Testimonial";
// import { useEffect, useState } from "react";

const HomePage = () => {
  // const [isPopupOpen, setIsPopupOpen] = useState(true);
  // useEffect(() => {
  //   console.log("Popup rendering");
  // }, []);
  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };
  return (
    <div className="landing__page">
      {/* {isPopupOpen && <Popup />} */}
      <PopularCourse />
      <ProductsHomePage />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Gallery />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Testimonial />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FrequentlyAskedQuestions />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContactUsHomePage />
      <Sidebar />
    </div>
  );
};
export default HomePage;
