

const CourseDescription = (props) => {
  console.log(props.subarr[0].Desc);
  return (
    <div>
      <div>
        <h2>{props.Title}</h2>
        <p>{props.subarr[0]?.Syllabus}</p>
      </div>
    </div>
  );
};
export default CourseDescription;
