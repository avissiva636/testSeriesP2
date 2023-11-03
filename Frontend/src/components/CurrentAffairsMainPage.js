import ContactUsHomePage from "./ContactUsHomePage";
import Footer from "./Footer";
import { useInspiroCrud } from "./context/InspiroContext";

const CurrentAffairsMainPage = () => {
  const { CurrentAffair } = useInspiroCrud();

  return (
    <div>
      <div>
        <h1>Current Affair Magazines</h1>
      </div>
      {console.log(CurrentAffair)}
      <div>
        {CurrentAffair.map((subProduct) => (
          <a href={subProduct.link} target="_blank">
            {subProduct.name}
          </a>
        ))}
      </div>
      <ContactUsHomePage />
      <Footer />
    </div>
  );
};
export default CurrentAffairsMainPage;
