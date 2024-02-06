import axios from 'axios';
import React, { useState } from 'react'
import Layout from '@/components/layout/layout';
import Joi from 'joi';

const create = () => {
  const schema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
  })
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        description:''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [errors, setErrors] = useState("");

    const handleData = async (e) => {

      
        e.preventDefault();
        try {
          const validationResult = schema.validate(formData, { abortEarly: false });

          if (validationResult.error) {
            const err = validationResult.error.details
            console.log(err[0].message);
            setErrors(err[0].message)
            // const newErrors = {};
            // validationResult.error.details.forEach((error) => {
            //   newErrors[error.path[0]] = error.message;
            // });
            // setErrors(newErrors);
            return;
          }
            console.log(formData)
            const response = await axios.post('http://localhost:3003/api/product/new', formData);
            console.log(response.data);
          
        


        } catch (error) {
           
             
            console.error(error); 
        }
    };
  return (
    <Layout>
    <div>
    {errors ?     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  {/* <strong className="font-bold">Error !</strong> */}
  <span className="block sm:inline">{errors}</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    {/* <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg> */}
  </span>
</div> : ""}

    <div className='flex items-center justify-center'>
  
      <form onSubmit={handleData} className="w-full max-w-lg">

        
    <div className='flex  justify-center pb-16 font-extrabold text-xl'>
    <h1>Add product</h1>
    </div>

    
       
      
  <div className="flex flex-wrap -mx-3 ">
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
      <input name='price' onChange={handleInputChange}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" />
    
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
    </Layout>
  )
}

export default create
