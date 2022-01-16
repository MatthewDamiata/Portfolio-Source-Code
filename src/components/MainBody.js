import React, { Component } from 'react';
import Skills from './Skills';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Paper } from '@material-ui/core'
import portrait from './assets/portrait.png'
import logo from './assets/logo.png'
import sa from './assets/sa.png'
import ga from './assets/ga.png'
import bonfire from './assets/bonfire.png'
import cbre from './assets/cbre.png'
import sts from './assets/sts.png'
import Carousel from 'react-material-ui-carousel'
import './MainBody.css';
import 'react-typist/dist/Typist.css'
import 'semantic-ui-css/semantic.min.css'

function Item(props)
{
    if(props.item.link === ""){
      return (
          <Paper style={{width: "310px", height: "160px", backgroundColor: "#ffffff"}}>
              <h2>{props.item.name}</h2>
              <p>{props.item.description}</p>
              <div className="row">
              <a style={{color: "Black"}} href={props.item.writeup}>
                  <Icon name='info' />
                  Info
              </a>
              </div>
          </Paper>
      )
  }
  else {
    return (
      <Paper style={{width: "310px", height: "160px", backgroundColor: "#ffffff"}}>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <div className="row">
          <a style={{color: "Black"}} href={props.item.writeup}>
              <Icon name='info' />
              Info
          </a>
          <a style={{color: "Green"}} href={props.item.link}>
          <Icon name='github' />
          GitHub
          </a>
          </div>
      </Paper>
    )
  }
}
var items = [
  {
    name: "Binghamton SA",
    description: "Timesheet System",
    image: sa,
    link: "https://github.com/MatthewDamiata/SA-Timesheet-System",
    writeup: "https://github.com/MatthewDamiata/Projects/wiki/Binghamton-SA---Timesheet-System"
  },
  {
    name: "CBRE",
    description: "Data Quality Reports",
    image: cbre,
    link: "",
    writeup: "https://github.com/MatthewDamiata/Projects/wiki/CBRE---Data-Quality-Reports"
  },
  {
    name: "Bonfire",
    description: "Social Discord Bot",
    image: bonfire,
    link: "https://github.com/MatthewDamiata/bonfire",
    writeup: "https://github.com/MatthewDamiata/Projects/wiki/Bonfire---Social-Discord-Bot"
  },
  {
    name: "Yael Consulting",
    description: "Google Ads Analysis",
    image: ga,
    link: "",
    writeup: "https://github.com/MatthewDamiata/Projects/wiki/Yael-Consulting---Google-Ads-Analysis"
  },
  {
    name: "Locked & Loaded",
    description: "Slay the Spire Mod",
    image: sts,
    link: "https://github.com/MatthewDamiata/Locked-and-Loaded",
    writeup: "https://github.com/MatthewDamiata/Projects/wiki/Locked-and-Loaded---Slay-the-Spire-Mod"
  }
]
class MainBody extends Component {
  render () {
    return (
      <div className="container">
        <div className="logoheader">
          <img src={logo} alt="logo" style={{position: "fixed", top: "0px", right: "0px", height: "50px", width: "50px", zIndex: "9999", padding: "10px 10px 0px 0px"}}></img>
        </div>
      <div className="row">
          <Card style={{margin: "50px", maxHeight: "550px"}}>
            <Image src={portrait}/>
            <Card.Content>
              <Card.Header>Matthew Damiata</Card.Header>
              <Card.Meta>
                <span className='date' style={{color: "green"}}>Binghamton University</span>
              </Card.Meta>
              <Card.Description>
                Software Engineer
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a style={{color: "Red"}} href="https://www.matthewdamiata.com/resume.pdf">
                <Icon name='file word' />
                Resume
              </a>
            </Card.Content>
            <Card.Content extra>
              <a style={{color: "Blue"}} href="https://www.linkedin.com/in/matthewdamiata/">
                <Icon name='linkedin' />
                LinkedIn
              </a>
            </Card.Content>
            <Card.Content extra>
              <a style={{color: "Green"}} href="https://github.com/MatthewDamiata">
                <Icon name='github square' />
                GitHub
              </a>
            </Card.Content>
            <Card.Content extra>
              <a style={{color: "black"}} href="mailto:mdamiat1@binghamton.edu">
                <Icon name='at' />
                Contact Me
              </a>
            </Card.Content>
          </Card>
          <div className="slider" style={{marginTop: "50px", backgroundColor: "#ffffff", borderRadius: "5px", maxHeight: "550px"}}>
        <Carousel fullHeightHover={false}>
            {
                items.map( (item, i) => <div><Image src={item.image} style={{width: "310px", height: "160px", marginTop: "80px"}}/><Item key={i} item={item} style={{backgroundColor: "#ffffff"}} /></div>)
            }
        </Carousel>
        </div>
      </div>
      <div>
        </div>
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
          Skills
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
          Experience
        </h2>
        </div>
    )
  }
}

export default MainBody;
