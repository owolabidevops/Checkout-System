/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price ,hideButton}) {

    const [{ basket }, dispatch] = useStateValue();
    console.log(id, title, image, price);
    const removeFrombasket = () => {
        //remove item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
        
    };
    
    useEffect(() => {
   const data = localStorage.getItem("my-tier-list");
    if(data){
     JSON.parse(data);
    }
 
    }, []);
    useEffect(() => {
      localStorage.setItem("my-tier-list", JSON.stringify(basket))
    }, []);



    return (
      <div className="checkoutProduct">
        <img className="checkoutproduct_image" src={image} alt="" />

        <div className="checkoutproduct_info">
          <p className="checkoutproduct_title">{title}</p>
          <p className="checkoutproduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          
          {!hideButton && (
            <button onClick={removeFrombasket}>Remove from basket</button>
          )}
       
        </div>
      </div>
    );
}

export default CheckoutProduct
