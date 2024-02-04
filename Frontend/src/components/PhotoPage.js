import { useEffect } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import { useInspiroCrud } from "./context/InspiroContext";
import Sidebar from "./Sidebar";

const PhotoPage = () => {
  const { Images, getImageList, apiurl } = useInspiroCrud();
  useEffect(() => {
    window.scroll(0,0);
    getImageList();
  }, []);
  return (
    <div>
      <h1 className="d-flex justify-content-center my-5">Photo Gallery</h1>
      <div className="gallery__photo-content">
        {Images.map((photo) => (
          <div key={photo.id}>
            <img src={`${apiurl}/images/photo/${photo}`} width="300" height="200" />
            {console.log(`${apiurl}/images/photo/${photo}`)}
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ContactUsHomePage />
      <Sidebar />
    </div>
  );
};
export default PhotoPage;
