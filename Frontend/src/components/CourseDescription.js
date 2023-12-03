import QuillTextEditor from "./QuillTextEditor";

const CourseDescription = (props) => {
  const { Title, Description } = props;
  console.log(Description);

  return (
    <div className="card1">
      <h2>{Title}</h2>
      <div>
        <QuillTextEditor description={Description} />
      </div>
    </div>
  );
};
export default CourseDescription;
