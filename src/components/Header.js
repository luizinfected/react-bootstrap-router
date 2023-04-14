import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center flex-wrap'>
        <p>LuizDev</p>
        <ul className='d-flex'>
            <Link to="./" className='btn m-2 p-2 bg-primary text-white'>Home</Link>
            <Link to="empresa" className='btn m-2 p-2 bg-primary text-white'>Empresa</Link>
            <Link to="contato" className='btn m-2 p-2 bg-primary text-white'>Contato</Link>
        </ul>
    </header>
  )
}

export default Header