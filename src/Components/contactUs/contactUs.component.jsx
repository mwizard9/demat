import React from "react";
import facebook from "../../Assets/images/facebook.png";
import insta from "../../Assets/images/instagram.png";
import gmail from "../../Assets/images/gmail.png";
import linkedin from "../../Assets/images/linkedin.png";
import phone from "../../Assets/images/phone-call.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contactus.css";

export const ContactUs = () => {
  return (
    <>
    <h3 className="pagehead">Contact Us</h3>
      <div className="contactUs d-flex align-items-center justify-content-center">
        
        <div className="contactusLeft p-3">
          <Form>
            <div className="row">
              <Form.Group className="mb-1 col-6" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-1 col-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-1 col-6" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your address" />
              </Form.Group>

              <Form.Group
                className="mb-1 col-6"
                controlId="formBasicPhoneNumber"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
              {/* <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
              <div className="d-flex justify-content-center">
                <Form.Group
                  className="mb-1 col-6"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="col-2" variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </Form>
          <div className="another-contact d-flex flex-column"> 
          <h4 style={{color:'white'}}>You can also contact us through</h4>
            <div className="d-flex justify-content-around contact-icon mb-2">
              <img src={facebook} alt="fb" />
              <img src={insta} alt="fb" />
              <img src={phone} alt="fb" />
            </div>
            <div className="d-flex justify-content-around contact-icon">
              <img src={gmail} alt="fb" />
              <img src={linkedin} alt="fb" />
              <img src={facebook} alt="fb" />
            </div>
          </div>
        </div>
        <div className="contactusRight"></div>
      </div>
    </>
  );
};
