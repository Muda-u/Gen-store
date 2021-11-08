import React,{} from "react";
import Modal from "./Modal";

function Product({Name,Price, Category,Id}){
    
    return (
        <div className="product-details">
            {Name}
            <br/>
            {Category}
            <br/>
            {Price}
            <br/>
            
        </div>
    )

}
export default Product;