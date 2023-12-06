import ContactUsHomePage from "./ContactUsHomePage";
import { useInspiroCrud } from "./context/InspiroContext";
import { useEffect, useState } from "react";
import CourseDescription from "./CourseDescription";
import { useLocation } from "react-router-dom";
const ListAllCourses = () => {
  const { Courses, getCourseList } = useInspiroCrud();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubCourse, setSelectedSubCourse] = useState(null);
  const location = useLocation();
  let initialTitle = location.state.data.Title;
  let initialDescription = location.state.data.Description;
  const [a, setA] = useState(initialTitle);
  const [b, setB] = useState(initialDescription);

  useEffect(() => {
    getCourseList();
    if (location.state.data) {
      setA(location.state.data.Title);
      setB(location.state.data.Description);
    }
  }, [location.state.data]);

  const handleCourseClick = (index, Title, Description) => {
    if (window.innerWidth >= 1024) {
      const descriptionSection = document.getElementById("descriptionSection");
      if (descriptionSection) {
        descriptionSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // <SmoothScrolling targetElement={descriptionSection} duration={1000} />;
    } else if (window.innerWidth <= 992) {
      const descriptionSection = document.getElementById("descriptionSection1");
      if (descriptionSection) {
        descriptionSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // <SmoothScrolling targetElement={descriptionSection} duration={1000} />;
    }

    if (selectedCourse === index) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(index);
      setSelectedSubCourse(null);
      setA(Title);
      setB(Description);
    }
  };

  const handleSubtitleClick = (index, Title, Description) => {
    if (window.innerWidth >= 1024) {
      const descriptionSection = document.getElementById("descriptionSection");
      if (descriptionSection) {
        descriptionSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // <SmoothScrolling targetElement={descriptionSection} duration={1000} />;
    } else if (window.innerWidth <= 992) {
      const descriptionSection = document.getElementById("descriptionSection1");
      if (descriptionSection) {
        descriptionSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // <SmoothScrolling targetElement={descriptionSection} duration={1000} />;
    }
    if (selectedSubCourse === index) {
      setSelectedSubCourse(null);
    } else {
      setSelectedSubCourse(index);
      setA(Title);
      setB(Description);
    }
  };

  return (
    <>
      <div id="descriptionSection"> </div>
      <div className="courses__full-content mb-5">
        <div className="courses__page col-xl-3 col-lg-3 col-md-12">
          <div className="courses__header">Courses offered</div>

          {Courses.map((course, index) => {
            let Title;

            if (course.SubTitle != "") {
              Title = course.SubTitle.map((subCourse, subIndex) => (
                <div className="d-flex">
                  <div
                    className="text__title"
                    key={subIndex}
                    onClick={() =>
                      handleSubtitleClick(
                        subIndex,
                        subCourse.Title,
                        subCourse.Description
                      )
                    }
                  >
                    <div className="text__left">{subCourse.Title}</div>
                  </div>
                </div>
              ));
            } else {
              Title = (
                <div className="d-flex">
                  <div
                    className="text__title"
                    onClick={() =>
                      handleCourseClick(index, course.Title, course.Description)
                    }
                  >
                    <div className="text__left">{course.Title}</div>
                  </div>
                </div>
              );
            }
            return <div className="test5">{Title}</div>;
          })}
        </div>
        <div
          className="col-xl-9 col-lg-9 col-md-12 text__description"
          id="descriptionSection1"
        >
          <CourseDescription Title={a} Description={b} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <ContactUsHomePage />
    </>
  );
};
export default ListAllCourses;
