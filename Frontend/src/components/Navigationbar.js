import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./css/Navigationbar.css";
import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInspiroCrud } from "./context/InspiroContext";
import DemoClass from "./DemoClass";

const Navigationbar = () => {
  const Gallery = { key1: "Photo", key2: "Video" };

  const [showDropdown, setShowDropdown] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [avatarDropdown, setavatarDropdown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const { Courses } = useInspiroCrud();

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleAvatar = () => {
    setavatarDropdown(!avatarDropdown);
  };

  const toggleDropdownGallery = () => {
    setShowGallery(!showGallery);
  };
  const toggleCoursesDropDoem = () => {
    setShowCourses(!showCourses);
  };

  const photoHandler = () => {
    toggleDropdownGallery();
    toggleDropdown();
    navigate("/PhotoPage");
  };
  const videoHandler = () => {
    toggleDropdownGallery();
    toggleDropdown();
    navigate("/VideoPage");
  };

  const handleCourseClick = (index, Title, subarr) => {
    // toggleCoursesDropDoem();
    if (selectedCourse === index) {
      setSelectedCourse(null);
      setSelectedSubtitle(null);
    } else {
      setSelectedCourse(index);
      if (Title !== "KPSC Prelims") {
        navigate("/ListAllCourses", {
          state: { data: { Title, subarr } },
        });
      }
    }
  };

  const handleSubtitleClick = (subarr, Title) => {
    toggleCoursesDropDoem();
    setSelectedSubtitle(subarr);
    navigate("/ListAllCourses", {
      state: { data: { Title, subarr } },
    });
  };

  // const HandleCurrentAffair = () => {
  //   navigate("#");
  // };

  const handleResultPage = () => {
    navigate("/ResultPage");
  };

  const handleDemoClass = () => {
    navigate("/DemoClass");
  };

  // const courseItems = useMemo(() => {
  //   return Courses.map((course, index) => (
  //     <div key={index}>
  //       <div
  //         onClick={() => handleCourseClick(index, course.Title)}
  //         className="course-title"
  //       >
  //         {course.Title}
  //       </div>
  //       {selectedCourse === index &&
  //         Array.isArray(course.SubTitle) &&
  //         course.SubTitle.map((subTitle, subIndex) => (
  //           <div
  //             key={subIndex}
  //             onClick={() => handleSubtitleClick(subTitle.subarr)}
  //             className="sub-Title"
  //           >
  //             {subTitle.Title}
  //           </div>
  //         ))}
  //     </div>
  //   ));
  // }, [Courses, selectedCourse]);

  // useEffect(() => {
  //   if (selectedCourse !== null) {
  //   }
  // }, [selectedCourse]);
  return (
    <div className="navigation__container d-flex justify-content-between">
      <div>
        <b>Inspiro</b>
      </div>
      <div className="nav__item-link">
        <Link to={"/"}>
          <HomeOutlinedIcon className="home-icon"></HomeOutlinedIcon>
        </Link>
        <div className="about-us">
          <div className="about-us-arrow">
            About Us <KeyboardArrowDownOutlinedIcon />
          </div>
          {
            <div className="dropdown-content">
              <div onClick={toggleDropdown}>
                <Link to={"/WhyInspiro"}>Why Inspiro</Link>
              </div>

              <div onClick={handleResultPage}>Our Results</div>
              <div onClick={handleDemoClass}>Demo Classes</div>
              {/* <div onClick={toggleDropdownGallery}> */}
              <div
                className="navigation__gallery"
                onClick={toggleDropdownGallery}
              >
                Gallery <KeyboardArrowDownOutlinedIcon />
              </div>
            </div>
          }
        </div>

        {showGallery && (
          <div className="navigation__gallery-dropdown">
            <div onClick={photoHandler}>Photo</div>
            <div onClick={videoHandler}>Video</div>
          </div>
        )}
        <div className="courses">
          Courses <KeyboardArrowDownOutlinedIcon />
          {
            <div className="courses-dropdown-content">
              {Courses.map((course, index) => (
                <div key={index}>
                  <div
                    onClick={() =>
                      handleCourseClick(index, course.Title, course.subarr)
                    }
                    className="course-title"
                  >
                    {course.Title}
                  </div>
                  {selectedCourse === index &&
                    Array.isArray(course.SubTitle) &&
                    course.SubTitle.map((subTitle, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() =>
                          handleSubtitleClick(subTitle.subarr, subTitle.Title)
                        }
                        className="sub-Title"
                      >
                        {subTitle.Title}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          }
        </div>

        <div>
          <a href="https://www.instamojo.com/inspiroiaskas">Current Affairs</a>
        </div>
        <div>Notifications</div>

        <a
          className="navigation__test"
          href="http://exam.inspiroias.in"
          target="_blank"
        >
          Test Series
        </a>
      </div>
      <div className="navigation__avatar">
        <PersonSharpIcon />
        {
          <div className="dropdown-content">
            {" "}
            <div>Register</div>
            <div>Login</div>
          </div>
        }
      </div>
    </div>
  );
};
export default Navigationbar;
