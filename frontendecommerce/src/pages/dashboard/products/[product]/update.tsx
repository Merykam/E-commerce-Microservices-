'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../../layout';
import { useRouter } from 'next/router';

const Edit = () => {
  const router = useRouter();

  const [product , setProduct]=useState([])
    
  const update= router.query.product


  console.log(update);
  

  useEffect(()=>{
    
   
    const showProduct = async () => {
  try {
 
    if(update){
      console.log("update");
      
      const response = await axios.get(`http://localhost:3003/api/product/${update}`, { withCredentials: true });
    
      console.log(response.data);
      setProduct(response.data)
     
    

    }else{
      console.log("update is undefind inside try");
      
    }
    
      
  


  } catch (error) {
       
       
      console.error(error); 
  }

};

showProduct();
  
  },[update])


    const [formData, setFormData] = useState({
        name: product.name,
        category: product.category,
        price: product.price,
        description:product.description
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleData = async (e) => {
      
        e.preventDefault();
        try {
            console.log(formData)
            const response = await axios.post(`http://localhost:3003/api/product/${update}`, formData);
            console.log(response.data);
          
        


        } catch (error) {
           
             
            console.error(error); 
        }
    };
  return (
    <Layout>
    <div>


    <div className='flex items-center justify-center'>
       
      <form onSubmit={handleData} className="w-full max-w-lg">

        
    <div className='flex  justify-center pb-16 font-extrabold text-xl'>
    <h1>Update product</h1>
    </div>
       
      
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         Name
      </label>
      <input onChange={handleInputChange} defaultValue={product.name} name='name'   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Category
      </label>
      <input onChange={handleInputChange} defaultValue={product.category}  name='category'   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Prix
      </label>
      <input onChange={handleInputChange} defaultValue={product.price}  name='price'   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" />
    
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
       Description
      </label>
      <input onChange={handleInputChange} defaultValue={product.description} name='description'   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
    </div>

  </div>
  <div className='flex  justify-center p-2 font-extrabold text-xl bg-black text-white'>
    <button type='submit'>Submit</button>
    </div>
</form>
    </div>
    </div>
    </Layout>
  )
}

export default Edit
