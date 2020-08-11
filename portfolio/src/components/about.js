import React, { Component } from 'react' 
import styles from './about.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import VisibilitySensor from 'react-visibility-sensor'
import { NavHashLink as Link } from 'react-router-hash-link';

export default class About extends Component {
    constructor() {
        super()
        this.state =  {
            active: true,
            count: 0,
            animate: {}
        }
        this.wrapper = React.createRef();
        this.styleChange = this.styleChange.bind(this)
    }

    styleChange = (isVisible) => {
        if (isVisible) {
            this.setState( prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        if (isVisible && this.state.count === 1) {
            this.setState({active: false, animate: animation.pulse})
        }
    }

    render() {

        return(
            <div ref={this.wrapper}>
                <VisibilitySensor active={this.state.active} onChange={this.styleChange}>
                <StyleRoot>
                <div id="about" style={this.state.animate} className={styles.about}>
                    <div id="about-text" className={styles.aboutText}>
                            About Me    
                    </div>
                    <svg>
                        <line x1="22%" y1="50%" x2="100%" y2="50%" style={{stroke: '#7395AE', strokeWidth: '0.2vw'}}></line>
                    </svg>
                    <div className={styles.aboutInfo}>
                        
                        <h4>
                            <br/> 
                            Hey, I'm Priyanshi Patel and I am a 3rd year computer engineering student at the <a href="https://www.utoronto.ca/" target="_blank"> <span style={{color: '#557A95', fontWeight:'bold'}}> University of Toronto </span> </a>. 
                            I am majoring in software engineering and minoring in A.I with a certificate in Engineering Leadership.
                            Making projects, such as the ones displayed here, help me get a better understanding of the industry and narrow down where my interests lie.
                            <br/> <br/>
                        </h4>
                        <h4>
                            My technical experience consists of my experience as a Software Intern at <a href="https://www.getfetch.ca/index.html" target="_blank"> <span style={{color: '#557A95', fontWeight:'bold'}}> Fetch </span> </a>. 
                            As an intern, I was able to work with Node.js and Meteor.js for the devlopment of a CRM system. 
                        </h4>

                        <h4>
                            <br/>
                            Additionally, through coursework, internships, and <Link smooth to="/#projects" href="/#"><span style={{color: '#557A95', fontWeight:'bold'}}> projects </span></Link> I have become comfortable with the following languages, databases, frameworks, and libraries:
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
                </StyleRoot>
                </VisibilitySensor>
            </div>
        )
    }
}