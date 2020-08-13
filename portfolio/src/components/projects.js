import React, { Component } from 'react' 
import styles from './projects.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import VisibilitySensor from 'react-visibility-sensor'
import vector from '../pics/vector.png'
import binary from '../pics/binary.png'
import grapher from '../pics/grapher.png'


const projects = [
    {
        name: 'Vector Field Visualizer',
        git: 'https://github.com/priyyanshi/Vector-Fields',
        live: 'https://vector-field-visualizer.herokuapp.com/',
        img: vector,
        tech: ['p5.js ', 'Javascript ', 'HTML ', 'CSS'],
        description: 'A vector field visualizer that allows you to explore fields in 3D space. The vectors can be scaled and the quantity of vectors can be adjusted.'
    },
    {
        name: 'Binary Search Tree Visualizer',
        git: 'https://github.com/priyyanshi/Data-structures-and-algos',
        live: 'https://data-structures-and-algo.herokuapp.com/',
        img: binary,
        tech: ['React ', 'p5.js ', 'Javascript ','CSS'],
        description: 'A binary search tree visulizer that allows you to insert and delete nodes. Provides depth traversals of the tree, and allows you to visual multiple trees.'
    },
    {
        name: 'VGA Graphing Calculator',
        git: 'https://github.com/priyyanshi/Grapher-VGA-Graphing-Calculator-',
        live: 'https://cpulator.01xz.net/?sys=arm',
        img: grapher,
        tech: ['C ', 'Arm Processor ', 'VGA '],
        description: 'Grapher is a graphing calculator application that allows users to graph lines, polynomials of power 2, polynomials of power 3, polynomials of power 4, square root functions, and exponential functions. The project targets a DE1-SoC board. This project was done in a group of 2 for a Computer Organization course (ECE243) at the University of Toronto.'
    },
    {
        name: 'Engineering Design: Praxis',
        git: null,
        live: null,
        img: null,
        tech: null,
        description: null
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

        const projComp = projects.map(proj => <Module name={proj.name} git={proj.git} live={proj.live} img={proj.img} tech={proj.tech} description={proj.description}/>)

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
            <div className={styles.thumbnail}>
                <img type="image/png" src={props.img}/>
                <div id="overlay" className={styles.overlay}></div>
            </div>

            <div id="name" className={styles.nameHeader}>{props.name}</div>
            <a href={props.live} target="_blank">Live </a>
            <a href={props.git} target="_blank">Git</a>
            <h4>
                {props.tech}
            </h4>
            <h4>
                {props.description}
            </h4>
        </div>
    )
}