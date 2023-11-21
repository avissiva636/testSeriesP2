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
      {Courses.map((course, index) => {
        if (course.SubTitle) {
          return course.SubTitle.map((subCourse, subIndex) => (
            <div key={subIndex} onClick={() => handleSubtitleClick(subIndex)}>
              <ul>{subCourse.Title}</ul>
              {selectedSubCourse === subIndex && (
                <CourseDescription
                  Title={subCourse.Title}
                  subarr={subCourse.subarr}
                />
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
                  <CourseDescription
                    Title={course.Title}
                    subarr={course.subarr}
                  />
                )}
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

// import React, { useState } from 'react';

// const TabbedContent = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   const tabData = [
//     { title: 'GS Comprehensive Programme' },
//     { title: 'General Studies Extensive'},
//     { title: 'GS 2-Year Foundation'},
//     { title: 'GS 500+ Programme'},
//     { title: 'Essay Writing Programme'},
//   ];

//   return (
//     <div className="d-flex course__content">
//       <div className="card col-xl-3 col-lg-4 course__header">
//         <div className="side-header d-flex justify-content-center">
//           <span>Courses Offered</span>
//         </div>
//         <div className="side-menu">
//           <div className="side-nav">
//             <ul>
//               {tabData.map((tab, index) => (
//                 <li key={index} className={activeTab === index ? 'active' : ''}>
//                   <a className='tab-title' href={tab.link} onClick={() => handleTabClick(index)}>
//                     {tab.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="card col-xl-9 col-lg-8">
//         <div className="tab-content">
//           {tabData.map((tab, index) => (
//             <div key={index} className={activeTab === index ? 'tab-pane active' : 'tab-pane'}>
//               <h2>{tab.title}</h2>
//               {/* Add content specific to each tab if needed */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabbedContent;
