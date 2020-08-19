import React, { Component } from 'react' 
import styles from './projects.module.css'
import vector from '../pics/vector.jpg'
import vectorG from '../pics/vector.gif'
import binary from '../pics/binary.jpg'
import binaryG from '../pics/binary.gif'
import grapher from '../pics/grapher.png'
import grapherG from '../pics/grapher.gif'
import reroute from '../pics/reroute.jpg'
import { GlassMagnifier } from "react-image-magnifiers";
import ScrollAnimation from 'react-animate-on-scroll';

const projects = [
    {
        name: 'Vector Field Visualizer',
        git: 'https://github.com/priyyanshi/Vector-Fields',
        live: 'https://vector-field-visualizer.herokuapp.com/',
        img: vector,
        gif: vectorG,
        tech: ['p5.js  ', 'Javascript  ', 'HTML  ', 'CSS '],
        description: 'A vector field visualizer that allows you to explore fields in 3D space. The vectors can be scaled and the quantity of vectors can be adjusted. You are provided a user manual for help and examples to get you started.'
    },
    {
        name: 'Binary Search Tree Visualizer',
        git: 'https://github.com/priyyanshi/Data-structures-and-algos',
        live: 'https://data-structures-and-algo.herokuapp.com/',
        img: binary,
        gif: binaryG,
        tech: ['React ', ' p5.js ', ' Javascript ',' CSS '],
        description: 'A binary search tree visulizer that allows you to insert and delete nodes. Provides depth traversals of the tree, and allows you to visual multiple trees.'
    },
    {
        name: 'VGA Graphing Calculator',
        git: 'https://github.com/priyyanshi/Grapher-VGA-Graphing-Calculator-',
        live: 'https://cpulator.01xz.net/?sys=arm',
        img: grapher,
        gif: grapherG,
        tech: ['C  ', 'Arm-Processor  ', 'VGA  '],
        description: 'Grapher is a graphing calculator application that allows users to graph lines, polynomials of power 2, polynomials of power 3, polynomials of power 4, square root functions, and exponential functions. The project targets a DE1-SoC board. This project was done in a group of 2 for a Computer Organization course (ECE243) at the University of Toronto.'
    },
    {
        name: 'ReRoute',
        git: null,
        live: "https://youtu.be/HRw8DVKcaxU",
        img: reroute,
        gif: reroute,
        tech: 'Engineering Design Project',
        description: 'Designed a system to notify staff about wandering patients with Dementia in nursing homes. This allows staff to appropriately redirect the patients as necessary. Worked in a team of 4 for Praxis II (ESC102, an engineering design course) to accomplish this.'
    }, 
]

export default class Projects extends Component {
   
    render() {
        let k = 0
        const projComp = projects.map(proj => <Module key={k++} name={proj.name} git={proj.git} live={proj.live} gif={proj.gif} img={proj.img} tech={proj.tech} description={proj.description}/>)

        return(
            <div>
                <ScrollAnimation duration={2} animateIn="fadeIn" animateOnce={true}>
                <div id="projects" className={styles.projects}>
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
                </ScrollAnimation>
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
                        <img className={styles.picMagnify} alt="img" type="image/png" src={this.props.img}/>
                        <GlassMagnifier magnifierSize="50%" magnifierOffsetX={-50} magnifierOffsetY={-50} className={styles.magnify} imageAlt="Example" imageSrc={this.props.img} />
                        <div id="overlay" className={styles.overlay}></div>
                    </div>
        
                    <div className={styles.description}>   
                        <div style={{display: 'block', position: 'absolute', top: '0%', marginTop: '20px', marginRight: '10px'}}>  
                            <h1>
                                {this.props.name}
                            </h1>  
                            <h3>
                                <br/> 
                                {this.props.tech}
                                <br/> <br/>
                            </h3>
                            <h4 dangerouslySetInnerHTML={{__html: this.props.description}}>
                            </h4>
                        </div>
                            
                        <div style={{display: 'block', position: 'absolute', top: '80%'}}>
                            <a title="Watch the full showcase presentation!" rel="noopener noreferrer" href={this.props.live} target="_blank"><i className="fa fa-link" style={{color:'#c4b6ab'}}></i></a>
                        </div>
                    </div>
                </div> 
            )
        }
        return (
            <div className={styles.module}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className={styles.thumbnail}>
                    <img className={styles.pic} alt="img" type="image/png" src={this.props.img}/>
                    <img className={styles.gif} alt="img" src={this.props.gif}/>
                    <div id="overlay" className={styles.overlay}></div>
                </div>

                <div className={styles.description}>   
                    <div style={{display: 'block', position: 'absolute', top: '0%', marginTop: '20px', marginRight: '10px'}}>  
                        <h1>
                            {this.props.name}
                        </h1>  
                        <h3 style={{wordSpacing:'0.4vw'}}>
                            <br/> 
                            {this.props.tech}
                            <br/> <br/>
                        </h3>
                        <h4 dangerouslySetInnerHTML={{__html: this.props.description}}>
                        </h4>
                    </div>
                    <div style={{display: 'block', position: 'absolute', top: '80%'}}>
                        <a title="View live site!" rel="noopener noreferrer" href={this.props.live} target="_blank"><i className="fa fa-link" style={{color:'#c4b6ab'}}></i></a>
                        <a title="View on Github" rel="noopener noreferrer" href={this.props.git} target="_blank"><i className="fa fa-github" style={{color:'#c4b6ab'}}></i></a>
                    </div>
                </div>
            </div>      
        )
    }
}