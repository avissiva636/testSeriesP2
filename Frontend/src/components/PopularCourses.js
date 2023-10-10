import React, { useState, useEffect } from 'react';
import './css/PopularCourses.css';

const PopularCourse = () => {
  let list = ['IAS','KAS','Prelims'];
  const [courses, setCourses] = useState(list);

  // useEffect(() => {
  //   // Fetch popular courses from your Node.js backend and update the state
  //   fetch('/api/popular-courses')      // Replace this with your actual API endpoint
  //     .then((response) => response.json())
  //     .then((data) => setCourses(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="popular-courses-container">
      <h1>Our Popular Courses</h1>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h2>{course}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourse;