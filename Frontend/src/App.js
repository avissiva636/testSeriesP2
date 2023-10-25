import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { InspiroContext } from "./components/context/InspiroContext";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import WhyInspiro from "./components/WhyInspiro";
function App() {
  return (
    <div>
      <Router>
        <InspiroContext>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/WhyInspiro" element={<WhyInspiro />}></Route>
          </Routes>
        </InspiroContext>
      </Router>
    </div>
  );
}
export default App;