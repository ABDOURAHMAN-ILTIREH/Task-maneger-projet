import React from 'react'
import {Route,Routes,Navigate} from "react-router-dom"
import Home from '../components/container/Home/Home'
import SignIn from '../components/container/SignIn/SignIn'
import SignUp from '../components/container/SignUp/SignUp'


const Layout = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home' />} /> 
        <Route path="/home" element={< Home/>} /> 
        <Route path="/SignIn" element={< SignIn/>} /> 
        <Route path="/SignUp" element={< SignUp/>} /> 
    </Routes>
  )
}

export default Layout