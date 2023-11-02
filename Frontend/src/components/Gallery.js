import { useNavigate } from "react-router-dom";
import "./css/Gallery.css";
const Gallery = () => {
  const navigate = useNavigate();
  const photoHandler = () => {
    navigate("/PhotoPage")
  }
  const videoHandler = () => {
    navigate("/VideoPage")
  }
  return (
    <div>
      <div className="heading">
        <h1>Photos & Video Gallery</h1>
        <div onClick={photoHandler}><button>Photos</button></div>
        <div onClick={videoHandler}><button>Videos</button></div>
      </div>
    </div>
  );
};
export default Gallery;
