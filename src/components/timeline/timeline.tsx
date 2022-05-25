import * as React from 'react';
import "./timeline.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import VodafoneIcon from '../Icon/VodafoneIcon';
import  vodafone from "../../assets/vodafone.png";
import swansea from "../../assets/swansea.svg";
import deeplearning from "../../assets/deeplearningai.svg";



export default function CustomizedTimeline() {
  return (
      <>
   
    <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{  background: 'rgba(30,31,34,0.9)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
      date="March 2022-Present"
      iconStyle={{ background: 'rgb(30,31,34)', color: '#FFFF00' }}
      icon={<img className={"nestedicons"} style={{width: "105%", marginTop:"-1px", marginLeft: "-1.3px"}}src={vodafone}/>}
    >
      <h3 className="vertical-timeline-element-title">Graduate Software Engineer: Innovations and Systems Architecture</h3>
      <h4 className="vertical-timeline-element-subtitle">Vodafone Group</h4>
      <p>
      Design and develop a real-time Mixed Reality application for use in agile stand-up meetings to reduce the need for the presenter to constantly return to their machine in order to update tickets.
        Languages and systems used include: Unity 3D, XRCore, C#, .NET.
        <br/><br/>
        Develop and maintain a web application aimed at displaying and managing Vodafone Group's internal events using the internal component library. Languages and frameworks used include:
        React, Typescript and AWS.

       
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{  background: 'rgba(30,31,34,0.9)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
      date="September 2021 - March 2022"
      iconStyle={{  background: 'rgb(30,31,34)', color: '#FFFF00' }}
      icon={<img className={"nestedicons"} style={{width: "105%", marginTop:"-1px", marginLeft: "-1.3px"}}src={vodafone}/>}
    >
      <h3 className="vertical-timeline-element-title">Graduate Software Engineer: Front End Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Vodafone Group</h4>
      <p>
      Develop and maintain a web application which has the functionality of providing numerous different frameworks and project templates which comply with internal standards and conventions.
      <br/><br/>Customise, maintain and deploy an open-source containerised forum application for use within the Vodafone Group development community.
      <br/><br/> Function as acting-scrum master whilst team members are on annual leave by running daily standups, sprint reviews and sprint planning.
      <br/><br/> Create, host and edit the internal team podcast in order to enable team-members to become more aquainted with one another whilst working from home during the corona-virus pandemic.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{  background: 'rgba(30,31,34,0.9)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
      date="September 2018 - July 2021"
      iconStyle={{ background: 'rgb(30,31,34)', color: '#FFFF00' }}
      icon={<img className={"nestediconSwans"} style={{width: "60%", marginTop:"12%", marginLeft: "22%"}}src={swansea}/>}
    >
      <h3 className="vertical-timeline-element-title"> First Class Honours, BSc. Computer Science </h3>
      <h4 className="vertical-timeline-element-subtitle">Swansea University</h4>
      <p>
      First year: Programming 1, Programming 2, Professional Issues 1: Computers and Society, Professional Issues 2: Software Development, Concepts of Computer Science 1, Concepts of Computer Science 2, Modelling Computing Systems 1, Modelling Computing Systems 2
<br/><br/>
Second year: Introduction to Human-Computer Interaction, Declarative Programming, Concurrency, Software Engineering, Database Systems, Computer Graphics, Algorithms, Automata and Formal Language Theory
<br/><br/>
Third Year: Cryptography and I.T. Security, Artificial Intelligence, Big Data and Machine Learning, Advanced Object Orientated Programming, Optimisation, Introduction to Video Games Programming with dissertation based upon Neuroevolution Of Augmented Topologies and the outcomes of domesticating Self-Learning Robots.
      </p>
    </VerticalTimelineElement>
    
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{  background: 'rgba(30,31,34,0.9)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
      date="June-September 2020"
      iconStyle={{ background: 'rgb(30,31,34)', color: '#FFFF00' }}
      icon={<img className={"nestedicon"} style={{width: "110%", marginTop:"-3.95%", marginLeft:"-4.55%"}}src={deeplearning}/>}
   
    >
      <h3 className="vertical-timeline-element-title">Deep Learning Specialization</h3>
      <h4 className="vertical-timeline-element-subtitle">deeplearning.ai</h4>
      <p>
      Build and train deep neural networks, identify key architecture parameters, implement vectorized neural networks and deep learning to applications
<br/><br/>
Train test sets, analyze variance for DL applications, use standard techniques and optimization algorithms, and build neural networks in TensorFlow
<br/><br/>
Build a CNN and apply it to detection and recognition tasks, use neural style transfer to generate art, and apply algorithms to image and video data
<br/><br/>
Build and train RNNs, work with NLP and Word Embeddings, and use HuggingFace tokenizers and transformer models to perform NER and Question Answering </p>
    </VerticalTimelineElement>
    
    <VerticalTimelineElement
       iconStyle={{ background: 'rgb(30,31,34)', color: '#FFFF00' }}
  
    />
  </VerticalTimeline>
  </>
  );
}