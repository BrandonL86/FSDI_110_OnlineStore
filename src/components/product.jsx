import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState, useContext } from "react";
import DataContext from "../store/dataContext";

function Product(props){

    const [quantity,setQuantity] = useState(1);
    const additToCart = useContext(DataContext).addToCart;
    

    useEffect(function(){
        console.log("hello i'm a product");
    },[]);

    function onQuantityChange(qty){
        console.log(qty);
        setQuantity(qty);

    }

    function handleAddProduct(){
        let productForCart = {...props.data, quantity: quantity};
        additToCart(productForCart);
    }

    return(
        <div className="product">
            <img src={"/images/"+props.data.image} width="300px" height="250px" ></img>
        <h5>{props.data.title}</h5>

        <div className="prices">
            <label>Price:{props.data.price.toFixed(2)}</label> <br></br>
            <label>Total: {(props.data.price * quantity).toFixed(2)} </label>
            
        </div>
        <QuantityPicker onChange={onQuantityChange}/><br />

        <button onClick ={handleAddProduct} className="btn btn-sm btn-success">Add to Cart</button>
        </div>
    )


}

export default Product;