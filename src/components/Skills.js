import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faReact, faHtml5, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCodeBranch, faGem} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'
class Skills extends Component {

  render(){
    return(
      <div className="dispBlock">
        <div className="padded">
          <FontAwesomeIcon icon={faPython} />
          <span>{' '}</span>
          <span style={{color: "rgb(52, 108, 153)"}}>Python</span>
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faJava} />
          <span>{' '}</span>
          <span style={{color: "rgb(209, 0, 1)"}}>Java</span>
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faTerminal} />
          <span>{' '}</span>
          C/C++
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faReact} />
          <span>{' '}</span>
          <span style={{color: "rgb(97, 218, 251)"}}>JS/React</span>
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faHtml5} />
          <span>{' '}</span>
          <span style={{color: "rgb(238, 135, 42)"}}>HTML/CSS</span>
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faCodeBranch} />
          <span>{' '}</span>
          <span style={{color: "rgb(35, 134, 54)"}}>GitHub</span>
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faGem} />
          <span>{' '}</span>
          <span style={{color: "rgb(186, 0, 0)"}}>Ruby on Rails</span>
        </div>
        <div className="padded">
          <FontAwesomeIcon icon={faWindows} />
          <span>{' '}</span>
          <span style={{color: "rgb(0, 0, 0)"}}>SQL/DAX</span>
        </div>
      </div>
    )
  }

}

export default Skills;
