import React from 'react';

//react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//styles
import theme from '../../styles/theme';


const MainNavigation = () => {
    return (
        <>
            <style type="text/css">
                {`
                .navbar {
                    background-color: ${theme.mainTartiary};
                }
                .nav-link {
                    font-weight: bolder;
                    font-size: 1.2em;
                    font-family: Poppins;
                }
                .dropdown-menu {
                    border-color: ${theme.mainPrimary};
                    border-radius: 0;
                    background-color: ${theme.tartiaryOne}
                }
                .dropdown-item {
                    color: ${theme.mainPrimary}
                }
                .dropdown-item:hover {
                    background-color: ${theme.mainTartiary};
                    color: ${theme.mainPrimary};
                }
                .nav-link::after {
                    display: none;
                }

                .navbar-title {
                    color: ${theme.mainSecondary};
                    font-family: Poppins;
                    font-weight: bolder;
                }

                .nav-icon {
                    margin: .7em;
                    cursor: pointer;
                }
                `}
            </style>

            <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand >
            <img
            src="/custom-logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Kagumo High School Logo"
            />  
            </Navbar.Brand>
            <h2 className="navbar-title">Kagumo High School</h2>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"> 
                <Nav as="ul" className="mr-auto">
                </Nav> 
                <Nav as="ul">
                <Nav.Item as="li">
                <Nav.Link>
                    Home
                </Nav.Link>
                </Nav.Item>
                <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item>History</NavDropdown.Item>
                    <NavDropdown.Item>Mission And Vision</NavDropdown.Item>
                    <NavDropdown.Item>School Governance</NavDropdown.Item>
                    <NavDropdown.Item>Staff Directory</NavDropdown.Item>
                    <NavDropdown.Item>Alumni Profiles</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Join Us</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item as="li">
                <Nav.Link>
                    Contact
                </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Nav.Link>
                    Enrollment
                </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Co-Curricular" id="basic-nav-dropdown">
                    <NavDropdown.Item>Drama And Music</NavDropdown.Item>
                    <NavDropdown.Item>Rugby</NavDropdown.Item>
                    <NavDropdown.Item>Football</NavDropdown.Item>
                    <NavDropdown.Item>Volley Ball</NavDropdown.Item>
                    <NavDropdown.Item>Table Tennis</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Clubs Listing</NavDropdown.Item>
                </NavDropdown>
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
