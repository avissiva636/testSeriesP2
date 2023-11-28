import { useNavigate } from "react-router-dom";
import img2 from "./css/images/img2.jpg";
const Gallery = () => {
  const navigate = useNavigate();
  const photoHandler = () => {
    navigate("PhotoPage")
  }
  const videoHandler = () => {
    navigate("VideoPage")
  }
  return (
    <div>
      <div className="heading heading__content">
        <h1>Photos & Video Gallery</h1>
        <div className="gallery__content mt-5">     <div class="gallery__card col-xl-4 col-lg-4 col-sm-10">
  <img src={img2} alt="Card Image" />
  <button onClick={photoHandler}>Photos</button>
</div>
<div class="gallery__card col-xl-4 col-lg-4 col-sm-10">
  <img src={img2} alt="Card Image" />
  <button onClick={videoHandler}>Videos</button>
</div></div>
   
      </div>
    </div>
  );
};
export default Gallery;