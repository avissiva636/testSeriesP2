import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import YoutubeEmbed from "./YoutubeEmbed";
import { useInspiroCrud } from "./context/InspiroContext";

const VideoPage = () => {
  const { Video } = useInspiroCrud();
  return (
    <div>
      <h1 className="d-flex justify-content-center my-5">Video Gallery</h1>
      <div className="gallery__video-content">
        {Video.map((video, index) => (
          <div key={index}>
            <YoutubeEmbed embedId={video.embedId} />
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
export default VideoPage;
