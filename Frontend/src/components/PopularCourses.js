import React, { useState, useEffect } from "react";
// import "./css/PopularCourses.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInspiroCrud } from "./context/InspiroContext";
import { useNavigate } from "react-router-dom";

const PopularCourse = () => {
  const { Courses, getCourseList } = useInspiroCrud();
  useEffect(() => {
    getCourseList();
  }, []);

  const coursesToShow = Courses.slice(0, 3); // Get the first 3 items
  const navigate = useNavigate();
  const clickHandler = () => {
    const Title = coursesToShow[0].Title;
    const Description = coursesToShow[0].Description;
    // const url = `ListAllCourses?Title=${encodeURIComponent(Title)}`;
    navigate(`ListAllCourses/${Title}`, {
      state: { data: { Title, Description } },
    });
  };
  const titleClickHandler = (Title1, Description1, course) => {
    if (Title1 == "KPSC" || Title1 == "KEA") {
      const Title = course.SubTitle[0].Title;
      const Description = course.SubTitle[0].Description;
      // const url = `ListAllCourses?Title=${encodeURIComponent(Title)}`;
      navigate(`ListAllCourses/${Title}`, {
        state: { data: { Title, Description } },
      });
      return;
    }
    const Title = Title1;
    const Description = Description1;
    // const url = `ListAllCourses?Title=${encodeURIComponent(Title)}`;
    navigate(`ListAllCourses/${Title}`, {
      state: { data: { Title, Description } },
    });
  };
  return (
    <div className="popular-courses-container">
      <h1>
        <b>Our Popular Courses</b>
      </h1>
      <div className="course-list">
        {coursesToShow.map((course, index) => (
          <div
            key={index}
            className="course-item"
            onClick={() =>
              titleClickHandler(course.Title, course.Description, course)
            }
          >
            <h2>{course.Title}</h2>
          </div>
        ))}
      </div>
      <div className="course__btn">
        <button onClick={clickHandler}>
          View All <ArrowRightAltIcon />
        </button>
      </div>
    </div>
  );
};
export default PopularCourse;
