import React from 'react'
import logo from '../../assets/images/Logo.svg'
const Navbar = () => {
  return (
    <header>
        <nav>
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <ul>
                <li>
                    <a href="#">
                        Order
                    </a>
                </li>
                <li>
                    <a href="#">
                        Order Review
                    </a>
                </li>
                <li>
                    <a href="#">
                        Manage Inventory
                    </a>
                </li>
                <li>
                    <a href="#">
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar