import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import './Header.css'


const Header = () => {

    return (
        <div>
            <Navbar navbar navbar-dark style={{ backgroundColor: "#000" }} >
                <NavbarBrand href="/" className="mr-auto Brand" >
                    <p>IELTS</p>
                </NavbarBrand>
                <Nav className="mr-md-5" style={{ display: 'flex' }}>
                    <NavItem>
                        <NavLink className="NavLink" exact to="/Home">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="NavLink" exact to="/Vocab">Vocabs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="NavLink" exact to="/Ex">Example 2</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )

}

export default Header;