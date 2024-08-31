import React from 'react';
import './Projects.css';
import gsap from 'gsap';


function Card({name,info,link1,link2,image,cursorref}) {
 console.log(cursorref);
  function cursorinc(event){
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY-85,
      scale:3,
      duration:0.5,
      ease:"black.out"
    })
  }
  function cursordec(event){
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY,
      scale:1,
      duration:0.6,
      ease:"black.out"
    })
  }

  function cursordec1(event){
    gsap.to(cursorref.current,{
      left: event.clientX,
      top:event.clientY,
      scale:0.3,
      duration:0.6,
      ease:"black.out"
    })
  }



  return (
    <div className='eachproject' onMouseEnter={(event)=>cursorinc(event)}  onMouseLeave={(event)=>cursordec(event)}
    >
        <img src={image} className='eachimage' />
        <p className='eachname'>{name}</p>
        <p className='eachinfo'>{info}</p>
        <div className='btnssec'>
            <a href={link1} target='_blank'><button className='eachbtn1'onMouseEnter={(event)=>cursordec1(event)} onMouseLeave={(event)=>cursorinc(event)}>Live Link</button></a>
            <a href={link2} target='_blank'><button className='eachbtn1'onMouseEnter={(event)=>cursordec1(event)} onMouseLeave={(event)=>cursorinc(event)}>Github</button></a>
            
        </div>

    </div>
  )
}

export default Card
