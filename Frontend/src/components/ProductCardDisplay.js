import { Navigate, useNavigate } from "react-router-dom";

const ProductCardDisplay = ({ product, hoveredProduct }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("Products");
  };
  return (
    <div className="product-item" onClick={handleClick}>
      <div>
        <h2>
          <div >{product.mainProduct}</div>
        </h2>
      </div>
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
