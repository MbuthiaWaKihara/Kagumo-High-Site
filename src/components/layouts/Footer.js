import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

const Footer = () => {
  return (
    <>
    <style type="text/css">
        {`
        .page-footer {
            background-color: ${theme.tartiaryOne};
        }

        .icon-list {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 60px;
        }
        
        .icon-container {
            margin-right: .5em;
            background-color: ${theme.mainTartiary};
            border-radius: 50px;
            width: 2em;
            height: 2em;
            text-align: center;
            vertical-align: middle;
        }

        .icon-container:hover {
          background-color: ${theme.mainSecondary}
        }

        .fa {
            color: ${theme.mainPrimary};
            width: 1em;
            position: relative;
            top: 4px;
        }
        .footer-title {
            color: ${theme.mainTartiary};
            font-weight: bolder;
            font-size: 2em;
        }

        .footer-copyright {
            background-color: ${theme.mainTartiary};
        }

        .footer-content {
            color: ${theme.mainTartiary};
            font-weight: bolder;
            font-size: 1em;
        }

        .footer-links-container {
            display: flex;
            flex-direction: row;
        }

        .footer-link-group {
            margin: 15px;
        }

        .footer-link {
          font-size: 1em;
          text-decoration: underline;
          color: ${theme.mainTartiary};
        }

        .footer-link:visited {
          color: ${theme.mainTartiary};
        }

        .footer-heart {
          color: red;
          position: relative;
          top: -1px;
        }

        .footer-label-text {
          color: ${theme.mainPrimary};
        }

        #footer-motto {
          color: ${theme.mainTartiary};
          font-style: italic;
          font-weight: bolder;
          font-size: 1em;
        }
        .footer-wrapper {
        
        }
        `}
    </style>
    <MDBFooter className="font-small pt-4 mt-4 footer-wrapper">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
          <h3 className="footer-title">Kagumo High School</h3>
          <p id="footer-motto">Struggle For Excellence</p>
          <img
            src="/custom-logo.png"
            width="200"
            height="200"
            className=""
            alt="Kagumo High School Logo"
            />  
            <div className="icon-list">
                <div className="icon-container"><a rel="noreferrer" href="https://github.com/MbuthiaWaKihara" target="_blank"><i className="fa fa-facebook"/></a></div>
                <div className="icon-container"><a rel="noreferrer" href="https://github.com/MbuthiaWaKihara" target="_blank"><i className="fa fa-twitter"/></a></div>
                <div className="icon-container"><a rel="noreferrer" href="https://github.com/MbuthiaWaKihara" target="_blank"><i className="fa fa-instagram"/></a></div>
            </div>
          </MDBCol>
          <MDBCol md="4">
              <h3 className="footer-title">Contact Us</h3>
              <p className="footer-content">P.O Box 69840 Kiganjo</p>
              <p className="footer-content">Call +254700570450</p>
              <p className="footer-content">mail us: kagumohigh@gmail.com</p>
          </MDBCol>
          <MDBCol md="4">
              <h3 className="footer-title">Quick Links</h3>
              <div className="footer-links-container">
                <div className="footer-link-group">
                    <Link to="/" className="footer-link">Home</Link><br/>
                    <Link to="/about/history" className="footer-link">History</Link><br/>
                    <Link to="/about/mission-and-vision" className="footer-link">Mission And Vision</Link><br/>
                    <Link to="/about/school-governance" className="footer-link">School Governance</Link><br/>
                    <Link to="/about/staff-directory" className="footer-link">Staff Directory</Link><br/>
                </div>
                <div className="footer-link-group">
                    <Link to="/about/alumni-profile" className="footer-link">Alumni Profile</Link><br/>
                    <Link to="/about/join-us" className="footer-link">Join Us</Link><br/>
                    <Link to="/contact" className="footer-link">Contact</Link><br/>
                    <Link to="/enrollment" className="footer-link">Enrollment</Link><br/>
                    <Link to="/co-curricular/drama-and-music" className="footer-link">Drama And Music</Link><br/>
                </div>
                {/* <div className="footer-link-group">
                    <Link to="/co-curricular/rugby" className="footer-link">Rugby</Link><br/>
                    <Link to="/co-curricular/football" className="footer-link">Football</Link><br/>
                    <Link to="/co-curricular/volleyball" className="footer-link">Volleyball</Link><br/>
                    <Link to="/co-curricular/table-tennis" className="footer-link">Table Tennis</Link><br/>
                    <Link to="/co-curricular/clubs-listing" className="footer-link">Club Listing</Link><br/>
                </div> */}
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <p className="footer-label-text">&copy; {new Date().getFullYear()} Copyright. Made with <i className="fa fa-heart footer-heart"/> by <a href="https://github.com/MbuthiaWaKihara"> Evanson Mbuthia Kihara</a></p>
        </MDBContainer>
      </div>
    </MDBFooter>
    </>
  );
}

export default Footer;
