const ProductCardDisplay = ({ product, hoveredProduct, setHoveredProduct }) => {
  return (
    <div className="product-item">
      <h2
        onMouseEnter={() => setHoveredProduct(product)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        {product.mainProduct}
      </h2>
      {hoveredProduct === product && (
        <ul>
          {product.subProducts.map((subProduct, subIndex) => (
            <li key={subIndex}>{subProduct}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCardDisplay;
