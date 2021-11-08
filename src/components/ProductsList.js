import React,{useEffect,useState} from "react";
import { getProducts } from "../functions/Delete";
import Product from './Product';
import ProductCard from "./ProductCard";
import "../css/ProductsList.css"
import Search from "./Search"
import Modal from "./Modal";

function ProductsList({products,setProducts}){
    // show loading message when the app is fetching items
    const [searchMsg,setSearchMsg] = useState("loading")
    // if the products exist, Map every product to a Product card
   if(products.length>0){
       console.log(products.length)
    return (
        <div >
            {/* add search bar to the div */}
            <Search products={products} setProducts={setProducts} setSearchMsg={setSearchMsg}/>
            
            <div className="products-container">
                
                {products?.map(product=>
                    <div>
                    <ProductCard key={product.Id} Id={product.Id} Name={product.Name}  Category={product.Category} Price={product.Price} setProducts={setProducts}></ProductCard>
                    </div>
                    )}
                    
            </div>
        </div>
    )}
    //if theres only one product, no need to map, just return a Card with those details
    return(
        <div> 
            <Search products={products} setProducts={setProducts} setSearchMsg={setSearchMsg}/> 
            
            {products.Name? 
            <div>
            <ProductCard key={products.Id} Id={products.Id} Name={products.Name}  Category={products.Category} Price={products.Price} setProducts={setProducts} ></ProductCard>
            </div>
            :<div>{searchMsg}</div>}
        </div>
    )
}
export default ProductsList;