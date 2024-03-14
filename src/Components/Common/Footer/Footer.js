import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { Discord, Instagram, LinkedIn, Telegram, Twitter } from '../../../Assets/Images/Svgicon'
import Logo from "../../../Assets/Images/logo.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='siteFooter'>
                <Container>
                    <Row>
                        <Col>
                            <Link className='brandlogo d-flex' to="/">
                                <img src={Logo} alt="Finay" />
                                <h4 className='ms-2 text-white'>Finay</h4>
                            </Link>
                            <div>The only marketplace selling unreleased music, music videos, stems, remixes, royalty rights and more as downloadable files packed into NFTs</div>
                        </Col>
                        <Col className='d-flex justify-content-around '>
                            <Navbar>
                                <Nav className="">
                                    <Link className='nav-link text-white' to="/">Home</Link>
                                    <Link className='nav-link text-white' to="/about">About</Link>
                                    <Link className='nav-link text-white' to="/services">Services</Link>
                                    <Link className='nav-link text-white' to="/contact">Contact</Link>
                                    <Link className='nav-link text-white' to="/privacy">Privacy</Link>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <hr />
                    <Row>
                        <Col>
                            &copy;Finay 2024. All Rights are Reserved
                        </Col>
                        <Col className='d-flex justify-content-around '>
                            <LinkedIn />
                            <Twitter />
                            <Instagram />
                            <Discord />
                            <Telegram />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer