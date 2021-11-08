import React from 'react'
import "../css/Modal.css"
import UpdateForm from './UpdateForm'
export default function Modal({Name,Id,Category,Price,setProducts}) {
    
    //onClose will close the modal
    const onClose= (modalID)=>{
        document.getElementById(modalID).style.display = "none"
    }
    return (
        

        <div id = {Id} className="modalContainer" >
            <div className="modal">
                <h3>Update details</h3>  
                <button className="closeButton" onClick={()=>{onClose(Id)}}>close</button>
                <br/>
                {/* bring up form where a user will update the details */}
                <UpdateForm Id={Id} Name={Name} Id={Id} Category={Category} setProducts={setProducts} Price={Price}></UpdateForm>
                
                
            </div>
            
        </div>
    )
   
}
