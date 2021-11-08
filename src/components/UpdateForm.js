import React,{useEffect,useState} from 'react'
import { doUpdateProcess, handleInputChange } from '../functions/updateProduct'
import ReactjsAlert from 'reactjs-alert';
export default function UpdateForm({Name,Category,Price,setProducts,Id}) {
    const [productName,setProductName] = useState(Name);
    const [productCategory,setProductCategory] = useState(Category);
    const [productPrice,setProductPrice] = useState(Price);
    // close modal
    const onClose= (modalID)=>{
        document.getElementById(modalID).style.display = "none"
    }
    // when form is submitted, send details to API
    const sendUpdate = async (id,name,category,price, setFunction)=>{
        const message = await doUpdateProcess(id,name,category,price,setFunction);
        //close modal when done
        onClose(id);

    }

    //return a form that has prefilled values when a user wants to update the product
    return (
        <div>
            
            <label className="fieldDescription" htmlFor="productName"> Product Name</label>
            <br/>
            <input 
                required
                type="text"
                name="productName"
                value={productName}
                onChange={(e)=>{handleInputChange(e.target.value,setProductName)}}
            />
            <br/>

            <label className="fieldDescription" htmlFor="productCategory"> Product Category</label>
            <br/>
            <input 
                required
                type="number"
                name="productCategory"
                value={productCategory}
                onChange={(e)=>{handleInputChange(e.target.value,setProductCategory)}}
            />
            <br/>

            <label className="fieldDescription" htmlFor="productPrice"> Product Price</label>
            <br/>
            <input 
                required
                type="number"
                name="productPrice"
                value={productPrice}
                onChange={(e)=>{handleInputChange(e.target.value,setProductPrice)}}
            />
            <br/>

            <button onClick={()=>{sendUpdate(Id,productName,productCategory,productPrice,setProducts)}} className="updateButton">update</button>
            
        </div>
    )
}
