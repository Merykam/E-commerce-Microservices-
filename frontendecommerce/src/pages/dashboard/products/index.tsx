'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '@/components/layout/layout';


const Table = () => {


 
  
   
    const [products , setProducts]=useState([]);
    const [deletee, setDelete]=useState(true);
    
    console.log(products); 

    useEffect(()=>{
      const showProducts = async () => {
    try {
        
        const response = await axios.get('http://localhost:3003/api/product', { withCredentials: true });
      
        console.log(response.data.data);
        setProducts(response.data.data)


    } catch (error) {
         
         
        console.error(error); 
    }

  };

  showProducts();
    
    },[deletee])
    const deleteProduct = async (id) => {
   
      try {
          console.log(id)
          const response = await axios.delete(`http://localhost:3003/api/product/${id}`);
          setDelete(!deletee);
          
        
      


      } catch (error) {
         
           
          console.error(error); 
      }
  };

  return (
    <Layout>
    <div className="flex items-center justify-center">
    
   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
    <div className="flex flex-wrap mb-5">
   
      <div className="px-3 mb-6  mx-auto">
        <div className=" flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5 ">
          <div className=" relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
          
            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
           
              <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                <span className="mr-3 font-semibold text-dark">Products</span>
                <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All products you have</span>
                
              </h3>
              
              <div className="relative flex flex-wrap items-center my-2">
              <a href='/dashboard/products/product/create' className='font-semibold text-dark text-base'>Add product</a>
                {/* <a href="javascript:void(0)" className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a> */}
              </div>
            </div>
        
            <div className="flex-auto block py-8 pt-6 px-9 ">
              <div className=" ">
                <table className="align-middle text-dark border-neutral-200 ">
                  <thead className="align-bottom">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-start min-w-[175px]">Name</th>
                      <th className="pb-3 text-end min-w-[100px]">Description</th>
                      <th className="pb-3 text-end min-w-[100px]">Price</th>
                      <th className="pb-3 text-end min-w-[100px]">Categoey</th>
                      <th className="pb-3 text-end min-w-[50px]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
              {products.map(product =>(
                

             
                      <tr className="border-b border-dashed last:border-b-0">
                   <td className="p-3 pl-0">
                                <div className="flex items-center">
                                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                            {/* <img src="" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt=""/> */}
                          </div>
                                  <div  className="flex flex-col justify-start">
                                 
                               
                                      <a
                                       
                                        href="#"
                                        className="mb-1 font-semibold  transition-colors duration-200 ease-in-out  text-[0.90rem] text-secondary-inverse hover:text-primary"
                                      >{product.name}
                                   
                                      </a>
                               
                                  </div>
                                </div>
                              </td>
    
                              <td className="p-3 pr-0 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">
                               {product.description}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">
                               {product.price}
                                </span>
                              </td>
    
                              <td className="p-3 pr-0 text-end">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                {product.category}
                                </span>
                              </td>
                
    
                     
                             
                             
                          
                         
                      
                          
    
                      
                                <td className="p-3 pr-0 text-end  text-[0.90rem] flex">
                             
                                
                                <a href={`/dashboard/products/${product._id}/update`}
                                    className=" text-danger rounded p-1 m-1 font-bold"
                                   
                                  >
                                    Edit
                              
    
                                  </a>
    
                              
                                  <button onClick={()=>{deleteProduct(product?._id)}}className="text-success  rounded p-1 m-1 font-bold" >
                                    Delete
                                 
                                  </button>
    
                                </td>
                           
     
                    </tr>
                    
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      </div>
      </Layout>
    
  )
}

export default Table
