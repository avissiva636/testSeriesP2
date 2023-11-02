import React, { useState, useEffect } from "react";
import "./css/PopularCourses.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInspiroCrud } from "./context/InspiroContext";
import { Link } from "react-router-dom";

const PopularCourse = () => {
  const { Courses } = useInspiroCrud();
  const coursesToShow = Courses.slice(0, 3); // Get the first 3 items
  console.log(Courses);
  return (
    <div className="popular-courses-container">
      <h1>Our Popular Courses</h1>
      <div className="course-list">
        {coursesToShow.map((course, index) => (
          <div key={index} className="course-item">
            <h2>{course.Title}</h2>
          </div>
        ))}
      </div>
      <div>
        {/* <Link to="/ListAllCourses" state={{ Courses: Courses }}> */}
        <Link to="/ListAllCourses">
          <button>
            View All <ArrowRightAltIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default PopularCourse;
