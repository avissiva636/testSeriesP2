import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import YoutubeEmbed from "./YoutubeEmbed";
import { useInspiroCrud } from "./context/InspiroContext";

const DemoClass = () => {
  const { DemoVideo } = useInspiroCrud();
  return (
    <div className="">
      <h1 className="d-flex justify-content-center mt-5 mb-5">Demo Classes</h1>
      <div className="d-flex demo__content col-3">
        {DemoVideo.map((video, index) => (
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
export default DemoClass;
