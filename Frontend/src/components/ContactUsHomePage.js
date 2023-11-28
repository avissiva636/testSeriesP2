import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ContactUsHomePage = () => {
  return (
    <div className="future__content">
      <div>
        <h1>
          <b>Your Future Is Calling</b>
        </h1>
        <br></br>
      </div>
      <div>
        <p>
          <b>
            Contact us for registration, seat availability, feedback or
            complaints
          </b>
        </p>
      </div>
      <br></br>
      <Link to={"/ContactUs"}>
        <button>
          <Email /> CONTACT US
        </button>
      </Link>
    </div>
  );
};
export default ContactUsHomePage;
