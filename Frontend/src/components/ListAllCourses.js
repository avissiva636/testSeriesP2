import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import { useInspiroCrud } from "./context/InspiroContext";
import Navigationbar from "./Navigationbar";
import { useState } from "react";
import CourseDescription from "./CourseDescription";
import { useNavigate } from "react-router-dom";
const ListAllCourses = () => {
  const { Courses } = useInspiroCrud();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubCourse, setSelectedSubCourse] = useState(null);
  const navigate = useNavigate();

  const handleCourseClick = (index, subarr) => {
    if (selectedCourse === index) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(index);
      setSelectedSubCourse(null);
    }
  };

  const handleSubtitleClick = (index) => {
    if (selectedSubCourse === index) {
      setSelectedSubCourse(null);
    } else {
      setSelectedSubCourse(index);
    }
  };
  return (
    <div>
      <Navigationbar />
      {Courses.map((course, index) => {
        if (course.SubTitle) {
          return course.SubTitle.map((subCourse, subIndex) => (
            <div
              key={subIndex}
              onClick={() => handleSubtitleClick(subIndex)}
            >
              <ul>{subCourse.Title}</ul>
              {selectedSubCourse === subIndex && (
                <CourseDescription Title={subCourse.Title} subarr={subCourse.subarr} />
                
              )}
            </div>
          ));
        } else {
          return (
            <div
              key={index}
              onClick={() => handleCourseClick(index, course.subarr)}
            >
              {course.Title}
              {selectedCourse === index &&
                course.subarr &&
                course.subarr.length > 0 && (
                  <CourseDescription Title={course.Title} subarr={course.subarr} />
                )}
                {/* {console.log(course.subarr)} */}
            </div>
          );
        }
      })}
      <ContactUsHomePage />
      <Footer />
    </div>
  );
};
export default ListAllCourses;
