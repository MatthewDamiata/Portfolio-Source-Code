import React, { Component } from 'react';
import Skills from './Skills';
import Typist from 'react-typist';
import Image from 'react-image-resizer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portrait from '../resources/portrait.png';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import './MainBody.css';
import 'react-typist/dist/Typist.css'

class MainBody extends Component {

  render () {
    return (
      <div>
        <h1>
          <Typist avgTypingDelay={80} cursor={{ hideWhenDone: false }}>
            Matthew Damiata
            <br/>
            Aspiring Software Engineer
          </Typist>
        </h1>
        <Image
          src = { portrait }
          height ={ 240 }
          width ={ 240 }
          alt = { 'Portrait' }
          style = {{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <a href="https://www.matthewdamiata.com/resume.pdf">
        <h2>
        <FontAwesomeIcon href="https://www.matthewdamiata.com/resume.pdf" icon={faIdCard} /> <br />
          Resume
        </h2>
        </a>
        <hr
          style={{
            color: 'black',
            backgroundColor: 'black',
            height: 1,
            width: '90%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <h2>
          My Skills
        </h2>
        <Skills />
        <hr
          style={{
            color: 'black',
            backgroundColor: 'black',
            height: 1,
            width: '75%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
        <h2>
          My Experience and Education
        </h2>
      </div>
    )
  }
}

export default MainBody;
