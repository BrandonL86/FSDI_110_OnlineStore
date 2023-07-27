import "./quanityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {


    let [quantity, setQuantity] = useState(1);

    function increase(){

        console.log("Increasing quantity");
        if (quantity === 99) return;
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);// notify my parent that im doing something
    }
    //create the logic for the decrease button
    function decrease(){

        console.log("Decreasing quantity");
        if (quantity===1) return;
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);

    }


    return(
        <div className="quantityPicker">
            <button className="btn btn-primary"  disabled={quantity==1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-primary" disabled={quantity==99} onClick={increase}>+</button>
            
        </div>

    );
}

export default QuantityPicker;