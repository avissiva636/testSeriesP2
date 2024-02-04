import { useEffect } from "react";
import { useInspiroCrud } from "./context/InspiroContext";
import "./css/StudentsFeedback.css";

const TestimonialAll = () => {
    const { Testimonial, getTestimonialList, apiurl } = useInspiroCrud();
    useEffect(()=>{
        getTestimonialList();
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[])
    return(<div className="testimonialAll-container">
        {Testimonial.map((photo, index) => (
                <div key={index} className="testimonialAll-item">
                    <a href={`${apiurl}images/testimonials/${photo.photo}`} target="_blank">
                    <img src={`${apiurl}images/testimonials/${photo.photo}`} width="500" height="300" /></a>
                </div>
))}
    </div>)
}
export default TestimonialAll;