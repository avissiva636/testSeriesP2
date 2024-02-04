import ContactUsHomePage from "./ContactUsHomePage";
import { useInspiroCrud } from "./context/InspiroContext";
import { useEffect, useState } from "react";
import CourseDescription from "./CourseDescription";
import { useLocation, useParams, useNavigate } from "react-router-dom";
const ListAllCourses = () => {
  const { Title } = useParams();
  const { Courses, getCourseList } = useInspiroCrud();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubCourse, setSelectedSubCourse] = useState(null);
  const location = useLocation();
  const history = useNavigate();
  let initialTitle = location.state?.data?.Title??Title;
  let initialDescription = location.state?.data?.Description;
  const [a, setA] = useState(initialTitle);
  const [b, setB] = useState(initialDescription);


  useEffect(() => {
    getCourseList();
    if (location.state?.data) {
      setA(location.state.data.Title);
      setB(location.state.data.Description);
    }
  }, [location.state?.data]);

  useEffect(() => {
    const letstye = async ()=>{

      if (initialDescription === undefined && initialTitle) {
        const coursesData = await getCourseList();
        
        var filteredContent=coursesData.filter((course)=>(course.Title===initialTitle));
        if(filteredContent[0]){
          setB(filteredContent[0].Description);
        }
        else{
          filteredContent=coursesData.filter((course)=>(course.SubTitle.length>0));

          const result = filteredContent.reduce((acc, item) => {          
            const match = item.SubTitle.find(subitem => subitem.Title === initialTitle);
            if (match) {
              acc = match.Description;
            }
            return acc;
          }, null);

          setB(result)
        }
      }
    }

    letstye();
  }, []);

  const handleCourseClick = (index, Title, Description) => {
    // if (window.innerWidth >= 1024) {
    //   const descriptionSection = document.getElementById("descriptionSection");
    //   if (descriptionSection) {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }
    // } else if (window.innerWidth <= 992) {
    //   const descriptionSection = document.getElementById("descriptionSection1");
    //   if (descriptionSection) {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }
    // }
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (selectedCourse === index) {
      setSelectedCourse(null);
    } else {
      setSelectedCourse(index);
      setSelectedSubCourse(null);
      setA(Title);
      setB(Description);
      window.history.pushState(null,null,`/ListAllCourses/${encodeURIComponent(Title)}`)
    }
  };

  const handleSubtitleClick = (index, Title, Description) => {
    // if (window.innerWidth >= 1024) {
    //   const descriptionSection = document.getElementById("descriptionSection");
    //   if (descriptionSection) {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }
    // } else if (window.innerWidth <= 992) {
    //   const descriptionSection = document.getElementById("descriptionSection1");
    //   if (descriptionSection) {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }
    // }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (selectedSubCourse === index) {
      setSelectedSubCourse(null);
    } else {
      setSelectedSubCourse(index);
      setA(Title);
      setB(Description);
      window.history.pushState(null,null,`/ListAllCourses/${encodeURIComponent(Title)}`)
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
              Title = course.SubTitle.map((subCourse, subIndex) => {
               
                return <div className="d-flex">
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
              });
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
