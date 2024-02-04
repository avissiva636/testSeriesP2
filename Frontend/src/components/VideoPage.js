import { useEffect } from "react";
import ContactUsHomePage from "./ContactUsHomePage";
import YoutubeEmbed from "./YoutubeEmbed";
import { useInspiroCrud } from "./context/InspiroContext";
import Sidebar from "./Sidebar";

const VideoPage = () => {
  const { Video, getVideoList } = useInspiroCrud();
  useEffect(() => {
    getVideoList();
  }, []);
  return (
    <div>
      <h1 className="d-flex justify-content-center my-5">Video Gallery</h1>
      <div className="gallery__video-content">
        {Video.map((video, index) => (
          <div key={index}>
            <YoutubeEmbed embedId={video.videoid} />
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
export default VideoPage;
