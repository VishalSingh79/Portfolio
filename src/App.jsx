import React from 'react';
import './App.css';
import Project from './Component/Projects';
import clip from './assets/clip.mp4';
import photo from './assets/myphoto.png';
import { useEffect,useRef,useState } from 'react';
import Typed from 'typed.js';
import Aboutme from './Component/Aboutme';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import gsap from 'gsap';
import { IoReorderThree } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";


function App() {
  const cursorref=useRef(null);
  const [menuBar,setMenuBar]=useState(false);
  useEffect(() => {
  
    const typeData = new Typed(".role", {
      strings: [
        "Student",
        "Frontend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });
    return () => {
      typeData.destroy();
    };
  });
  
  function cursorinc(event){
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY-85,
      scale:4,
      duration:1,
      ease:"black.out"
    })
  }
  function cursordec(event){
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY-85,
      scale:4,
      duration:1,
      ease:"black.out"
    })
  }

  function hamburgerHandler(){
    setMenuBar(!menuBar);
    
   }

  return (
    <div className="app" onMouseMove={(event)=>{
      
      gsap.to(cursorref.current,{
        left: event.clientX,
        top:event.clientY,
        duration:1,
        ease:"black.out"
      })
     }}>
    <div className='hero-section'>
          <div className='cursor' ref={cursorref}></div>
          <video autoPlay muted loop className="background-video">
            <source src={clip} type="video/mp4" />   
          </video>
          <div className='main-nav'>
          <div className='navbar' >
          <div className='logo' >
              Vishal <span style={{color:"#14f7ff"}}>Singh</span>
          </div>
          
          <div className='mid-nav'>
            <a href='#about-sec' className='hii'><p className='hovernav'>About</p></a>
            <a href='#projectsec' className='hii'><p className='hovernav'>Projects</p></a>
            <a href='#skillsec' className='hii'><p className='hovernav'>Skills</p></a>
            <a href='#contactsec' className='hii'><p className='hovernav'>Contact me</p></a>
          </div>
          <a href='/resume.pdf' download>
          <button className='right-nav'>
            Download Resume
          </button> 
          </a>
          
          </div>
          <div  className={menuBar?"mobile-navbar":"close-navbar"} onClick={hamburgerHandler}>
            { menuBar? 
              <GiSplitCross className='hamburger-menu' style={{fontSize:"2.8rem"}}/>
               :
              <IoReorderThree className='hamburger-menu1'/>
            }
            </div>
            <div className={menuBar?"mobile-menu":"close-menu"}>
                  { menuBar?      
                   
                     <div className='links1'>
                     <a href='#about-sec' className='hii1'><p className='hovernav1'>About</p></a>
                     <a href='#projectsec' className='hii1'><p className='hovernav1'>Projects</p></a>
                     <a href='#skillsec' className='hii1'><p className='hovernav1'>Skills</p></a>
                     <a href='#contactsec' className='hii1'><p className='hovernav'>Contact me</p></a>
                    </div>:
                    <div></div>
                  } 
            </div>
         
          </div>
          
          <img src={photo} className='myimage' />
          <div className='hero-details'>
            <div className='name'>Hello! Everyone 👋 <span>I'm Vishal Singh</span></div>
            <div className='name1'>I am a <span className='role'></span></div>
            <div className='desc'>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</div>
            <div className='btns'>
              <a href="./resume.pdf" download><button className='btn1'>Download Resume</button></a>
              <a href='#contactsec'><button className='btn2'>Contact me</button></a>
            </div>
          </div>
    </div>
    <Aboutme/>
    <Project cursorref={cursorref}/>  
    <Skills/>
    <Contact/>
    
    </div>
  );
}

export default App;