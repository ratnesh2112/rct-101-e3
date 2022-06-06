import axios from "axios";
import React, { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./product.module.css"

const Product = () => {

  const [product , setProduct] = useState([])

  const [count , setCount] = useState(0)

  const params = useParams();
  
  useEffect(() => {
    
    axios({
      url :"http://localhost:8080/products",
      methiod : "GET"
    })
    .then(res =>{

      console.log(res.data)
      setProduct(res.data)

    })
    .catch(err =>{

    })
  }, [])

  const add = () =>{
    alert("item added to cart")
    setCount(1)
  }
  const remove = () =>{
    alert("item removed from cart");

    product.splice(1,product.id)
  }
  return (
    <div data-cy={`product-${product.id}`} key={product.id} className={styles.product}>
       {product.map((product) => (
        <div className={styles.item}>
          <h3 data-cy="product-name">{product.name}</h3>
          <h6 data-cy="product-description">{product.description}</h6>
          <button data-cy="product-add-item-to-cart-button" onClick={add}>add To Cart</button>
          <div>
            <button data-cy="product-increment-cart-item-count-button" onClick={() => setCount(count + 1)} hidden={count < 1}>+</button>
            <span data-cy="product-count" hidden={count < 1}>
              {
                count
              }
            </span>
            <button data-cy="product-decrement-cart-item-count-button" onClick={() => setCount(count - 1)} hidden={count < 1}>-</button>
            <button data-cy="product-remove-cart-item-button" hidden={count < 1} onClick={remove} >Remove From Cart</button>
          </div>
    </div>
       ))};
  </div>
  );
};

export default Product;
