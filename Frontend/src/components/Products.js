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
  // const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    console.log(product);
    // setActiveProduct(activeProduct === product ? null : product);
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
            // <div
            //   key={index}
            //   className={`col-xl-3 col-lg-3 col-sm-12 col-xs-12 product__item ${
            //     activeProduct === product ? "active" : ""
            //   }`}
            //   onClick={() => handleProductClick(product)}
            // >
            <div
              key={index}
              className={`col-xl-3 col-lg-3 col-sm-12 col-xs-12 product__item`}
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.mainProduct}</h2>
              {/* {activeProduct === product && (
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
              )} */}
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
