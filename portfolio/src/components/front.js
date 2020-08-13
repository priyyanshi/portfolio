import React, { Component } from 'react' 
import styles from './front.module.css'
import About from './about'
import Projects from './projects'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import { NavHashLink as Link } from 'react-router-hash-link';
import Contact from './contact'
import Footer from './footer'

export default class Front extends Component {

    render() {

        return(
            <div>
                <div id="front" className={styles.front}>
                    <StyleRoot>
                        <div id="front-text" className={styles.frontText}  style={animation.pulse}>
                            <h3>Hi, my name is</h3> 
                            <h1>Priyanshi Patel.</h1>
                            <h2>I like to learn and create.</h2>
                            <br/> <br/> <br/> <br/> 
                            <h4>I am a 3rd year computer engineering student at the University of Toronto. <br/> 
                                I enjoy building software projects to further my learning. Take a look!
                            </h4>
                            <br/> 
                            <button >
                            <Link smooth to="/#about" style={{color: '#c4b6ab'}}href="/#">▼</Link>
                            </button>
                        </div>
                    </StyleRoot> 

                    <About/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </div>  
            </div>
        )
    }
}