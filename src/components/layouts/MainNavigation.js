import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//styles
import theme from '../../styles/theme';

//components
import NavIndicator from '../styled/NavIndicator';


const MainNavigation = () => {
    const location = useLocation();

    const shouldShowIndicator = targetUrl => {
        if(targetUrl === "/about" || targetUrl === '/co-curricular') {
            if(location.pathname.startsWith(targetUrl)) {
                return <NavIndicator />
            }
        }

        if(location.pathname === targetUrl) {
            return <NavIndicator />
        }
    }
    return (
        <>
            <style type="text/css">
                {`
                .navbar {
                    background-color: ${theme.mainTartiary};
                }
                .nav-link {
                    font-weight: bolder;
                    font-family: Poppins;
                }

                .dropdown-menu {
                    border-color: ${theme.mainPrimary};
                    border-radius: 0;
                    background-color: ${theme.tartiaryOne}
                }
                .dropdown-item {
                    color: ${theme.mainTartiary}
                }
                .dropdown-item:hover {
                    background-color: ${theme.mainSecondary};
                    color: ${theme.mainPrimary};
                }
                .nav-link::after {
                    display: none;
                }

                .navbar-title {
                    color: ${theme.mainPrimary};
                    font-family: Poppins;
                    font-weight: bolder;
                }

                .navbar-motto {
                    color: ${theme.mainPrimary};
                    font-family: Poppins;
                    font-weight: bolder;
                    font-style: italic;
                }

                .nav-icon {
                    margin: .7em;
                    cursor: pointer;
                }

                .nav-dropdown-link {
                    color: ${theme.mainTartiary};
                    font-family: Poppins;
                    font-weight: bolder;
                }

                .nav-dropdown-link:hover {
                    text-decoration: none;
                    color: ${theme.mainPrimary};
                }

                #nav-brand-container {
                    width: 40%;
                }
                `}
            </style>

            <Navbar collapseOnSelect expand="lg" variant="dark" >
            <Navbar.Brand >
            <Link to="/about/history">
            <img
            src="/custom-logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Kagumo High School Logo"
            />  
            </Link>
            </Navbar.Brand>
            <div id="nav-brand-container">
                <h3 className="navbar-title">Kagumo High School</h3>
                <p className="navbar-motto">Struggle For Excellence</p> 
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"> 
                <Nav as="ul" className="mr-auto">
                <Nav.Item as="li">
                    <Nav.Link eventKey="1"><Link to="/" className="nav-link">Home</Link></Nav.Link>
                    {shouldShowIndicator("/")}
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item><Nav.Link eventKey="2"><Link to="/about/history" className="nav-dropdown-link">History</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Item eventKey="3"><Link to="/about/alumni-profile" className="nav-dropdown-link">Alumni Profile</Link></Nav.Item></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Nav.Item eventKey="4"><Link to="/about/join-us" className="nav-dropdown-link">Join Us</Link></Nav.Item></NavDropdown.Item>
                </NavDropdown>
                </Nav.Link>
                {shouldShowIndicator("/about")}
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link eventKey="5"><Link to="/contact" className="nav-link">Contact</Link></Nav.Link>
                {shouldShowIndicator("/contact")}
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Item><Nav.Link eventKey="9"><Link to="/enrollment" className="nav-link">Enrollment</Link></Nav.Link></Nav.Item>
                {shouldShowIndicator("/enrollment")}
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link>
                <NavDropdown title="Co-Curricular" id="basic-nav-dropdown">
                    <NavDropdown.Item><Nav.Link eventKey="6"><Link to="/co-curricular/drama-and-music" className="nav-dropdown-link">Drama And Music</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link eventKey="7"><Link to="/co-curricular/rugby" className="nav-dropdown-link">Rugby</Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link eventKey="8"><Link to="/co-curricular/football" className="nav-dropdown-link">Football</Link></Nav.Link></NavDropdown.Item>
                </NavDropdown>
                </Nav.Link>
                {shouldShowIndicator("/co-curricular")}
                </Nav.Item>
                </Nav> 
                <Nav as="ul">
                <Nav.Item as="li">
                <a rel="noreferrer" href="https://github.com/MbuthiaWaKihara" target="_blank"><i className="fa fa-facebook nav-icon"/></a>
                </Nav.Item>
                <Nav.Item as="li">
                <a rel="noreferrer" href="https://github.com/MbuthiaWaKihara" target="_blank"><i className="fa fa-twitter nav-icon"/></a>
                </Nav.Item>
                <Nav.Item as="li">
                <a rel="noreferrer" href="https://github.com/MbuthiaWaKihara" target="_blank"><i className="fa fa-instagram nav-icon"/></a>
                </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MainNavigation;
