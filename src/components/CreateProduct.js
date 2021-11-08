import React,{useState,useEffect} from "react";
import { addNewProduct } from "../functions/AddProduct";

import "../css/Create.css"
import ReactJsAlert from "reactjs-alert"
import Alert from "../components/Alert"
function CreateProduct({setProducts}){
    //product details and functions to set their values when we get input;
    const [productName,setProductName] = useState("");
    const [productCategory,setProductCategory] = useState("");
    const [productPrice,setProductPrice] = useState("");
    //variable used to show error popup
    const [alerts,setAlerts] = useState({
        type: "",
        status: false,
        title :""
    });
    // useEffect to update State immediately when product details have changed from null no something;
    useEffect(() => {
        
        console.log(productName)
    }, [productName])
    /*
    The function below tries to add a new product
    if product name already exists, user will get appropriate error
    */
    const addNewProductE = async  (e,name,category,price,setProductsFunction)=>{
        try{
            e.preventDefault();
            const message = await addNewProduct(1,name,category,price,setProducts);
            setAlerts({
                type:"error",
                status:true,
                title:message
            })

        }
        catch{
            console.log(e);
        }
    }
    // a form that allows a user to input product details
    return (
        <div className="formContainer">   
            <div>
                {/* Alert tyo show when things go wrong */}
            <ReactJsAlert
                status={alerts.status}   // true or false
                type={alerts.type}   // success, warning, error, info
                title={alerts.title}   // title you want to display
                color ="blue"
                Close={() => setAlerts({
                    type: "error",
                    status: false,
                    title: "",
                }
    
      )}   // callback method for hide
             />
        </div>
            <form className="form" onSubmit={(e)=>addNewProductE(e,productName,productCategory,productPrice,setProducts)}>
            <div className='header'>
                <h3 className='appName'>Add Product</h3>
             </div>
                <label className="fieldDescription" htmlFor="productName"> Product Name</label>
                <br/>
                <input className='inputBox' required  onChange={(e)=>{setProductName(e.target.value)}} id="productName"></input>
                <br/>
                <label className="fieldDescription" htmlFor="productCategory"> Product Category</label>
                <br/>
                <input className='inputBox' required  onChange={(e)=>{setProductCategory(e.target.value)}} id="productCategory"></input>
                <br/>
                <label className="fieldDescription" htmlFor="productPrice"> Product Price</label>
                <br/>
                <input className='inputBox' required  onChange={(e)=>{setProductPrice(e.target.value); e.preventDefault()}} id="productPrice"></input>
                <br/>
                
                <button className="btnAdd" type="submit"> Add Product</button>
            </form>
            
        </div>
    )
}
export default CreateProduct;