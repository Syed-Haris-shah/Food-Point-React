import React from 'react'

function SearchMenu() {
  return (
    <>
    <div className='search-menu'>
        <input className='search-input' type="text" placeholder='Search for Food' />
        <button className='btn'>Search</button>
    </div>
    </>
  )
}

export default SearchMenu
