import React from 'react';
import "./productincart.css";

function ProductInCart(props) {

  return (
    
    <div className="product-in-cart">
                <img src={'/images/' + props.data.image}></img>
              <h5>{props.data.title}</h5><br />
              <h6>Type:</h6><p>{props.data.category}</p>
              <h6>Price:</h6><p>{props.data.price}</p>
              <h6>Quantity:</h6><p>{props.data.quantity}</p>
              <h6>Total:</h6><p>{props.data.price * props.data.quantity}</p>
    </div>
  );
}

export default ProductInCart;