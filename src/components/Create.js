import React,{} from "react";
import "../css/Create.css"
import CreateProduct from "./CreateProduct"
import { addProductRequest } from "../BackendRequest/Request";
import { getProducts } from "../functions/Delete";
import { addNewProduct } from "../functions/AddProduct";
/*
create side is the right side of the app where a user will...
be able to update, delete, and create new products
*/

function Create({products,setProducts}){
    
    
    return(
        <div className="create-side">
            <CreateProduct setProducts={setProducts}></CreateProduct>
        
        </div>
    )
}
export default Create