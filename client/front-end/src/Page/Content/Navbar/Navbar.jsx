import React from 'react'
import "./navbar.css"
import logo from "../../../assets/image/logo.svg"
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <div className="navbar_file1">
        <div className="logo">
            <img src={logo} alt="logo" />
            <h2 className='title'>TASK FILE</h2>
        </div>
        <div className="register_wrapper">
            <Link to='/SignIn' className='button_form Login'>Login</Link>
            <Link to='/SignUp' className='button_form Register'>Get Task File For Free</Link>
        </div>
    </div>
  )
}