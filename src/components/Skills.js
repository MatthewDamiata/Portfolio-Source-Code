import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'
class Skills extends Component {

  render(){
    return(
      <div class="dispBlock">
        <div class="padded">
          <FontAwesomeIcon icon={faPython} />
          <span>{' '}</span>
          <span style={{color: "rgb(52, 108, 153)"}}>Python</span>
        </div>
        <div class="padded">
          <FontAwesomeIcon icon={faJava} />
          <span>{' '}</span>
          <span style={{color: "rgb(209, 0, 1)"}}>Java</span>
        </div>
        <div class="padded">
          <FontAwesomeIcon icon={faTerminal} />
          <span>{' '}</span>
          C/C++
        </div>
        <div class="padded">
          <FontAwesomeIcon icon={faReact} />
          <span>{' '}</span>
          <span style={{color: "rgb(97, 218, 251)"}}>JS/React</span>
        </div>
        <div class="padded">
          <FontAwesomeIcon icon={faHtml5} />
          <span>{' '}</span>
          <span style={{color: "rgb(238, 135, 42)"}}>HTML/CSS</span>
        </div>
        <div class="padded">
          <FontAwesomeIcon icon={faCodeBranch} />
          <span>{' '}</span>
          <span style={{color: "rgb(35, 134, 54)"}}>GitHub</span>
        </div>
      </div>
    )
  }

}

export default Skills;
