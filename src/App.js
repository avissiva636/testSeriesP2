import Navigationbar from "./components/Navigatoionbar";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import StudentFeedback from "./components/StudentsFeedback";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Features /><br /><br /><br /><br /><br />
      <Gallery /><br /><br /><br /><br /><br />
      <StudentFeedback /><br /><br /><br /><br /><br />
      <FrequentlyAskedQuestions /><br /><br /><br /><br /><br />
      <ContactUs /><br />
      <Footer />
    </div>
  );
}

export default App;