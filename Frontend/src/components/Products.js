import React, { useState } from 'react';
import Navigationbar from './Navigationbar';
import { useInspiroCrud } from './context/InspiroContext';
import "./css/Products.css";
import Footer from './Footer';

const Products = () => {
  const { products } = useInspiroCrud();
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (product) => {
    setActiveProduct(activeProduct === product ? null : product);
  };

  return (
    <div>
      <div>
        <Navigationbar></Navigationbar>
        <h1 className='heading'>Our Products</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product-item ${activeProduct === product ? 'active' : ''}`}
              onClick={() => handleProductClick(product)}
            >
              <h2>{product.mainProduct}</h2>
              {activeProduct === product && (
                <div className="sub-products">
                  <ul>
                    {product.subProducts.map((subProduct, subIndex) => (
                      <li key={subIndex}>{subProduct}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;