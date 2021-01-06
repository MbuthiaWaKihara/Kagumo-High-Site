import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import theme from '../../styles/theme';

const Footer = () => {
  return (
    <>
    <style type="text/css">
        {`
        .page-footer {
            background-color: ${theme.mainPrimary};
        }

        .icon-list {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            margin-left: 4em;
        }
        
        .icon-container {
            margin-right: 2em;
            background-color: ${theme.tartiaryOne};
            border-radius: 50px;
            width: 2em;
            height: 2em;
            text-align: center;
            vertical-align: middle;
        }

        .fa {
            color: ${theme.mainPrimary};
            width: 1em;
            position: relative;
            top: 4px;
        }
        .footer-title {
            color: ${theme.tartiaryOne};
            font-weight: bolder;
            font-family: Poppins;
            font-size: 2em;
        }

        .footer-copyright {
            background-color: ${theme.mainTartiary};
        }

        .footer-content {
            color: ${theme.tartiaryOne};
        }

        .footer-links-container {
            display: flex;
            flex-direction: row;
        }

        .footer-link-group {
            margin: 15px;
        }
        `}
    </style>
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
          <img
            src="/custom-logo.png"
            width="80%"
            height="80%"
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
                    <a className="footer-link" href="/home">Home</a><br/>
                    <a className="footer-link" href="/home">History</a><br/>
                    <a className="footer-link" href="/home">Mission and vision</a><br/>
                    <a className="footer-link" href="/home">School Governance</a><br/>
                    <a className="footer-link" href="/home">Staff Directory</a><br/>
                </div>
                <div className="footer-link-group">
                    <a className="footer-link" href="/home">Alumni Profiles</a><br/>
                    <a className="footer-link" href="/home">Join Us</a><br/>
                    <a className="footer-link" href="/home">Contact</a><br/>
                    <a className="footer-link" href="/home">Enrollment</a><br/>
                    <a className="footer-link" href="/home">Drama and music</a><br/>
                </div>
                <div className="footer-link-group">
                    <a className="footer-link" href="/home">Rugby</a><br/>
                    <a className="footer-link" href="/home">Football</a><br/>
                    <a className="footer-link" href="/home">Volley ball</a><br/>
                    <a className="footer-link" href="/home">Table Tennis</a><br/>
                    <a className="footer-link" href="/home">Club listing</a><br/>
                </div>
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/MbuthiaWaKihara"> Evans Mbuthia </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </>
  );
}

export default Footer;
