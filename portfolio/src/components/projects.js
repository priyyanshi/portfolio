import React, { Component } from 'react' 
import styles from './projects.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import VisibilitySensor from 'react-visibility-sensor'
import vector from '../pics/vector.png'
import binary from '../pics/binary.png'
import grapher from '../pics/grapher.png'
import reroute from '../pics/reroute.png'

const projects = [
    {
        name: 'Vector Field Visualizer',
        git: 'https://github.com/priyyanshi/Vector-Fields',
        live: 'https://vector-field-visualizer.herokuapp.com/',
        img: vector,
        tech: ['p5.js  ', 'Javascript  ', 'HTML  ', 'CSS '],
        description: 'A vector field visualizer that allows you to explore fields in 3D space. The vectors can be scaled and the quantity of vectors can be adjusted. You are provided a user manual for help and examples to get you started.'
    },
    {
        name: 'Binary Search Tree Visualizer',
        git: 'https://github.com/priyyanshi/Data-structures-and-algos',
        live: 'https://data-structures-and-algo.herokuapp.com/',
        img: binary,
        tech: ['React ', ' p5.js ', ' Javascript ',' CSS '],
        description: 'A binary search tree visulizer that allows you to insert and delete nodes. Provides depth traversals of the tree, and allows you to visual multiple trees.'
    },
    {
        name: 'VGA Graphing Calculator',
        git: 'https://github.com/priyyanshi/Grapher-VGA-Graphing-Calculator-',
        live: 'https://cpulator.01xz.net/?sys=arm',
        img: grapher,
        tech: ['C  ', 'Arm-Processor  ', 'VGA  '],
        description: 'Grapher is a graphing calculator application that allows users to graph lines, polynomials of power 2, polynomials of power 3, polynomials of power 4, square root functions, and exponential functions. The project targets a DE1-SoC board. This project was done in a group of 2 for a Computer Organization course (ECE243) at the University of Toronto.'
    },
    {
        name: 'ReRoute',
        git: null,
        live: null,
        img: reroute,
        tech: 'Engineering Design',
        description: 'Designed a system to notify staff about wandering patients with Dementia in nursing homes. This allows staff to appropriately redirect the patients as necessary. Worked in a team of 4 for Praxis II (ESC102, an engineering design course) to accomplish this.'
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
        let k = 0
        const projComp = projects.map(proj => <Module key={k++} name={proj.name} git={proj.git} live={proj.live} img={proj.img} tech={proj.tech} description={proj.description}/>)

        return(
            <div ref={this.wrapper}>
                <VisibilitySensor active={this.state.active} onChange={this.styleChange}>
                <StyleRoot>
                <div id="projects" style={this.state.animate} className={styles.projects}>
                    <div id="projects-text" className={styles.projectsText}>
                        Some Things I've Built
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

class Module extends Component {

    
    render() {
        if (this.props.git == null) {
            return (
                <div className={styles.module}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className={styles.thumbnail}>
                        <img alt="img" type="image/png" src={this.props.img}/>
                        <div id="overlay" className={styles.overlay}></div>
                    </div>
        
                    <div className={styles.description}>   
                        <h1>
                            {this.props.name}
                        </h1>  
                        <h3 style={{wordSpacing:'0.4vw'}}>
                            <br/> 
                            {this.props.tech}
                            <br/> <br/> <br/> <br/>
                        </h3>
                        <h4>
                            {this.props.description}
                            <br/> <br/>
                        </h4>
                    </div>
                </div> 
            )
        }
        return (
        <div className={styles.module}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={styles.thumbnail}>
                <img alt="img"type="image/png" src={this.props.img}/>
                <div id="overlay" className={styles.overlay}></div>
            </div>

            <div className={styles.description}>   
                <h1>
                    {this.props.name}
                </h1>  
                <h3 style={{wordSpacing:'0.4vw'}}>
                    <br/> 
                    {this.props.tech}
                    <br/> <br/> <br/> <br/>
                </h3>
                <h4>
                    {this.props.description}
                    <br/> <br/>
                </h4>
                <a title="View live site!" rel="noopener noreferrer" href={this.props.live} target="_blank"><i className="fa fa-link" style={{color:'#c4b6ab'}}></i></a>
                <a title="View on Github" rel="noopener noreferrer" href={this.props.git} target="_blank"><i className="fa fa-github" style={{color:'#c4b6ab'}}></i></a>
            </div>
        </div>      
        )
    }
}