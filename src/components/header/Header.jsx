import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './header.scss'

const Header = () => {

    return (
        <>
            <div className="container">
            <figure className='airplane'>
            <img className="airplane" src={require("../../../src/images/airplane_wing.jpeg")} alt="Airplane wing"></img> 
             
            </figure>
            </div>
        </>
    )
}

export default Header