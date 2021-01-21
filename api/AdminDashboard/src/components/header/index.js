import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
/**
 * @author
 * @function Header
 **/

const Header = () => {
    return (
        < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Link to="/" className="navbar-brand">Admin DashBoard</Link>
                {/* <Navbar.Brand href="#home" > Admin DashBoard </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" />
                <Nav className="mr-auto" > {} </Nav>
                <Nav >
                    {/*<Nav.Link href="#deets" > Signin </Nav.Link>*/}

                    <li className='nav-item'>
                        {!localStorage.getItem("logged") ? (
                            <NavLink to='/signin' className='nav-link'>Signin</NavLink>
                        ) : <div></div>}
                    </li>

                    <li className='nav-item'>
                        {localStorage.getItem("logged") ? (
                            <NavLink to='/changePassword' className='nav-link'>Change Password</NavLink>
                        ) : <div></div>}
                    </li>
                    <li className='nav-item'>
                        {localStorage.getItem("logged") ? (
                            <NavLink to='/listCV' className='nav-link'>List CVs</NavLink>
                        ) : <div></div>}
                    </li>
                    <li className='nav-item'>
                        {localStorage.getItem("logged") ? (
                            <NavLink to='/listAllCVs' className='nav-link'>List All CVs</NavLink>
                        ) : <div></div>}
                    </li>
                </Nav >
            </Container>
        </Navbar >
    )

}

export default Header;