import "../css/styles.css"
const CourseDescription = (props) => {
  const { Title, Description } = props;
  const isLoading = !Description;

  return (
    <div className="card1">
      <center><h2>{Title}</h2></center>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: Description }}></div>
      )}
      <style>
        {`.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #FF0000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

#content {
  display: none;
}`}
      </style>
    </div>
  );
};
export default CourseDescription;