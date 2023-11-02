import { useLocation } from "react-router-dom";

const CourseDescription = (props) => {
  console.log(props.subarr[0].Desc);
  return (
    <div>
      <div>
        <h1>{props.Title}</h1>
        <p>{props.subarr[0].Syllabus}</p>
      </div>
    </div>
  );
};
export default CourseDescription;
