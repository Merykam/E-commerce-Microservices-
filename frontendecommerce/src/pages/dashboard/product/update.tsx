import axios from 'axios';
import React, { useState } from 'react'

const update = () => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        prix: '',
        description:''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleData = async (e) => {
      
        e.preventDefault();
        try {
            console.log(formData)
            const response = await axios.post('http://localhost:3003/api/product/new', formData);
            console.log(response.data);
          
        


        } catch (error) {
           
             
            console.error(error); 
        }
    };
  return (
    <div>


    <div className='w-sreen h-screen flex items-center justify-center'>
       
      <form onSubmit={handleData} className="w-full max-w-lg">

        
    <div className='flex  justify-center pb-16 font-extrabold text-xl'>
    <h1>Update product</h1>
    </div>
       
      
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         Name
      </label>
      <input name='name' onChange={handleInputChange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Category
      </label>
      <input name='category' onChange={handleInputChange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Prix
      </label>
      <input name='prix' onChange={handleInputChange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" />
    
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
       Description
      </label>
      <input name='description' onChange={handleInputChange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
    </div>

  </div>
  <div className='flex  justify-center p-2 font-extrabold text-xl bg-black text-white'>
    <button type='submit'>Submit</button>
    </div>
</form>
    </div>
    </div>
  )
}

export default update
