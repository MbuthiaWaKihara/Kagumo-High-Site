import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">
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
                    <Link to="/" className="nav-link">Home</Link>
                </Nav.Item>
                <NavDropdown title="About" id="basic-nav-dropdown">
                    <Link to="/about/history" className="nav-dropdown-link"><NavDropdown.Item>History</NavDropdown.Item></Link>
                    <NavDropdown.Item><Link to="/about/mission-and-vision" className="nav-dropdown-link">Mission And Vision</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/about/school-governance" className="nav-dropdown-link">School Governance</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/about/staff-directory" className="nav-dropdown-link">Staff Directory</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/about/alumni-profile" className="nav-dropdown-link">Alumni Profile</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/about/join-us" className="nav-dropdown-link">Join Us</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Item as="li">
                <Link to="/contact" className="nav-link">Contact</Link>
                </Nav.Item>
                <Nav.Item as="li">
                <Link to="/enrollment" className="nav-link">Enrollment</Link>
                </Nav.Item>
                <NavDropdown title="Co-Curricular" id="basic-nav-dropdown">
                    <NavDropdown.Item><Link to="/co-curricular/drama-and-music" className="nav-dropdown-link">Drama And Music</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/co-curricular/rugby" className="nav-dropdown-link">Rugby</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/co-curricular/football" className="nav-dropdown-link">Football</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/co-curricular/volleyball" className="nav-dropdown-link">Volleyball</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/co-curricular/table-tennis" className="nav-dropdown-link">Table Tennis</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/co-curricular/clubs-listing" className="nav-dropdown-link">Clubs Listing</Link></NavDropdown.Item>
                </NavDropdown>
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
