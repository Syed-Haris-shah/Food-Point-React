import React from 'react'
import noodleCup from "../assets/noodleCup.png"
function Navbar() {
    return (
        <>
            <div className='nav-bar'>
                <div className='logo'>
                    <img src={noodleCup} alt="" />
                    wowFood
                </div>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Food">Food</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar