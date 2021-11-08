import ProductsList from './components/ProductsList'
import Create from './components/Create'
import React,{useEffect,useState} from "react";
import { fetchProducts } from "./BackendRequest/Request";

function App() {
  // product object / structure
  const [products,setProducts] = useState(
    {
        Name:"",
        Price:"",
        Category: "",
        Id: "",
        legth:0
    }  
)
// function to fetch products based on the given ID, if ID is null it returns all products
const getProduct = async (id)=>{
    return  fetchProducts(id).then((res)=>{
        setProducts(res)
        return res
    });
}
// when the app renders, fetch all the products
useEffect(() => {
       setProducts( getProduct(""));
}, [])


  return (
    <div className="App">
      {/* left side of the app where you see the list of all products */}
      <ProductsList products={products} setProducts={setProducts}></ProductsList>
      {/* right side of the app where you create a new product */}
      <Create products={products} setProducts={setProducts}></Create>
    </div>
  );
}

export default App;
