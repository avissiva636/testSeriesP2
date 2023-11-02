import React, { useState, useEffect } from "react";
import "./css/PopularCourses.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInspiroCrud } from "./context/InspiroContext";
import { useNavigate } from "react-router-dom";

const PopularCourse = () => {
  const { Courses } = useInspiroCrud();
  const coursesToShow = Courses.slice(0, 3); // Get the first 3 items
  const navigate = useNavigate();
  // console.log(coursesToShow);
  // console.log(coursesToShow[0].Title)
  const clickHandler = () => {
    const Title = coursesToShow[0].Title;
    const subarr = coursesToShow[0].subarr;
    navigate("/ListAllCourses", {
      // state: { subarr: Courses[index].subarr, Title: Courses[index].Title },
      // state: { Title: { Title }, subarr: { subarr } },
      state: { data: { Title, subarr } },
    });
  };
  const titleClickHandler = (Title, subarr) => {
    console.log(Title, subarr);
    navigate("/ListAllCourses", {
      state: { data: { Title, subarr } },
    });
  };
  return (
    <div className="popular-courses-container">
      <h1>Our Popular Courses</h1>
      <div className="course-list">
        {coursesToShow.map((course, index) => (
          <div
            key={index}
            className="course-item"
            onClick={()=>titleClickHandler(course.Title, course.subarr)}
          >
            <h2>{course.Title}</h2>
          </div>
        ))}
      </div>
      <div>
        {/* <Link to="/ListAllCourses" state={{ Courses: Courses }}> */}
        {/* <Link to="/ListAllCourses"> */}
        <button onClick={clickHandler}>
          View All <ArrowRightAltIcon />
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
export default PopularCourse;
