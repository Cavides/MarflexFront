import { useEffect, useState } from "react";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import "./products.css";

import {getAllProducts} from "../../Services/Products_services";
import Card from '../../Components/Card/Card';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../slices/cartSlice";

// import { useGetAllProductsQuery } from "../../slices/productsApi";



function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllProducts();
      setProducts(result);
    };
    fetchData();
  }, []);
  


  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-container">
      {/* {status === "success" ? (
        <> */}
          <h2>Salas y Comedores</h2>
    </div> 

    <div className="products">
      {products.map(product => {
        return <Card product={product} key={product.code}/>;
      })}
    </div>

      
      <Footer />
    </div>
  );
}

export default Products;
