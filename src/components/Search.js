import React, {useState,useEffect} from "react";
import { getProducts } from "../functions/Delete";

// this component handles search functionality
function Search({products, setProducts, setSearchMsg}){
    const [searchId,setSearchId] = useState("");
    //fetchOnSearch takes in the product Id and will return the product with the Id
    const fetchOnSearch = async (Id,setSearched)=>{
        setSearchMsg("No product with that ID")
        await getProducts(Id,setSearched);
    }
    useEffect(() => {
        
        console.log(products)
    }, [products])
    return(
        <div className="searchBar">
            <input onChange={(e)=>{setSearchId(e.target.value)}} type="number" />
            <button onClick={()=>{fetchOnSearch(searchId,setProducts)}}> search</button>
        </div>

    )
}
export default Search