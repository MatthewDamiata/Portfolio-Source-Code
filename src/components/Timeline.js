import React, { Component } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import EcoIcon from '@material-ui/icons/Eco';
import ComputerIcon from '@material-ui/icons/Computer';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';

class Timeline extends Component {

  render () {
    return (
      <VerticalTimeline className="custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="dates"
          contentStyle={{ background: 'rgb(0,106,77)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0,106,77)' }}
          date="2021 - Present"
          iconStyle={{ background: 'rgb(0,106,77)', color: '#fff' }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">CBRE</h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
          <p>
            Digital and Technology Department, Summer 2021
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="dates"
          contentStyle={{ background: 'rgb(51, 204, 51)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(51, 204, 51)' }}
          date="2019 - Present"
          iconStyle={{ background: 'rgb(51, 204, 51)', color: '#fff' }}
          icon={<SupervisorAccountIcon />}
        >
          <h3 className="vertical-timeline-element-title">Binghamton Student Association</h3>
          <h4 className="vertical-timeline-element-subtitle">Software Team Lead</h4>
          <p>
            Project Management, Leadership, Communication
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="dates"
          contentStyle={{ background: 'rgb(255, 153, 0)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 153, 0)' }}
          date="2021"
          iconStyle={{ background: 'rgb(255, 153, 0)', color: '#fff' }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Yael Consulting</h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
          <p>
            Software Development, Script Writing, Ad Analysis
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={"dates"}
          contentStyle={{ background: 'rgb(51, 204, 51)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(51, 204, 51)' }}
          date="2019"
          iconStyle={{ background: 'rgb(51, 204, 51)', color: '#fff' }}
          icon={<ComputerIcon />}
        >
        <h3 className="vertical-timeline-element-title">Binghamton Student Association</h3>
        <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
          <p>
            Web Development, Design, Database Management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          dateClassName="dates"
          contentStyle={{ background: 'rgb(0, 67, 51)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(0, 67, 51)' }}
          date="2018 - 2022"
          iconStyle={{ background: 'rgb(0, 67, 51)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Binghamton University</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h4>
          <p>
            Algorithms, Data Structures, Theory, Team Collaboration
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="dates"
          contentStyle={{ background: 'rgb(88, 15, 139)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(88, 15, 139)' }}
          date="2017"
          iconStyle={{ background: 'rgb(88, 15, 139)', color: '#fff' }}
          icon={<EcoIcon />}
        >
        <h3 className="vertical-timeline-element-title">NYU Langone Medical Center</h3>
        <h4 className="vertical-timeline-element-subtitle">Research Intern</h4>
          <p>
            Research, Data Analysis, Presentations, <a id="onelink" href="https://doi.org/10.1016/j.neuron.2019.03.012">Published </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}

export default Timeline;
