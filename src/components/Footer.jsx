import React from 'react'
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-img'>
        <a href="https://www.facebook.com"><img src={Facebook} alt="" /></a>
        <a href="https://www.instagram.com"><img src={Instagram} alt="" /></a>
        <a href="https://www.twitter.com"><img className='twitter' src={Twitter} alt="" /></a>
      </div>
      <p>Copyright &copy; 2024 All rights researved</p>
    </div>
  )
}

export default Footer