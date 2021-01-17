import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
import theme from '../styles/theme';

const EnrollmentForm = () => {
  return (
    <section className="my-5">
      <MDBRow>
        <MDBCol className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2" style={{
                    color: theme.mainTartiary,
                }}>
                  Join us
                </h3>
              </div>
              <p className="dark-grey-text" style={{
                  color: theme.mainTartiary,
              }}>
                You're gonna love our community
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Parent or Gurdian's Full Name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Your Telephone Number"
                  iconClass="grey-text"
                  type="number"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your Full Name"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your Current School"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
        
              <div className="text-center">
                <MDBBtn color="light-blue" style={{
                    backgroundColor: theme.mainSecondary,
                    color: theme.mainPrimary,
                }}>Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default EnrollmentForm;