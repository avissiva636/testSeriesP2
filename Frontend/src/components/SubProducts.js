import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactUsHomePage from "./ContactUsHomePage";
import "./css/SubProducts.css"; // Assuming SubProducts.css is the CSS file with the provided styles
import { ArrowBack } from "@mui/icons-material";

const SubProducts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mainProduct, subProducts } = location.state.data.product;
  console.log(subProducts);
  const sortedSubProducts = [...subProducts].sort();
  const [searchQuery, setSearchQuery] = useState("");

  const backClickHandler = () => {
    navigate("/Products");
  };
  const filteredSubProducts = sortedSubProducts.filter((sp) =>
    sp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="heading">
        <h1>
          <b>{mainProduct}</b>
        </h1>
      </div>
      <div className="container">
        <button className="back-button" onClick={backClickHandler}>
          <ArrowBack /> Back
        </button>

        <input
          type="text"
          placeholder="Search Products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        {searchQuery !== "" && filteredSubProducts.length === 0 && (
          <div className="no-results-message">No such content</div>
        )}
      </div>

      <div className="card-container">
        {filteredSubProducts.map((sp) => (
          <div key={sp.index} className="card">
            <img src={sp.photo} alt={sp.photo} className="card-img" />
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
