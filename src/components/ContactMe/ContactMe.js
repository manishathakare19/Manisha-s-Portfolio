import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./ContactMe.css"; // Importing the CSS we just created

function ContactMe() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
          {/* LEFT COLUMN: Terminal Visual */}
          <Col md={6} style={{ paddingTop: "20px", paddingBottom: "50px" }}>
            <div className="terminal-window">
              <p className="terminal-text">Welcome to Manisha's Terminal 24.04.2 LTS (Linux aarch64)</p>
              <p className="terminal-text">Type anything below ...</p>
              <p className="promptline">
                <span className="prompt">$</span> <span className="cursor">_</span>
              </p>
            </div>
            <p className="tagline"># DevOps is all about communication. Drop me a message!</p>
          </Col>

          {/* RIGHT COLUMN: Contact Form */}
          <Col md={6} style={{ paddingTop: "20px", paddingBottom: "50px" }}>
            <div className="contact-form-section">
              <h2 className="form-header">manisha@portfolio:~$</h2>

              {/* Formspree Form */}
              <form 
                action="YOUR_FORMSPREE_ENDPOINT_HERE" 
                method="POST" 
                className="terminal-form"
              >
                
                <div className="form-group">
                  <label htmlFor="name"><span className="accent">$</span> Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="terminal-input"
                    placeholder="Type your name..." 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><span className="accent">$</span> Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="terminal-input"
                    placeholder="Type your email..." 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message"><span className="accent">$</span> Message:</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="terminal-input"
                    placeholder="Type your message..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="send-btn">
                  <span className="accent">$</span> Send
                </button>
              </form>

              <div className="contact-info">
                <p>Email:</p>
                <p className="info-value">thakaremaheshmanisha@gmail.com</p>
                
                <br />
                <p>Contact No:</p>
                <p className="info-value">+91 7038918993</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactMe;