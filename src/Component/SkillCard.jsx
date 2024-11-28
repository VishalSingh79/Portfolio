import React from 'react'
import "./Skills.css"

const SkillCard = ({text,img}) => {
  return (
    <div className='eskills'>
      <p >
         <img 
           src={img} 
           className='eachimg'
           style={{
              backgroundColor: text=="Github"?"white":"",
              borderRadius: text=="Github"?"55%":"", 
           }}    
           />    
      </p>       
      <p>{text}</p>
    </div>
  )
}

export default SkillCard
