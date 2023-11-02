import { useInspiroCrud } from "./context/InspiroContext";
import "./css/StudentsFeedback.css";
const StudentFeedback = () => {
  const { Testimonial } = useInspiroCrud();
  return (
    <div className="heading">
      <h1>Testimonial</h1>
      <h3>What Our Students Say</h3>
      <div>
        {Testimonial.map((review, index) => (
          <div key={index}>
            <div>
              <h3>{review.name}</h3>
            </div>
            <div>
              <p>{review.desc}</p>
            </div>
            <div>
              <p>{review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentFeedback;
