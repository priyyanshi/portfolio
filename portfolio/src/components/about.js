import React, { Component } from 'react' 
import styles from './components.module.css'
import {Circle} from './design'

export default class About extends Component {
    constructor() {
        super()
    }

    onclick = () => {
        document.getElementById('call').scrollIntoView()
    }

    render() {

        return(
            <div>
                <div className={styles.about}>
                    <div className={styles.text} >
                        <h3>Hi, my name is</h3> 
                        <h1>Priyanshi Patel</h1>
                        <br/> <br/> <br/> <br/> <br/> 
                        <h4>I am a computer engineering student at the University of Toronto. <br/> 
                            I like to learn, solve problems and build things. Take a look!
                        </h4>
                        <br/> <br/> 
                        <button onClick={this.onClick}>▼</button>
                    </div>
                    <div >
                        {/* <Circle width="120px" height="120px" x="60px" y="60px"  w="10px" r="50px" s="#4E4E50" f="none"/>
                        <Circle width="50px" height="50" x="60px" y="60px"  w="5px" r="20px" s="#7395AE" f="none"/> */}
                    </div>
                </div>
                <div id="call" style={{width: '500px', height: '5000px'}}>  </div>
            </div>
        )
    }
}