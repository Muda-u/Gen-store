
import { fetchProducts,deleteProduct } from "../BackendRequest/Request";

// delProduct will delete the selected product
const delProduct = async (id)=>{
    return  deleteProduct(id).then((res)=>{
        return res
    });
}

// getProducts will fetch all products after we have deleted a product
export const getProducts = async (id,setProducts)=>{
    return  fetchProducts(id).then((res)=>{
        setProducts(res)
        return res
    });
}
export const doDeletionProcess = async (Id, setProducts)=>{
    await delProduct(Id);
    //update products after deleting
    getProducts("",setProducts);
}

