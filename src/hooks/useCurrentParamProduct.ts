import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Redux/app/app.action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { Product } from "../utils/types";

const useCurrentParamProduct = () => {
    const {productId} = useParams();
    
    const products = useAppSelector((store) => store.AppReducer.data);
    const dispatch = useAppDispatch()
    const [currentProduct, setCurrentProduct] = useState<Product>()

    useEffect(() => {
        if(products.length === 0){
          dispatch(getProducts())
        }
      },[dispatch, products.length])
    
      useEffect(() => {
        if(productId){
          const pdt = products.find(item => item.id === Number(productId));
          setCurrentProduct(pdt)
        }
      }, [productId, products])
    
      return {currentProduct, id: productId}
}

export {useCurrentParamProduct}