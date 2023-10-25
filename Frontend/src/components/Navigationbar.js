import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./css/Navigationbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleCoursesDropDoem = () => {
    setShowCourses(!showCourses);
  };
  return (
    <div className="container">
      <div>
        <b>Inspiro</b>
      </div>
      <Link to={"/"}>
        <HomeOutlinedIcon className="home-icon"></HomeOutlinedIcon>
      </Link>
      <div className="about-us" onClick={toggleDropdown}>
        <div className="about-us-arrow">
          About Us <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          <Link to={"/WhyInspiro"}>
          <div>Why Inspiro</div>
          </Link>
          <div>Profile</div>
          <div>Demo Classes</div>
          <div>Gallery</div>
        </div>
      )}
      <div className="courses" onClick={toggleCoursesDropDoem}>
        Courses <KeyboardArrowDownOutlinedIcon />
      </div>
      {showCourses && <div className="courses-dropdown-content"></div>}
      <div>Current Affairs</div>
      <div>Admission</div>
      <div>Notifications</div>
      <Link to={"/ContactUs"}>
        <div>Conatct Us</div>
      </Link>
      <div>
        <button>
          <PersonSharpIcon />
          Register/Login
        </button>
      </div>
    </div>
  );
};
export default Navigationbar;
