import React,{useRef,useEffect} from 'react'
import './Projects.css'
import currencysnap from '../assets/Currencysnap.png';
import todosnap from '../assets/todosnap.png';
import weathersnap from '../assets/weathersnap.png';
import birthsnap from '../assets/birthsnap.png';
import notionacademy from '../assets/NotionHome.webp';
import Card from './Card';
import gsap from 'gsap';


function Projects({cursorref,setCursorText,setIsHovered}) {
  
  const data = [
    {
      id: 0,
      name: "Notion Academy",
      info: "Notion Academy—a MERN-powered platform where Admins manage, Instructors create courses, and Students learn through engaging courses, secure payments.",
      image: notionacademy,
      link1:"https://notion-academy.vercel.app",
      link2:"https://github.com/VishalSingh79/Notion-Academy.git"
    },
    {
      id: 1,
      name: "Weather App",
      info: "A Weather App with key features like geolocation integration for hyper-local updates, API handling for real-time weather data, and local/session storage management.",
      image: weathersnap,
      link1:"https://vishalsingh79.github.io/Weather-App",
      link2:"https://github.com/VishalSingh79/Weather-App.git"
    },
    {
      id: 2,
      name: "Todo App",
      info: `A to-do list app uses React for a dynamic experience, Redux for centralized state management, and local storage to save tasks . It's user-friendly and scalable.`,
      image: todosnap,
      link1: "https://to-do-three-iota.vercel.app",
      link2: "https://github.com/VishalSingh79/To-Do.git",
    },
    {
      id: 3,
      name: "Currency Convertor",
      info: "Developed a responsive web application using React.js for real-time currency conversion across 50+ global currencies. Leveraged external APIs to provide accurate exchange rates.",
      image: currencysnap,
      link1:"https://vishalsingh79.github.io/Currency-Convertor",
      link2:"https://github.com/VishalSingh79/Currency-Convertor.git",
    },
    {
      id: 4,
      name: "Birth Date Predictor",
      info: "Mystery Date is a React.js game blending intuition and algorithm. Guess if your birth date appears on a uniquely patterned cube in just 5 turns. Engage in a sophisticated, interactive experience designed for curious, analytical minds.",
      image:birthsnap,
      link1:"https://vishalsingh79.github.io/Birth-Date-Predictor",
      link2:"https://github.com/VishalSingh79/Birth-Date-Predictor.git",
    }
  ]


  return (
    <div className='projects' id='projectsec'>
      <div className='projects-details'>
        <h1 style={{margin:"2.5rem"}}>
            My <span style={{color:"#14f7ff"}}>Projects</span>
        </h1>
          <div className='allproject'>
            {
                data.map((eachdata)=>{
                      return (
                        <Card key={eachdata.id} {...eachdata} cursorref={cursorref} setCursorText={setCursorText} setIsHovered={setIsHovered}/>
                      )
                 })
             }
           </div>
      </div>
    </div>
  )
}

export default Projects
