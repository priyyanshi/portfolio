import React, { Component } from 'react' 
import styles from './components.module.css'

export default class About extends Component {
    constructor() {
        super()
        this.state = {
            showAbout: true
        }
        //this.aboutButton = this.aboutButton.bind(this)
    }

    // aboutButton = () => {
    //     console.log(this.state.showAbout)
    //     if (this.state.showAbout) {
    //         document.getElementById("about").style.height = "40vh"
    //         document.getElementById("circle").style.height = "30%"
    //         document.getElementById("circle1").style.height = "30%"
    //         document.getElementById("about-text").style.height = "15%"
    //         document.getElementById("line").style.height = "7.5%"
    //         document.getElementById("line1").style.height = "7.5%"
    //         document.getElementById("text").style.display = "none"
    //         this.setState({showAbout: false})
    //     } else {
    //         document.getElementById("text").style.display = "inline"
    //         document.getElementById("line").style.display = "inline"
    //         document.getElementById("line1").style.display = "inline"
    //         this.setState({showAbout: true})
    //     }

    // }

    render() {

        return(
            <div>
                <div id="about" className={styles.about}>
                    About
                </div>
            </div>
        )
    }
}