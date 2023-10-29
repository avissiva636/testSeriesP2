import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./css/Navigationbar.css";
import CourseDescription from "./CourseDescription";
import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInspiroCrud } from "./context/InspiroContext";

const Navigationbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);
  const { Courses } = useInspiroCrud();

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleCoursesDropDoem = () => {
    setShowCourses(!showCourses);
  };

  const handleCourseClick = (index, Title) => {
    if (selectedCourse === index) {
      setSelectedCourse(null);
      setSelectedSubtitle(null);
    } else {
      setSelectedCourse(index);
      if (Title !== "KPSC Prelims") {
        navigate("/CourseDescription", {
          state: { subarr: Courses[index].subarr },
        });
      }
    }
  };

  const handleSubtitleClick = (subarr) => {
    setSelectedSubtitle(subarr);
    navigate("/CourseDescription", { state: { subarr } });
  };

  const courseItems = useMemo(() => {
    return Courses.map((course, index) => (
      <div key={index}>
        <div
          onClick={() => handleCourseClick(index, course.Title)}
          className="course-title"
        >
          {course.Title}
        </div>
        {selectedCourse === index &&
          course.subarr &&
          course.subarr.length > 0 && (
            <CourseDescription subarr={course.subarr} />
          )}
        {selectedCourse === index &&
          Array.isArray(course.SubTitle) &&
          course.SubTitle.map((subTitle, subIndex) => (
            <div
              key={subIndex}
              onClick={() => handleSubtitleClick(subTitle.subarr)}
              className="sub-Title"
            >
              {subTitle.Title}
            </div>
          ))}
      </div>
    ));
  }, [Courses, selectedCourse]);

  useEffect(() => {
    if (selectedCourse !== null) {
      // Handle side effects or further logic here
    }
  }, [selectedCourse]);
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
      {showCourses && (
        <div className="courses-dropdown-content">
          {Courses.map((course, index) => (
            <div key={index}>
              <div
                onClick={() => handleCourseClick(index, course.Title)}
                className="course-title"
              >
                {course.Title}
              </div>

              {selectedCourse === index &&
                course.subarr &&
                course.subarr.length > 0 && (
                  <CourseDescription subarr={course.subarr} />
                )}
              {selectedCourse === index &&
                Array.isArray(course.SubTitle) &&
                course.SubTitle.map((subTitle, subIndex) => (
                  <div
                    key={subIndex}
                    onClick={() => handleSubtitleClick(subTitle.subarr)}
                    className="sub-Title"
                  >
                    {subTitle.Title}
                    {/* <CourseDescription subarr={selectedSubtitle} /> */}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
      <div>Current Affairs</div>
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
