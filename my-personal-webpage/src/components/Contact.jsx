import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { createClient } from '@supabase/supabase-js';
import '../App.css';

// Supabase configuration
const supabaseUrl = 'https://fpeemcgjqsneawwysxdh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZWVtY2dqcXNuZWF3d3lzeGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwMDUyODMsImV4cCI6MjAzNDU4MTI4M30.rlP0_weXsKYJyK8qXg-ywXF0pQMFF1rw-ZqptYIzg3s';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;
    if (!firstName || !lastName || !email || !phone || !message) {
      setStatus({ success: false, message: 'Please fill in all fields.' });
      return false;
    }
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setButtonText('Sending...');
    const { data, error } = await supabase
      .from('contacts')
      .insert([formDetails]);

    if (error) {
      setButtonText('Send');
      setStatus({ success: false, message: 'Failed to send message. Please try again later.' });
    } else {
      setButtonText('Send');
      setStatus({ success: true, message: 'Message sent successfully!' });
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col>
            <h2>Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  />
                  <button type="submit">{buttonText}</button>
                </Col>
              </Row>
            </form>
            {status.message && (
              <div className={`alert ${status.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                {status.message}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
