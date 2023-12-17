import { useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./css/ProductsHomePage.css";
import { useInspiroCrud } from "./context/InspiroContext";
import { Link } from "react-router-dom";
import ProductCardDisplay from "./ProductCardDisplay";

const ProductsHomePage = () => {
  const { products, getProductList } = useInspiroCrud();
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <div className="products-container">
        <h1 className="products-heading">Our Products</h1>
        <div className="product-list">
          {products.slice(0, 3).map((product) => (
            <ProductCardDisplay
              key={product.mainProduct}
              product={product}
            />
          ))}
        </div>
        <div className="d-flex justify-content-end view__products"><Link to={"/Products"}>
          <button className="view-more-button">View More <ArrowRightAltIcon /></button>
        </Link></div>
        
      </div>
    </div>
  );
};

export default ProductsHomePage;
