import React from 'react'
import  Button from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Link to="/about">About Us</Link>
            <Link to="/register">Register</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}
export default Header