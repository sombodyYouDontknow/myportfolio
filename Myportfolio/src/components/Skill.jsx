import React, { useEffect } from 'react'
import { FaHtml5, FaCss3, FaJava, FaBootstrap, FaReact, FaPhp,FaPython } from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/skill.css'
function Skill() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id="skill">
      <div  data-aos="fade-right" data-aos-duration="1000" className='heading'><h2>The skills I have</h2></div>
      <div className='skill_container'>
        <div className='skill_frontend'  data-aos="flip-left" data-aos-duration="1000">
          <h3>Frontend Development</h3>
          <div className='skill_content'>
            <article className='skill_details'>
              <FaHtml5 style={{ color: "white"}} size={20} className='display-icons'/>
              <div>
                <p>HTML</p>
              </div>
            </article>
            <article className='skill_details'>
              <FaCss3 style={{ color: "white" }} size={20} className='display-icons'/>
              <div>
                <p>CSS</p>
              </div>
            </article>
            <article className='skill_details'>
              <FaJava style={{ color: "white" }} size={20} className='display-icons'/>
              <div>
                <p>JavaScript</p>
              </div>
            </article>
            <article className='skill_details'>
              <FaBootstrap style={{ color: "white" }} size={20} className='display-icons'/>
              <div>
                <p>Bootsrap</p>
              </div>
            </article>
            <article className='skill_details'>
              <FaReact style={{ color: "white" }} size={20} className='display-icons'/>
              <div>
                <p>React</p>
              </div>
            </article>
          </div>
        </div>

        <div className='skill_backend' data-aos="flip-right" data-aos-duration="1000" >
          <h3>Backend Development</h3>
          <div className='skill_content'>
            <article className='skill_details'>
              <FaPhp style={{ color: "white" }} size={20} className='display-icons'/>
              <div>
                <p>PHP Framework</p>
              </div>
            </article>
            <article className='skill_details'>
              <SiMysql style={{ color: "white" }} size={30} className='display-icons'/>
              <div>
                <p>MySQL</p>
              </div>
            </article>
            <article className='skill_details'>
              <FaPython style={{ color: "white" }} size={20} className='display-icons'/>
              <div>
                <p>Python</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill