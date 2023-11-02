import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { InspiroContext } from "./components/context/InspiroContext";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import WhyInspiro from "./components/WhyInspiro";
import CourseDescription from "./components/CourseDescription";
import ListAllCourses from "./components/ListAllCourses";
import Navigationbar from "./components/Navigationbar";
import PhotoPage from "./components/PhotoPage";
import VideoPage from "./components/VideoPage"
function App() {
  return (
    <div>
      <Router>
        <InspiroContext>
          <Navigationbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/WhyInspiro" element={<WhyInspiro />}></Route>
            <Route
              path="/CourseDescription"
              element={<CourseDescription />}
            ></Route>
            <Route path="/ListAllCourses" element={<ListAllCourses />}></Route>
            <Route path="/PhotoPage" element={<PhotoPage />} />
            <Route path="/VideoPage" element={<VideoPage />} />
          </Routes>
        </InspiroContext>
      </Router>
    </div>
  );
}
export default App;
