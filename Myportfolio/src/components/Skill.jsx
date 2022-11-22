import React, { useEffect } from 'react'
import {FaHtml5 ,FaCss3,FaJava,FaBootstrap,FaReact,FaPhp } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/skill.css'
function Skill() {
  return (
    <section id="skill">
        <div className='heading'><h2>The skills I have</h2></div>
      
    <div className='skill_container'>
     <div className='skill_frontend'>
       <h3>Frontend Development</h3>
       <div className='skill_content'>
         <article className='skill_details'>
            <FaHtml5 style={{color:"white"}}/>
            <p>HTML</p>
        </article>  
        <article className='skill_details'>
            <FaCss3 style={{color:"white"}}/>
            <p>CSS</p>
        </article> 
        <article className='skill_details'>
            <FaJava style={{color:"white"}}/>
            <p>JavaScript</p>
        </article> 
        <article className='skill_details'>
            <FaBootstrap style={{color:"white"}}/>
            <p>Bootsrap</p>
        </article> 
        <article className='skill_details'>
            <FaReact style={{color:"white"}}/>
            <p>React</p>
        </article>     
       </div> 
     </div>

     <div className='skill_backend'>
       <h3>Backend Development</h3>
       <div className='skill_content'>
         <article className='skill_details'>
            <FaPhp style={{color:"white"}}/>
            <p>PHP Framework</p>
        </article> 
        <article className='skill_details'>
            <FaHtml5 style={{color:"white"}}/>
            <p>MySQL</p>
        </article>       
       </div> 
     </div>


    </div>
    </section>
  )
}

export default Skill