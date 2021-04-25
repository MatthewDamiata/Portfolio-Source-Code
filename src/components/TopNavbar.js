import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faAt, faFileContract } from '@fortawesome/free-solid-svg-icons';
import logo from '../resources/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNavbar.css';

class TopNavbar extends Component {
  render(){
          return(
              <div>
                <div className="row">
                    <div className="col-md-12" style={{paddingRight: 0, paddingLeft: 0}}>
                      <Navbar bg="light" variant="light" expand="md" sticky="top">
                          <a href="/"><img src={logo} alt={'logo'} style={{width: 50, height: 40, paddingRight: 10}}/></a>
                          <Navbar.Brand>My Portfolio</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="mr-auto">
                                <Nav.Link style = {{ color: "#FD3A4A"}} href="https://matthewdamiata.com/resume.pdf">
                                  <h5>
                                  <FontAwesomeIcon icon={faFileContract} />
                                  <span> </span>
                                  Resume
                                  </h5>
                                </Nav.Link>
                                <Nav.Link style = {{ color: "#238636" }} href="https://github.com/matthewdamiata">
                                  <h5>
                                  <FontAwesomeIcon icon={faGithubSquare} />
                                  <span> </span>
                                  GitHub
                                  </h5>
                                </Nav.Link>
                                <Nav.Link style = {{ color: "#0A66C2" }} href="https://www.linkedin.com/in/matthewdamiata/">
                                  <h5>
                                  <FontAwesomeIcon icon={faLinkedin} />
                                  <span> </span>
                                  LinkedIn
                                  </h5>
                                </Nav.Link>
                                <Nav.Link style = {{ color: "black" }} href="mailto:mdamiat1@binghamton.edu">
                                  <h5>
                                  <FontAwesomeIcon icon={faAt}/>
                                  <span> </span>
                                  Contact Me
                                  </h5>
                                </Nav.Link>
                              </Nav>
                          </Navbar.Collapse>
                       </Navbar>
                      <br/>
                    </div>
                  </div>
              </div>
          )
      }
}

export default TopNavbar;
