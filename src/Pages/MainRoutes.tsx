import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../Components/RequireAuth'
import AddProduct from './AddProduct'
import Cart from './Cart'
import EditProduct from './EditProduct'
import Homepage from './Homepage'
import Login from './Login'
import ProductPage from './ProductPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/addProduct' element={<RequireAuth><AddProduct /></RequireAuth>}/>
        <Route path='/product/:productId' element={<ProductPage />}/>
        <Route path='/product/:productId/edit' element={<EditProduct />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
  )
}

export default MainRoutes