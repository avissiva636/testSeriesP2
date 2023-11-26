import { Navigate, useNavigate } from "react-router-dom";

const ProductCardDisplay = ({ product, hoveredProduct, setHoveredProduct }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("Products");
  };
  return (
    <div className="product-item">
      <div className="product__contents">
        <h2>
          <div onClick={handleClick}>{product.mainProduct}</div>
        </h2>
        <div className="mt-4">A JS library for developing web pages</div>
      </div>
      {/* <button className="product__btn">learn more</button> */}
      <div>
        {hoveredProduct === product && (
          <ul>
            {product.subProducts.map((subProduct, subIndex) => (
              <li key={subIndex}>{subProduct}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCardDisplay;
