import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Notfound from './pages/Notfound'

export default function App() {
  return (
    <div>
      <>
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/Signin' element={<Signin/>}></Route>
           <Route path='*' element={<Notfound/>}></Route>
        </Routes>
        </BrowserRouter>
            
      </>
    </div>
  )
}
