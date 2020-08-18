import React, { Component } from 'react' 
import styles from './about.module.css'
import { NavHashLink as Link } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
   
    render() {

        return(
            <div>
            <ScrollAnimation duration={2} animateIn="fadeIn">
                <div id="about" className={styles.about}>
                    
                    <div id="about-text" className={styles.aboutText}>
                            About Me    

                           

                    </div>
                    <svg>
                        <line x1="12%" y1="50%" x2="100%" y2="50%" style={{stroke: '#7395AE', strokeWidth: '0.15vw'}}></line>
                    </svg>
                    <div className={styles.aboutInfo}>

                        <h4>
                            <br/> 
                            Hey, I'm Priyanshi Patel and I am a 3rd year computer engineering student at the <span style={{color: '#557A95', fontWeight:'bold'}}> University of Toronto </span>. 
                            My focus area are software engineering and I'll be minoring in A.I with a certificate in Engineering Leadership.
                            Making projects, such as the ones displayed here, help me get a better understanding of the industry and narrow down where my interests lie.
                            <br/> <br/>
                        </h4>
                        <h4>
                            My technical experience consists of my experience as a Software Intern at <a rel="noopener noreferrer" className={styles.dohover} href="https://www.getfetch.ca/index.html" target="_blank"> <span style={{color: '#557A95', fontWeight:'bold'}}> Fetch </span> </a>. 
                            As an intern, I was able to work with Node.js, Meteor.js and MongoDB for the devlopment of a CRM system. 
                        </h4>

                        <h4>
                            <br/>
                            Additionally, through coursework, internships, and <Link className={styles.dohover}  smooth to="/#projects" href="/#"><span style={{color: '#557A95', fontWeight:'bold'}}> projects </span></Link> I have become comfortable with the following languages, databases, frameworks, and libraries:
                            <br/> <br/>
                        </h4> 
                        <ul>
                            <li>Python</li>
                            <li>Javascript (ES6+)</li>
                            <li>C++</li>
                            <li>HTML &amp; CSS</li>

                            <li>Node.js</li>
                            <li>React</li>
                            <li>p5.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        )
    }
}