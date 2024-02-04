import { useEffect, useState } from "react";
import { useInspiroCrud } from "./context/InspiroContext";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import "./css/StudentsFeedback.css";
//Feature.css

const Testimonial = () => {
  const { Testimonial, getTestimonialList, apiurl } = useInspiroCrud();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Testimonial.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [Testimonial]);
  useEffect(() => {
    getTestimonialList();
  }, []);
  const navigate = useNavigate();
  const handleTestimonial = () => {
    navigate("TestimonialAll");
  };
  return (
    <div>
      <aside style={{ textAlign: "center" }}>
        <h1>
          <b>Testimonial</b>
        </h1>
        <h3>What Our Students Say</h3>
      </aside>

      <div className="testimonial-scroll">
        <div
          className="testimonial-container"
          style={{
            transform: `translateX(-${currentIndex * (700 + 10)}px)`,
          }}
        >
          {Testimonial.map((photo, index) => (
            <div key={index} className="testimonial-item">
              <img
                src={`${apiurl}images/testimonials/${photo.photo}`}
                width="500"
                height="300"
              />
            </div>
          ))}
        </div>
      </div>
      <button style={{ marginLeft: "680px" }} onClick={handleTestimonial}>
        View All <ArrowRightAltIcon />
      </button>
    </div>
  );
};
export default Testimonial;
