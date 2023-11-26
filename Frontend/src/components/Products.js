import React, { useState } from "react";
import { useInspiroCrud } from "./context/InspiroContext";
import "./css/Products.css";
import Footer from "./Footer";
import ContactUsHomePage from "./ContactUsHomePage";

const Products = () => {
  const { products } = useInspiroCrud();
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct(activeProduct === product ? null : product);
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
              className={`col-3 product__item ${
                activeProduct === product ? "active" : ""
              }`}
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.mainProduct}</h2>
              {activeProduct === product && (
                <div className="sub-products">
                  <ul>
                    {product.subProducts.map((subProduct, subIndex) => (
                      <li key={subIndex}>
                        <a href={subProduct.link} target="_blank">
                          {subProduct.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ContactUsHomePage />
        <Footer />
      </div>
    </div>
  );
};

export default Products;