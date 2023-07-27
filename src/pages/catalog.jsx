import Product from "../components/product";
import DataService from "../services/dataServices";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog(){

    const [products,setProducts]= useState([]);
    const [category,setCategory] = useState([]);
    const [prodsToDisplay,setProdsToDisplay]= useState([]);

    //do something when the component loads/ to do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    },[]);

    async function loadCatalog(){
        //get the products from the service
        let service = new DataService();
        let prods =  await service.getProducts();
        console.log(prods);
        setProducts(prods);

        let cats = await service.getCategories();
        setCategory(cats);
        setProdsToDisplay(prods);
    }
    //when the product component is loaded
    // console.log "hello i'm a product"

    function filter(category){
        let list =[];
        //find the products that match the category and add them to the list
        for (let i = 0; i < products.length; i++) {
            let prod = products[i];
            if (prod.category === category)
            {
                list.push(prod);
            }
        }


        console.log(category);
        console.log(list);
        setProdsToDisplay(list);
    }

    function clearFilters(){

        setProdsToDisplay(products);
    }

    return(
        <div className="catalog page">
            <h1> Check out our {products.length} amazing products</h1>
            <br/>
            <button onClick ={clearFilters} className="btn btn-sm btn-dark btn-filter">Clear Filter</button>
{category.map(c => <button onClick={() => filter(c)} key={c} className="btn btn-sm btn-primary btn-filter">{c}</button>)}

{/* c = for loop */}

            <br/>
            {prodsToDisplay.map(p => <Product key={p.id} data={p}/>)}


        </div>
    );
}
//create a product componet and render the quantity picker inside of the product component
//Render 5 times the <Product> component in the catalog

export default Catalog;
