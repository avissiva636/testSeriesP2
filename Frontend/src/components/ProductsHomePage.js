import { useState } from "react";
import "./css/ProductsHomePage.css";
import { useInspiroCrud } from "./context/InspiroContext";
import { Link } from "react-router-dom";
import ProductCardDisplay from "./ProductCardDisplay";

const ProductsHomePage = () => {
  const { products } = useInspiroCrud();
  // const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div>
      <div className="products-container">
        <h1 className="products-heading">Our Products</h1>
        <div className="product-list">
          {products.slice(0, 3).map((product) => (
            <ProductCardDisplay
              key={product.mainProduct}
              product={product}
              // hoveredProduct={hoveredProduct}
              // setHoveredProduct={setHoveredProduct}
            />
          ))}
        </div>
        <div className="d-flex justify-content-end view__products"><Link to={"/Products"}>
          <button className="view-more-button">View More</button>
        </Link></div>
        
      </div>
    </div>
  );
};

export default ProductsHomePage;
