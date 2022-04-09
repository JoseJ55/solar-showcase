import React from 'react';
import "./style.css";

import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function FootContact() {
  return (
    <div id="footer-contact">
        <h3>Contact</h3>
        <p className='item'><a href='#'>fakeEmail@gmail.com</a></p>
        <p className='item'><a href='#'>Databases</a></p>
        <p className='item'><a href="#">More Info</a></p>

        <p id='footer-contact-follow'>Follow us on: </p>
        <div id='footer-contact-items'>
            <p id="footer-contact-items-twitter"><a href='#'><AiFillTwitterCircle id="twitter"/></a></p>
            <p id='footer-contact-items-insta'><a href='#'><AiOutlineInstagram id="insta" /></a></p>
            <p id='footer-contact-items-facebook'><a href="#"><BsFacebook id="facebook" /></a></p>
            <p id='footer-contact-items-tiktoc'><a href="#"><FaTiktok id="tiktok" /></a></p>
        </div>
    </div>
  )
}

export default FootContact