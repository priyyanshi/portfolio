import React, { Component } from 'react' 
import styles from './components.module.css'

export default class Front extends Component {
    constructor() {
        super()
    }

    render() {

        return(
            <div>
                <div id="about" className={styles.front}>
                        <div id="text" className={styles.frontText} >
                            <h3>Hi, my name is</h3> 
                            <h1>Priyanshi Patel.</h1>
                            <h2>Computer Engineering Student</h2>
                            <br/> <br/> <br/> <br/> <br/> 
                            <h4>I am a computer engineering student at the University of Toronto. <br/> 
                                I like to learn, solve problems and build things. Take a look!
                            </h4>
                            <br/> <br/> 
                            <button >▼</button>
                        </div>
                </div>
            </div>
        )
    }
}