import React from 'react'
import "./Skills.css"
import react from '../assets/react-js.svg';
import redux from '../assets/Redux.svg';
import html from '../assets/HTML.png';
import javascript from '../assets/Javascript.svg';
import python from '../assets/python.svg';
import Tailwind from '../assets/Tailwind.png';
import css from '../assets/CSS.png';
import cc from '../assets/c++.svg';
import github from '../assets/Github.svg';
import nodejs from "../assets/NodeJs.svg";
import mongoDB from "../assets/MongoDB.svg";
import express from "../assets/Express.png";



function Skills() {
  return (
    <div className='skills-sec' id='skillsec'>
          <h1>My <span style={{color:"#14f7ff"}}>Skills</span></h1>
      <div className='skills-details'>
             <div className='eskills'>
              <p ><img src={html} className='eachimg'/></p>       
              <p>HTML</p>
             </div>
             <div className='eskills'>
              <p><img src={css} className='eachimg'/></p>
              <p>CSS</p>
             </div>
             <div className='eskills'>
              <p><img src={javascript} className='eachimg'/></p>
              <p>Javascript</p>
             </div>
             <div className='eskills'>
              <p><img src={react} className='eachimg'/></p>
              <p>React.js</p>
             </div>
             <div className='eskills'>
              <p><img src={Tailwind} className='eachimg'/></p>
              <p>Tailwind CSS</p>
             </div>
             <div className='eskills'>
              <p><img src={redux} className='eachimg'/></p>
              <p>Redux</p>
             </div>
             <div className='eskills'>
              <p><img src={python} className='eachimg'/></p>
              <p>Python</p>
             </div>
             <div className='eskills'>
              <p><img src={cc} className='eachimg'/></p>
              <p>C++</p>
             </div>
             <div className='eskills'>
              <p><img src={github} className='eachimg' style={{backgroundColor:"white", borderRadius:"55%"}}/></p>
              <p>Github</p>
             </div>
             <div className='eskills'>
              <p><img src={nodejs} className='eachimg' style={{backgroundColor:"white", borderRadius:"55%"}}/></p>
              <p>NodeJs</p>
             </div>
             <div className='eskills'>
              <p><img src={mongoDB} className='eachimg' style={{backgroundColor:"white", borderRadius:"55%"}}/></p>
              <p>MongoDB</p>
             </div>
             <div className='eskills'>
              <p><img src={express} className='eachimg' style={{backgroundColor:"white", borderRadius:"55%"}}/></p>
              <p>ExpressJs</p>
             </div>
      </div>
      
    </div>
  )
}

export default Skills
