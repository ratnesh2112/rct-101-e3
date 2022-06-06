import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Product from '../components/Products/Product/Product'
import Products from '../components/Products/Products'
import RequiredAuth from '../hoc/RequiredAuth'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Products />
        <div>
            <Routes>
                <Route path='/' element={
                    <RequiredAuth>
                        <Home />
                    </RequiredAuth>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/product' element={
                <RequiredAuth>
                    <Product />
                </RequiredAuth>
                } />
            </Routes>
        </div>
       
    </div>
  )
}

export default AllRoutes