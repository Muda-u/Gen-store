import { fetchProducts, updateProduct } from "../BackendRequest/Request";
import { getProducts } from "./Delete";

export const doUpdateProcess = async (Id,Name,Category,Price,setProducts)=>{

    await updateProduct(Id,Name,Category,Price);
    getProducts("",setProducts);

}

export const handleInputChange =(e,setValue)=>{
    setValue(e);
}