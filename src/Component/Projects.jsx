import React,{useRef,useEffect} from 'react'
import './Projects.css'
import currencysnap from '../assets/Currencysnap.png';
import todosnap from '../assets/todosnap.png';
import weathersnap from '../assets/weathersnap.png';
import birthsnap from '../assets/birthsnap.png';
import notionacademy from '../assets/NotionHome.webp';
import Card from './Card';
import taskify from '../assets/taskify.png';
import vartalap from '../assets/vartalap.jpg';
import task from "../assets/task.png";

function Projects({cursorref,setCursorText,setIsHovered}) {
  
  const data = [
    {
      id:0,
      name:"Vartalap App",
      info:"Vartalap App is a real-time mobile messaging application enabling secure one-on-one chats, instant notifications, and streamlined user interactions.",
      image:vartalap,
      link1:"https://drive.google.com/drive/folders/1Ed8G76Ey25uoJ1WPzJAh9Q-3JmKo72aM?usp=sharing",
      link2:"https://github.com/VishalSingh79/Vartalap-App",
      btn1:"Download App",
      btn2:"GitHub Link"
    },
     {
      id:1,
      name:"Taskify App",
      info:"Taskify is a mobile to-do app that helps users manage daily tasks with smart scheduling, reminders, offline support, and an auto-cleaning recycle bin.",
      image:taskify,
      link1:"https://drive.google.com/drive/folders/1EaQHVh149zhB1YFQe2KYxyCZOoPpKwhw?usp=sharing",
      link2:"https://github.com/VishalSingh79/Taskify",
      btn1:"Download App",
      btn2:"GitHub Link"
    },
    {
      id: 2,
      name: "Notion Academy",
      info: "Notion Academy—a MERN-powered platform where Admins manage, Instructors create courses, and Students learn through engaging courses, secure payments.",
      image: notionacademy,
      link1:"https://notion-academy.vercel.app",
      link2:"https://github.com/VishalSingh79/Notion-Academy.git",
      btn1:"Live Link",
      btn2:"GitHub Link"
    },
    {
      id: 3,
      name: "Task Management",
      info: "A full-stack task management app to create, organize, and track tasks by due date, priority, and status with list and calendar views. Easily update or mark tasks complete to stay on track.",
      image: task,
      link1:"https://task-management-app-ebon-nine.vercel.app/",
      link2:"https://github.com/VishalSingh79/Task-Management-App-",
      btn1:"Live Link",
      btn2:"GitHub Link"
    },
    {
      id: 4,
      name: "Weather App",
      info: "A Weather App with key features like geolocation integration for hyper-local updates, API handling for real-time weather data, and local/session storage management.",
      image: weathersnap,
      link1:"https://weather-app-updated-rho.vercel.app",
      link2:"https://github.com/VishalSingh79/Weather-App-Updated",
      btn1:"Live Link",
      btn2:"GitHub Link"
    },
    {
      id: 5,
      name: "Todo App",
      info: `A to-do list app uses React for a dynamic experience, Redux for centralized state management, and local storage to save tasks . It's user-friendly and scalable.`,
      image: todosnap,
      link1: "https://to-do-three-iota.vercel.app",
      link2: "https://github.com/VishalSingh79/To-Do.git",
      btn1:"Live Link",
      btn2:"GitHub Link"
    },
    {
      id: 6,
      name: "Currency Convertor",
      info: "Developed a responsive web application using React.js for real-time currency conversion across 50+ global currencies. Leveraged external APIs to provide accurate exchange rates.",
      image: currencysnap,
      link1:"https://vishalsingh79.github.io/Currency-Convertor",
      link2:"https://github.com/VishalSingh79/Currency-Convertor.git",
      btn1:"Live Link",
      btn2:"GitHub Link"
    },
    {
      id: 7,
      name: "Birth Date Predictor",
      info: "Mystery Date is a React.js game blending intuition and algorithm. Guess if your birth date appears on a uniquely patterned cube in just 5 turns. Engage in a interactive experience.",
      image:birthsnap,
      link1:"https://vishalsingh79.github.io/Birth-Date-Predictor",
      link2:"https://github.com/VishalSingh79/Birth-Date-Predictor.git",
      btn1:"Live Link",
      btn2:"GitHub Link"
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
