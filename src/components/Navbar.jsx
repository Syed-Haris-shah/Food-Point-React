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
                    <li>Home</li>
                    <li>About</li>
                    <li>Food</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar