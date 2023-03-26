import axios, { AxiosResponse } from "axios";
import { Product } from "../../utils/types";


let URL = "https://good-puce-caterpillar-boot.cyclic.app"

export const getProductsAPI = async (getProductsParam?: { params: { category: string[] };}) => {

  try {
    let response: AxiosResponse<Product[]> = await axios.get(`${URL}/products`, getProductsParam
    );
    return response.data;
  } catch (e) {
    console.error("getProductsAPI error", e);
  }
  
};


export const updateProuctAPI = async ( id: number, payload: { title: string; price: number }) => {
  try {
    let response: AxiosResponse<Product> = await axios.patch(`${URL}/products/${id}`, payload
    );
    return response.data;
  } catch (e) {
    console.error("updateProductsAPI error", e);
  }
};
