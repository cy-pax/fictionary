import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
        <div className="item"> <div className="item">
            <hr /><br />
                <h1>Contact Us</h1>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <span></span>
                <span></span>
            </div>
            </div>
        </div>
        

       
        <div className="bottom">
            <div className="left">
                <span className='logo'>Fictionary</span>
                <span className='copyright'>Made by Suraj &hearts; Gauri </span>
            </div>
            <div className="right">
                <img src="/img/payments.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer