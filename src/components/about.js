import React, { Component } from 'react' 
import styles from './about.module.css'
import { NavHashLink as Link } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
   
    render() {

        return(
            <ScrollAnimation duration={1.5} animateIn="fadeIn" animateOnce={false}>
                <div id="about" className={styles.about}>
                    
                    
                    <div id="about-text" className={styles.aboutText}>
                        About Me
                    </div>
                    <svg>
                        <line x1="0%" y1="50%" x2="100%" y2="50%" style={{stroke: '#7395AE'}}></line>
                    </svg>
                    
                    <div className={styles.aboutInfo}>
                        
                        <h4>
                            <br/> <br/>
                            Hey, I'm Priyanshi Patel and I am a 3rd year computer engineering student at the <span style={{color: '#557A95', fontWeight:'bold'}}> University of Toronto </span>. 
                            My focus area is software engineering and I'll be minoring in A.I with a certificate in Engineering Leadership.
                            Making projects, such as the ones displayed here, help me get a better understanding of the industry and narrow down where my interests lie.
                            <br/> <br/>

                            My technical experience consists of my time as a Software Intern at <a rel="noopener noreferrer" className={styles.dohover} href="https://www.getfetch.ca/index.html" target="_blank"> <span style={{color: '#557A95', fontWeight:'bold'}}> Fetch </span> </a>. 
                            As an intern, I independently developed a customer relationship management (CRM) system using Meteor.js and Node. I worked with MongoDB to create a responsive database for the CRM system.
                            <br/> <br/>

                            Additionally, through coursework, internships, and <Link className={styles.dohover}  smooth to="/#projects" href="/#"><span style={{color: '#557A95', fontWeight:'bold'}}> projects </span></Link> I have become comfortable with the following languages and technologies:
                            <br/> <br/>
                        <ul>
                            <li>Python</li>
                            <li>C++</li>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML &amp; CSS</li>

                            <li>Data Structures &amp; Algorithms</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>Git</li>
                        </ul>
                        </h4> 
                    </div> 
                </div>
            </ScrollAnimation>
        )
    }
}