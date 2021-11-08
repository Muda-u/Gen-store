import React,{useState,useEffect} from "react";
import Product from "./Product";
import { deleteProduct } from "../BackendRequest/Request";
import { fetchProducts } from "../BackendRequest/Request";
import { doUpdateProcess } from "../functions/updateProduct";
import { doDeletionProcess } from "../functions/Delete";
import "../css/ProductCard.css"
import Modal from "./Modal";

function ProductCard({Name,Price, Category,Id, setProducts}){
    // function to open update Modal
    const openModal= (modalID)=>{
        document.getElementById(modalID).style.display = "flex"
    }

    //render all products and display them in a Product component
    return (

        <div className="product-card">
            {/* show the product */}
            <Product Name = {Name} Id={Id} Category={Category} Price={Price}></Product>
            {/*when a user clicks delete, do the deletetion process */}
            <button className="delete-button" onClick={()=>{doDeletionProcess(Id,setProducts)}}>delete</button>
            
            {/*when a user clicks update, bring up the modal where they'll be able to edit */}
            <button onClick={()=>{openModal(Id)}} >update</button>
            <Modal Name={Name} Id={Id} Category={Category} Price={Price} setProducts={setProducts}></Modal>
            
            
        </div>
    )

}
export default ProductCard;