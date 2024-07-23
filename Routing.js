 import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from './Home'
import About from '../About'
import Exp from './Exp'
import Contact from './Contact'
 
 const Routing = () => {
   return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/exp' element={<Exp/>}/>
        <Route path='/cont' element={<Contact/>}/>
      </Routes>
   )
 }
 
 export default Routing
 