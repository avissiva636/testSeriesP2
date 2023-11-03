import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import YoutubeEmbed from "./YoutubeEmbed";
import { useInspiroCrud } from "./context/InspiroContext";

const DemoClass = () => {
  const { DemoVideo } = useInspiroCrud();
  return (
    <div>
      <h1>Demo Classes</h1>
      <div>
        {DemoVideo.map((video, index) => (
          <div key={index}>
            <YoutubeEmbed embedId={video.embedId} />
            <p>{video.desc}</p>
          </div>
        ))}
      </div>
      <ContactUsHomePage />
      <Footer />
    </div>
  );
};
export default DemoClass;
