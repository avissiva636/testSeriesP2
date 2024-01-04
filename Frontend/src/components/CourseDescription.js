const CourseDescription = (props) => {
  const { Title, Description } = props;

  return (
    <div className="card1">
      <h2>{Title}</h2>
      {/* <div>
        <QuillTextEditor description={Description} />
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: Description }}></div>
    </div>
  );
};
export default CourseDescription;
