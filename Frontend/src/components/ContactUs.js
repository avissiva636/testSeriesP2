import { Email } from "@mui/icons-material";
import "./css/ContactUs.css";

const ContactUs = () => {
    return(<div className="center">
        <div><h1>Your Future Is Calling</h1></div>
        <div><p>Contact us for registration, seat availability, feedback or complaints</p></div>
        <button> <Email /> CONTACT US</button>
    </div>)
}
export default ContactUs;