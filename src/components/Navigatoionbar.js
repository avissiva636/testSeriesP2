import HomeIcon from "@mui/icons-material/Home";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./css/Navigationbar.css";
import { useState } from "react";

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
      <HomeIcon></HomeIcon>
      <div className="about-us" onClick={toggleDropdown}>
        <div className="about-us-arrow">
          About Us <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          <div>Why Inspiro</div>
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
      <div>Webinars</div>
      <div>Conatct Us</div>
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
