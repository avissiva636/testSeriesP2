import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactUsHomePage from "./ContactUsHomePage";
import "./css/SubProducts.css"; // Assuming SubProducts.css is the CSS file with the provided styles
import { ArrowBack } from "@mui/icons-material";

const SubProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mainProduct, subProducts } = location.state.data.product;

  const backClickHandler = () => {
    navigate("/Products");
  };

  return (
    <div>
      <div className="heading">
        <h1>
          <b>{mainProduct}</b>
        </h1>
      </div>
      <div className="back-button">
        <button className="back-button" onClick={backClickHandler}>
          <ArrowBack /> Back
        </button>
      </div>

      <div className="card-container">
        {subProducts.map((sp) => (
          <div key={sp.index} className="card">
            {/* <img src={sp.image} alt={sp.name} className="card-img" /> */}
            <div className="sub-product-name">{sp.name}</div>
            <Link to={sp.link} target="_blank">
              <button className="buy-button">Buy</button>
            </Link>
          </div>
        ))}
      </div>
      <ContactUsHomePage />
    </div>
  );
};

export default SubProducts;
