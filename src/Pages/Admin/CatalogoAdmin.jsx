import React from 'react'

import { useEffect, useState } from "react";

import AdminNavBar from '../../Components/AdminNavbar/AdminNavBar';

import "./styles/admonCatalogo.css";

import {getAllProducts} from "../../Services/Products_services";
import Card from '../../Components/CardAdmin/Card';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CatalogoAdmin() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await getAllProducts();
        setProducts(result);
      };
      fetchData();
    }, []);
    


  return (
    <div className='catalogoAdmon__container'>
      
     <AdminNavBar />     
      <div className="catalogoAdmon__products">
      {products.map(product => {
        return <Card product={product} key={product.code}/>;
      })}
    </div>


    </div>
  )
}

export default CatalogoAdmin
