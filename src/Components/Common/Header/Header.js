import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../../../Assets/Images/logo.svg"
import UserIcon from "../../../Assets/Images/User.png"
import { NotificationIcon, ChatIcon } from "../../../Assets/Images/Svgicon"
import "./Header.scss"

const Header = () => {
    return (
        <>
            <div className='sticky-top siteHeader'>
                <Navbar expand="lg" className='p-0'>
                    <Container className='d-flex justify-content-between'>
                        <Link className='brandlogo' to="/">
                            <img src={Logo} alt="Finay Logo" />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className='nav-link text-white' to="/">Home</Link>
                                <Link className='nav-link text-white' to="/profile">Profile</Link>
                                <Link className='nav-link text-white' to="/services">Services</Link>
                                <Link className='nav-link text-white' to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <div className='rightHeader d-flex align-items-center'>
                            <span className='ms-4'><ChatIcon /></span>
                            <span className='mx-4'><NotificationIcon /></span>
                            <div className="d-flex align-items-center">
                                <img src={UserIcon} alt="UserIcon" />
                                <div className='text-white ms-2'>
                                    Hi , Aleesha
                                </div>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header
