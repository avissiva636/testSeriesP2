import React, { useEffect, useState } from "react";
import { useInspiroCrud } from "./context/InspiroContext";
import "./css/Products.css";
import Footer from "./Footer";
import ContactUsHomePage from "./ContactUsHomePage";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { products } = useInspiroCrud();

  const handleProductClick = (product) => {
    navigate("/SubProducts", {
      state: { data: { product } },
    });
  };

  return (
    <div>
      <div>
        <b>
          <h1 className="heading">Our Products</h1>
        </b>
        <div className="product-list">
          {products.map((product, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-3 col-sm-12 col-xs-12 product__item`}
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.mainProduct}</h2>
            </div>
          ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ContactUsHomePage />
      </div>
    </div>
  );
};

export default Products;
