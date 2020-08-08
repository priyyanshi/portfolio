import React, { Component } from 'react' 
import styles from './about.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import VisibilitySensor from 'react-visibility-sensor'

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
            console.log("up")
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
                    <div className={styles.aboutInfo}>
                        
                        <h4>
                            <br/> 
                            Hey, I'm Priyanshi Patel and I am a 3rd year computer engineering student. 
                            I am majoring in software engineering and minoring in A.I with a certificate in Engineering Leadership.
                            I like to create projects to further 

                        </h4>

                        <h4>
                            I am particularly comfortable with the following languages:
                        </h4> 
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    {/* <svg>
                        <line x1="50%" y1="15%" x2="50%" y2="75%" style={{stroke:'#7395AE',strokeWidth:'0.1vw'}}></line>
                    </svg> */}
                </div>
                </StyleRoot>
                </VisibilitySensor>
            </div>
        )
    }
}