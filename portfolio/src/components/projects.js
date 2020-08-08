import React, { Component } from 'react' 
import styles from './projects.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import VisibilitySensor from 'react-visibility-sensor'

export default class Projects extends Component {
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
                <div id="projects" style={this.state.animate} className={styles.projects}>
                    <div id="projects-text" className={styles.projectsText}>
                        Projects
                    </div>
                </div>
                </StyleRoot>
                </VisibilitySensor>
            </div>
        )
    }
}