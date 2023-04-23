import React, { useState } from 'react'

import ShoppingCartOutlineIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import Cart from "../Cart/Cart"
import { useSelector } from 'react-redux'
const Navbar = () => {

    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)
    
  return (
    <div className="navbar">
        <div className="wrapper">
        <div className="left">
            <div className="item">
                <img className="logo" src="img/logo.png" alt="" />
                <div className="item">
                    <Link className="link" to="products/4">Fantasy</Link>
                </div>
                <div className="item">
                    <Link className="link" to="products/3">Romance</Link>
                </div>
                <div className="item">
                    <Link className="link" to="products/1">Thriller</Link>
                </div>
            </div>
        </div>
        <div className="center">
            <Link className="link" to="/">Fictionary</Link>
        </div>
        <div className="right">
        <div className="item">
                    <Link className="link" to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Cart</Link>
                </div>
                <div className="icons">
                    
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlineIcon/>
                        <span>{products.length}</span>
                    </div>
                </div>

        </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar