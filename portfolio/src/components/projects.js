import React, { Component } from 'react' 
import styles from './projects.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import VisibilitySensor from 'react-visibility-sensor'

const projects = [
    {
        name: 'Vector Field Visualizer',
        git: 'https://github.com/priyyanshi/Vector-Fields',
        live: 'https://vector-field-visualizer.herokuapp.com/'
    },
    {
        name: 'Binary Search Tree Visualizer',
        git: 'https://github.com/priyyanshi/Data-structures-and-algos',
        live: 'https://data-structures-and-algo.herokuapp.com/'
    },
    {
        name: 'VGA Graphing Calculator',
        git: 'https://github.com/priyyanshi/Grapher-VGA-Graphing-Calculator-'
    },
    {
        name: 'Engineering Design: Praxis',
        git: null,

    }, 
]

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

        const projComp = projects.map(proj => <Module stuff={proj.name}/>)

        return(
            <div ref={this.wrapper}>
                <VisibilitySensor active={this.state.active} onChange={this.styleChange}>
                <StyleRoot>
                <div id="projects" style={this.state.animate} className={styles.projects}>
                    <div id="projects-text" className={styles.projectsText}>
                        Projects
                    </div>
                    <svg>
                        <line x1="22%" y1="50%" x2="100%" y2="50%" style={{stroke: '#7395AE', strokeWidth: '0.15vw'}}></line>
                    </svg>
                    <div className={styles.holder}> 
                        {projComp}
                    </div>
                </div>
                </StyleRoot>
                </VisibilitySensor>
            </div>
        )
    }
}

function Module(props) {
    return (
        <div className={styles.module}>
            {props.stuff}
        </div>
    )
}