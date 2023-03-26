export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Cart {
  id: number;
  quantity: number;
  productId: number;
  title: string;
  image: string;
}

export interface Order {
  id: number;
  quantity: number;
  productId: number;
}

export interface LoginData {
  email: string;
  password: string;
}
