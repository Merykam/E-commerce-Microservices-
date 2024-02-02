'use client';
import {useProductQuery} from "../../../redux/service/product/productApi";
import { useEffect, useState } from 'react';

export const serviceProduct = () => {

    const [products,setProduct] = useState([]);
    const { isLoading, error, data, isSuccess, isError } = useProductQuery();


    useEffect(() => {
        // (async () => {
          if (isSuccess) {
            setProduct(data.data)
          }
        // })();
      }, [isSuccess]);
      

    return{products}
}
