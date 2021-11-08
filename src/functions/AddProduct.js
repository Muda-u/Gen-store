import { addProduct } from "../BackendRequest/Request";
import { getProducts } from "./Delete";
export const addNewProduct = async (Id,Name,Category,Price,setProducts)=>{

    const message =    await addProduct(Id,Name,Category,Price);
    getProducts("",setProducts);
    return message
}