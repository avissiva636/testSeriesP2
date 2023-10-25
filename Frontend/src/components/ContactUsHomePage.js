import { Email } from "@mui/icons-material";
import "./css/ContactUsHomePage.css";
import { Link } from "react-router-dom";

const ContactUsHomePage = () => {
  return (
    <div className="center">
      <div>
        <h1>Your Future Is Calling</h1>
      </div>
      <div>
        <p>
          Contact us for registration, seat availability, feedback or complaints
        </p>
      </div>
      <Link to={"./ContactUs"}>
        <button>
          <Email /> CONTACT US
        </button>
      </Link>
    </div>
  );
};
export default ContactUsHomePage;
