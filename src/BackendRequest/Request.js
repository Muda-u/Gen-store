
// fetch products from the API
export const fetchProducts = async (id)=>{
    // create a GET request and pass {id} to the link
    // if {id} is empty, all products will be returned
    //else the product with the specified id will be returned

    const  response = await fetch("https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/"+
        `${id}`,{
            method:'GET'
        }
        );

     if(response.status===200){
        
         return   response.json();
    }
    if(response.status ===400){
        
        return   response.json();
    }
   return {error: "something went wrong, try again"}

}

//request to delete a specified product

export const deleteProduct = async (id)=> {
    const  response = await fetch("https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/"+
        `${id}`,{
            method:'DELETE'
        }
        );

     if(response.status===200){
        
         return   "Product deleted";
    }
    if(response.status ===400){
        
        return   response.text;
    }
   return {error: "something went wrong, try again"}

}

//request to add a new product

export const addProduct = async (Id,Name,Category,Price)=>{
    
    const productData = {Id: Id,
                         Name: Name,
                         Category: Category,
                         Price:Price

    }
    const  response = await fetch("https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/"+
        `${Id}`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(productData)
        }
        );
    if(response.status===200){
        
         return   "Product added";
    }
    if(response.status ===400){
        
        return   response.text;
    }
    if(response.status === 409){
        console.log("409")
        return "A product with the same name already exist"
    }
   return {error: "something went wrong, try again"}
}

// request to update details of a spefic product

export const updateProduct = async (Id,Name,Category,Price)=>{
    
    const productData = {Id: Id,
                         Name: Name,
                         Category: Category,
                         Price:Price

    }
    const  response = await fetch("https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/"+
        `${Id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(productData)
        }
        );
    if(response.status===200){
        
         return   "Product Changed";
    }
    if(response.status ===400){
        
        return   response.text;
    }
    
   return {error: "something went wrong, try again"}
}