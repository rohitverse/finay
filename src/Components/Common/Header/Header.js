import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../../../Assets/Images/logo.svg"
import UserIcon from "../../../Assets/Images/User.png"
import { NotificationIcon, ChatIcon } from "../../../Assets/Images/Svgicon"

const Header = () => {
    return (
        <>
            <div className='siteHeader'>
                <Navbar expand="lg" >
                    <Container className='d-flex justify-content-between'>
                        <Link className='brandlogo' to="/">
                            <img src={Logo} alt="Finay" />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <Link className='nav-link text-white' to="/">Home</Link>
                                <Link className='nav-link text-white' to="/about">About</Link>
                                <Link className='nav-link text-white' to="/services">Services</Link>
                                <Link className='nav-link text-white' to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav style={{ gap: "0.8rem" }}>
                                <NotificationIcon />
                                <ChatIcon />
                                <div style={{ gap: "0.8rem" }} className="d-flex">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <div className='text-white'>
                                        Hi , Aleesha
                                    </div>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header
