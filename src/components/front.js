import React, { Component } from 'react' 
import styles from './front.module.css'
import About from './about'
import Projects from './projects'
import {animation} from './animations'
import { NavHashLink as Link } from 'react-router-hash-link';
import Contact from './contact'
import Footer from './footer'
// import ScrollAnimation from 'react-animate-on-scroll';
import {StyleRoot} from 'radium'

export default class Front extends Component {

    render() {
        return(
            <div>
                <StyleRoot>
                <div id="front" className={styles.front}>
                    <div id="front-text" className={styles.frontText}  style={animation.pulse}>
                        {/* <ScrollAnimation duration={0.8} animateIn="pulse" initiallyVisible={false} animateOnce={true}> */}
                            <h2>Hello! Welcome to my portfolio.</h2>
                        {/* </ScrollAnimation> */}
                        <h3>My name is</h3> 
                        <h1>Priyanshi Patel.</h1>
                        
                        <br/> <br/> <br/>  
                        <h4>I am a 3rd year computer engineering student at the University of Toronto. <br/> 
                            Take a look at some of the projects I've built!
                        </h4>
                        <br/> 
                        <button >
                        <Link smooth to="/#about" style={{color: '#c4b6ab'}}href="/#">▼</Link>
                        </button>
                    </div>
                    <About/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </div> 
                </StyleRoot> 
            </div>
        )
    }
}