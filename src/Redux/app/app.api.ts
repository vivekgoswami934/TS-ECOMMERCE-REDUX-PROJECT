import axios, { AxiosResponse } from "axios";
import { Product } from "../../utils/types";

export const getProductsAPI = async (getProductsParam?: { params: { category: string[] };}) => {

  try {
    let response: AxiosResponse<Product[]> = await axios.get("http://localhost:8080/products", getProductsParam
    );
    return response.data;
  } catch (e) {
    console.error("getProductsAPI error", e);
  }
  
};


export const updateProuctAPI = async ( id: number, payload: { title: string; price: number }) => {
  try {
    let response: AxiosResponse<Product> = await axios.patch(`http://localhost:8080/products/${id}`, payload
    );
    return response.data;
  } catch (e) {
    console.error("updateProductsAPI error", e);
  }
};
