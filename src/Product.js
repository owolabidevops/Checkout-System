import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";



function Product({ id, title, description, price , image  }) {

  
  // eslint-disable-next-line no-empty-pattern

  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price
     
      },
    });
  };


  
  return (
    <div className="product">
      <div className="product_info">
        <h3 >{title}</h3>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
       
      </div>

      <img src={image} alt="" />
      <p>{description}</p>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
