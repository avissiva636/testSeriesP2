import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ContactUsHomePage from "./ContactUsHomePage";
import "./css/SubProducts.css"; // Assuming SubProducts.css is the CSS file with the provided styles
import { ArrowBack } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import { useInspiroCrud } from "./context/InspiroContext";

const SubProducts = () => {
  const { Title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { products, getProductList } = useInspiroCrud();

  const { mainProduct, subProducts } = location.state?.data?.product || {};
  const [reloadSubProducts, setReloadSubProducts] = useState([null]);
  const sortedSubProducts = subProducts ? [...subProducts].sort() : reloadSubProducts;
  const [searchQuery, setSearchQuery] = useState("");

  const backClickHandler = () => {
    navigate("/Products");
  };
  const filteredSubProducts =  sortedSubProducts.filter((sp) =>
    sp?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    const prodCall = async () => {
      if (mainProduct === undefined && Title) {
        const subProductData = await getProductList();
        var filteredContent = subProductData.filter(
          (data) => data.mainProduct === Title
        );
        setReloadSubProducts(filteredContent[0].subProducts)
        
      }
    };

    prodCall();
  }, []);

  return (
    <div>
      <div className="heading">
        <h1>
          <b>{mainProduct ? mainProduct : Title}</b>
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
        { filteredSubProducts.map((sp) => (
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
      <Sidebar />
    </div>
  );
};

export default SubProducts;
