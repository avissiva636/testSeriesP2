import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInspiroCrud } from "./context/InspiroContext";
import logo from "./css/images/logo7.jpg";

const Navigationbar = () => {
  const Gallery = { key1: "Photo", key2: "Video" };
  const [showheaderDropdown, setheaderShowDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [avatarDropdown, setavatarDropdown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { Courses, getNotificationList, notification } = useInspiroCrud();
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    getNotificationList();
  }, []);
  const toggleMenu = () => {
    setheaderShowDropdown(!showheaderDropdown);
  };

  const toggleDropdownGallery = () => {
    setShowGallery(!showGallery);
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };

  const toggleAvatar = () => {
    setavatarDropdown(!avatarDropdown);
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };

  const toggleCoursesDropDoem = () => {
    setShowCourses(!showCourses);
  };

  const photoHandler = () => {
    toggleDropdownGallery();
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
    toggleDropdown();
    navigate("PhotoPage");
  };
  const videoHandler = () => {
    toggleDropdownGallery();
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
    toggleDropdown();
    navigate("VideoPage");
  };

  const handleCourseClick = (index, Title, Description) => {
    // if (window.innerWidth <= 768) {
    //   toggleCoursesDropDoem();
    // }
    toggleCoursesDropDoem();
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
    setSelectedCourse(selectedCourse === index ? null : index);

    if (
      Title !== "KPSC" &&
      Title !== "KEA"
      // window.innerWidth > 768
    ) {
      navigate("ListAllCourses", {
        state: { data: { Title, Description } },
      });
    }
  };

  const handleSubtitleClick = (Description, Title) => {
    toggleCoursesDropDoem();
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
    // setSelectedSubtitle(subarr);
    navigate("ListAllCourses", {
      state: { data: { Title, Description } },
    });
  };
  const handleWhyInspiroPage = () => {
    navigate("WhyInspiro");
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };

  const handleResultPage = () => {
    navigate("ResultPage");
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };

  const handleDemoClass = () => {
    navigate("DemoClass");
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };

  const closeButtonClick = () => {
    setheaderShowDropdown(false);
    setShowDropdown(false);
    setShowCourses(false);
  };
  const handleNotification = () => {
    navigate("NotificationMain", {
      state: { data: { notification } },
    });
  };

  return (
    <>
      {(showheaderDropdown || showDropdown || showCourses) && (
        <div
          className="backdrop"
          onClick={() => {
            setheaderShowDropdown(false);
            setShowDropdown(false);
            setShowCourses(false);
          }}
        />
      )}
      <div className="navigation__container d-flex justify-content-between">
        <div>
        <img src={logo} alt="Card Image" style={{ marginLeft: "0px", marginRight: '5px', borderRadius: "10px", height: "60px", width: "200px" }}/>
          
        </div>

        <div className={`nav__item-link ${showheaderDropdown ? "show" : ""}`}>
          {showheaderDropdown && (
            <div className="toggle__content">
              <div>
              <img src="./css/images/logo.jpg" alt="Logo" style={{ marginRight: '5px' }} />
                <b>Inspiro</b>
              </div>{" "}
              <button className="close-button" onClick={closeButtonClick}>
                <span>&times;</span>
              </button>
            </div>
          )}
          <Link onClick={closeButtonClick} to={"/"}>
            <HomeOutlinedIcon className="home-icon"></HomeOutlinedIcon>
          </Link>
          <div className="about-us header__hover">
            <div className="about-us-arrow notify__header">
              About Us <KeyboardArrowDownOutlinedIcon />
            </div>
            {
              <div className="dropdown-content">
                {/* <div onClick={toggleDropdown}>
                  <Link to={"/WhyInspiro"}>Why Inspiro</Link>
                </div> */}
                <div onClick={handleWhyInspiroPage}>Why Inspiro</div>
                <div onClick={handleResultPage}>Our Results</div>
                <div onClick={handleDemoClass}>Demo Classes</div>
                <div
                  className="navigation__gallery"
                  onClick={toggleDropdownGallery}
                  id="galleryComponent"
                >
                  Gallery <KeyboardArrowDownOutlinedIcon />
                </div>
                {showGallery && (
                  <aside className="">
                    <div onClick={photoHandler}>
                      <div className="sub-Title mt-2">Photo</div>
                    </div>
                    <div className="sub-Title mt-2" onClick={videoHandler}>
                      Video
                    </div>
                  </aside>
                )}
              </div>
            }
          </div>

          <div className="courses header__hover notify__header">
            Courses <KeyboardArrowDownOutlinedIcon />
            {
              <div className="courses-dropdown-content">
                {Courses.map((course, index) => (
                  <div key={index}>
                    {course.Title === "KPSC Prelims" ||
                    course.Title === "KEA" ? (
                      <div
                        onClick={() =>
                          handleCourseClick(
                            index,
                            course.Title,
                            course.Description
                          )
                        }
                        className="course-title"
                      >
                        {course.Title}
                        <KeyboardArrowDownOutlinedIcon />
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          handleCourseClick(
                            index,
                            course.Title,
                            course.Description
                          )
                        }
                        className="course-title"
                      >
                        {course.Title}
                      </div>
                    )}

                    {/* <div className="test123"> */}
                    <div>
                      {selectedCourse === index &&
                        Array.isArray(course.SubTitle) &&
                        course.SubTitle.map((subTitle, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() =>
                              handleSubtitleClick(
                                subTitle.Description,
                                subTitle.Title
                              )
                            }
                            className="sub-Title"
                          >
                            <div className="mt-2">{subTitle.Title}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>

          <div className="header__hover">
            <a
              className="current__affairs"
              href="https://www.kasmoksha.com/readpaper"
              target="_blank"
            >
              Current Affairs
            </a>
          </div>
          <div
            className="header__hover notify__header"
            onClick={handleNotification}
          >
            Notifications
          </div>

          <a
            className="navigation__test header__hover"
            href="http://exam.inspiroias.in"
            target="_blank"
          >
            Test Series
          </a>
        </div>
        <div className="navigation__toggle">
          <button className="toggle-button" onClick={toggleMenu}>
            <span>&#9776;</span>
          </button>
          <div className="navigation__avatar" onClick={toggleAvatar}>
            <PersonSharpIcon style={{ cursor: "pointer" }} />
            {/* {avatarDropdown && (
              <div className="dropdown-content">
                <div>Register</div>
                <div>Admin</div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
