import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import { useInspiroCrud } from "./context/InspiroContext";
// import Navigationbar from "./Navigationbar";
import { useEffect, useState } from "react";
import CourseDescription from "./CourseDescription";
import { useLocation, useNavigate } from "react-router-dom";
const ListAllCourses = () => {
  const { Courses } = useInspiroCrud();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubCourse, setSelectedSubCourse] = useState(null);
  const location = useLocation();
  let initialTitle = location.state.data.Title;
  let initialSubarr = location.state.data.subarr;
  const [a,setA] = useState(initialTitle);
  const [b,setB] = useState(initialSubarr);
  // const [a, setA] = useState('');
  // const [b, setB] = useState([]);
  // let a = location.state.data.Title;
  // let b = location.state.data.subarr;
  console.log(location.state.data.Title);

  useEffect(() => {
    if (location.state.data) {
      setA(location.state.data.Title);
      setB(location.state.data.subarr);
    }
  }, [location.state.data]);

  const handleCourseClick = (index, course) => {
    if (selectedCourse === index) {
      setSelectedCourse(null);
    } else {
      setA(course.Title);
      setB(course.subarr);
      console.log(a, b);
      setSelectedCourse(index);
      setSelectedSubCourse(null);
    }
  };
  

  const handleSubtitleClick = (index,course) => {
    if (selectedSubCourse === index) {
      setSelectedSubCourse(null);
    } else {
      setA(course.Title);
      setB(course.subarr);
      setSelectedSubCourse(index);
    }
  };
  return (
    <div>
      {/* <Navigationbar /> */}
      {Courses.map((course, index) => {
        if (course.SubTitle) {
          return course.SubTitle.map((subCourse, subIndex) => (
            <div key={subIndex} onClick={() => handleSubtitleClick(subIndex,subCourse)}>
              <ul>{subCourse.Title}</ul>
              {/* {selectedSubCourse === subIndex && (
                <CourseDescription
                  Title={subCourse.Title}
                  subarr={subCourse.subarr}
                />
              )} */}
            </div>
          ));
        } else {
          return (
            <div key={index} onClick={() => handleCourseClick(index, course)}>
              {course.Title}
              {/* {selectedCourse === index &&
                course.subarr &&
                course.subarr.length > 0 && (
                  <CourseDescription
                    Title={course.Title}
                    subarr={course.subarr}
                  />
                )} */}
            </div>
          );
        }
      })}
{console.log("aaa",a,b)}
      <CourseDescription Title={a} subarr={b} />

      <ContactUsHomePage />
      <Footer />
    </div>
  );
};
export default ListAllCourses;
