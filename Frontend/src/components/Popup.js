import { useState } from "react";
import "./css/Popup.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  // console.log("Popup is rendering");
  return (
    <div>
      {/* {console.log("Hello")} */}
      {isOpen ?? (
        <div className="popup-container">
          <div className="popup-content">
            <span className="close-icon" onClick={handleClose}>
              &times;
            </span>
            {<h1>Hello World</h1>}
            <img src="./css/images/contact-us.jpg" alt="Photo 1" />
            <img src="photo2.jpg" alt="Photo 2" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Popup;
