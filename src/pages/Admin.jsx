import { useEffect, useState } from 'react';
import "./Admin.css";

import {Link} from 'react-router-dom';
import DataService from '../services/dataServices';



function Admin(){
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    const[coupon, setCoupon ] = useState({});
    const[allCoupons, setAllCoupons] = useState([]);

    useEffect(function() {
        loadCoupons();
    }, []);

    async function loadCoupons(){
        let service = new DataService();
        let savedCoupons = await service.getCoupon();
        setAllCoupons(savedCoupons);
    }

    function handleText(e){
        const value = e.target.value;
        const name = e.target.name;
        

        // Copy, Modify Copy, Set Copy

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    }

    function handleCouponCode(e){
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    async function saveProduct() {

        let fixedProduct = {...product};
        fixedProduct.price = parseFloat(product.price);

        let service = new DataService();
        let response = await service.saveProduct(fixedProduct);

        console.log(product);

        let copy = [...allProducts];
        copy.push(response);
        setAllProducts(copy);
    }

    async function saveCoupon() {

        let fixedCoupon = {...coupon};
        fixedCoupon.discount = parseFloat(coupon.discount);

        let service = new DataService();
        let response = await service.saveCoupon(fixedCoupon);
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(response);
        setAllCoupons(copy);
    }




    return(

    <div className="admin page"> 
        <h1>Store Administration</h1> <br />

        <div className="parent">
            <section className="sec-prods">
            <div className="form">
                <h3>Products</h3>

                <div className='mt-3'>
                <label className="form-label">Title</label>
                <input onChange={handleText} name="title" className="form-control" type="text"/>
                </div>

                <div className='mt-3'>
                <label className="form-label">Category</label>
                <input onChange={handleText} name="category"  className="form-control" type="text"/>
                </div>

                <div className='mt-3'>
                <label className="form-label">Image</label>
                <input onChange={handleText} name="image"  className="form-control" type="text"/>
                </div>

                <div className='mt-3'>
                <label className="form-label">Price</label>
                <input onChange={handleText} name="price"  className="form-control" type="number"/>
                </div>

                <div className='mt-4 text-center'>
                    <button onClick={saveProduct} type="submit" className="btn btn-primary">Save Product</button>
                </div>
                <h3 className='mt-4'>You Have {allProducts.length} Products</h3>
            </div>

            {allProducts.map(prod => <h5 key={prod._id}>{prod.title} - ${prod.price}</h5>)}
            </section>

            <section className="sec-coupons">
                <div className="form">
                    <h3>Coupon Codes</h3>

                    <div className='mt-3'>
                        <label className="form-label">Code</label>
                        <input onChange={handleCouponCode} name="code" type="text" className="form-control"/>
                    </div>

                    <div className='mt-3'>
                        <label className="form-label">Discount</label>
                        <input onChange={handleCouponCode} name="discount" type="number" className="form-control"/>
                    </div>
                    <div className='mt-4 text-center'>
                        <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
                    </div>
                </div>

                <h3 className='mt-4'>You Have {allCoupons.length} Coupons</h3>
                <ul>
                    {allCoupons.map(coupon => <li key={coupon._id}> - {coupon.discount}</li>)}
                </ul>
            </section>
        </div>
    </div>

    );
}

export default Admin;

/**
 * Create the form 
 * Create a function to handle the change on controls
 * Created an state variable and build an object from the change function
 * Console log the object on the click of the save button
 * 
 * Create an array to store the object and added the object from the save function
 * Print the lenght of the array
 * Render info about the objects
 */
