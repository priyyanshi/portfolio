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
                            Hey, I'm Priyanshi Patel and I am a 3rd year computer engineering student at the University of Toronto. 
                            I am majoring in software engineering and minoring in A.I with a certificate in Engineering Leadership.
                            I enjoy learning and creating, as it pertains to software, because it allows me to better problem solve. 
                        </h4>

                        <h4>
                            <br/>
                            I am particularly comfortable with the following languages:
                            
                        </h4> 
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>C++</li>
                        </ul>
                        
                    </div>
                </div>
                </StyleRoot>
                </VisibilitySensor>
            </div>
        )
    }
}