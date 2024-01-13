'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const index = () => {
   
    const [products , setProducts]=useState([])
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
    
    },[])


  return (
    <div className="">
   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
    <div className="flex flex-wrap mb-5  ">
      <div className="px-3 mb-6  mx-auto ">
        <div className=" flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className=" relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
          
            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                <span className="mr-3 font-semibold text-dark">Products</span>
                <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All products you have</span>
              </h3>
              <div className="relative flex flex-wrap items-center my-2">
            
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
                            <img src="" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt=""/>
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
                             
                                
                                    <button 
                                    className=" text-danger rounded p-1 m-1"
                                   
                                  >
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
    
                                  </button>
    
                              
                                  <button className="text-success  rounded p-1 m-1" >
                                  {/* <button className="text-success  rounded p-1 m-1" onClick={()=>console.log(appart?._id)}> */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                  </svg>
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
    
  )
}

export default index
