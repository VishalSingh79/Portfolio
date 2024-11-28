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
import SkillCard from './SkillCard';


function Skills() {

  const skillsset = [
    {
      id: 1,
      name: "HTML",
      image: html,
    },
    {
      id: 2,
      name: "CSS",
      image: css,
    },
    {
      id: 3,
      name: "Javascript",
      image: javascript,
    },
    {
      id: 4,
      name: "React.js",
      image: react,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      image: Tailwind,
    },
    {
      id: 6,
      name: "Redux",
      image: redux,
    },
    {
      id: 7,
      name: "Python",
      image: python,
    },
    {
      id: 8,
      name: "C++",
      image: cc,
    },
    {
      id: 9,
      name: "Github",
      image: github,
    },
    {
      id: 10,
      name: "Node.js",
      image: nodejs,
    },
    {
      id: 11,
      name: "MongoDB",
      image: mongoDB,
    },
    {
      id: 12,
      name: "Express.js",
      image: express,
    },
  ]



  return (
    <div className='skills-sec' id='skillsec'>
          <h1>My <span style={{color:"#14f7ff"}}>Skills</span></h1>
      <div className='skills-details'>
         {
          skillsset.map((skill) => (
           <SkillCard key={skill.id} text={skill.name} img={skill.image} />
          ))
         }
      </div>
      
    </div>
  )
}

export default Skills
