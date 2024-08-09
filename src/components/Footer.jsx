import React from 'react'
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-img'>
        <a href="https://www.facebook.com"><img src={Facebook} alt="facebook" /></a>
        <a href="https://www.instagram.com"><img src={Instagram} alt="instagram" /></a>
        <a href="https://www.twitter.com"><img className='twitter' src={Twitter} alt="twitter"/></a>
      </div>
      <p>Copyright &copy; 2024 All rights researved</p>
    </div>
  )
}

export default Footer