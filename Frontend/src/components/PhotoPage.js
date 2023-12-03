import { useEffect } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import { useInspiroCrud } from "./context/InspiroContext";

const PhotoPage = () => {
  const { Images, getImageList } = useInspiroCrud();
  useEffect(() => {
    getImageList();
  }, []);
  return (
    <div>
      <h1 className="d-flex justify-content-center my-5">Photo Gallery</h1>
      <div className="gallery__photo-content">
        {Images.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} width="300" height="200" />
            {/* <p>{photo.description}</p> */}
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ContactUsHomePage />
    </div>
  );
};
export default PhotoPage;
