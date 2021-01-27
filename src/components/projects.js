import React, { Component } from 'react' 
import styles from './projects.module.css'
import vector from '../pics/vector.jpg'
import vectorG from '../pics/vector.gif'
import binary from '../pics/binary.jpg'
import binaryG from '../pics/binary.gif'
import grapher from '../pics/grapher.png'
import grapherG from '../pics/grapher.gif'
import mapper from '../pics/mapper.jpg'
import mapperG from '../pics/mapper.gif'
import reroute from '../pics/reroute.jpg'
import Magnifier from "react-magnifier";
import ScrollAnimation from 'react-animate-on-scroll';

const projects = [
    {
        name: '3D Vector Field Visualizer',
        git: 'https://github.com/priyyanshi/Vector-Fields',
        live: 'https://priyyanshi.github.io/Vector-Fields/',
        img: vector,
        gif: vectorG,
        tech: ['p5.js  ', 'Javascript  ', 'HTML  ', 'CSS '],
        description: 'A vector field visualizer that allows you to explore fields in 3D space. The vectors can be scaled and the quantity of vectors can be adjusted. You are provided a user manual for help and examples to get you started.',
        learned: "I had used similar visualizers when taking Calculus III, and was eager to build one myself with a more intuitive UI than the ones I used. Through the project I was able to learn: <br/> <br/> • To use and familiarize myself with the p5.js library’s 3D (WEBGL) renderer. <br/> <br/> • To parse the user input using Math.js library."
    },
    {
        name: 'Binary Search Tree Visualizer',
        git: 'https://github.com/priyyanshi/Data-structures-and-algos',
        live: 'https://priyyanshi.github.io/Data-structures-and-algos/',
        img: binary,
        gif: binaryG,
        tech: ['React ', ' p5.js ', ' Javascript ',' CSS '],
        description: 'A binary search tree visulizer that allows you to insert and delete nodes. Provides depth traversals of the tree, and allows you to visual multiple trees.',
        learned: "Through the project I was able to learn: <br/> <br/> • To create p5.js sketches in React applications. <br/>  <br/> • Create customized binary search tree traversal algorithms to best suit display purposes."
    },
    {
        name: 'Mapping Application',
        git: 'https://github.com/priyyanshi/Mapping-application',
        img: mapper,
        gif: mapperG,
        tech: ['C++'],
        description: 'A mapping application inspired by Google Maps in a team of 3 using C++ and GTK3 for Software Communication and Design (ECE297). We implemented A* pathfinding algorithm to provide best travel route between points. We also optimized a courier delivery algorithm for a courier company driver with multiple deliveries. <br/> <br/>',
        learned: 'The project was done over the course of 4 months. It was broken down into 4 milestones. <br/> <br/> We developed the UI layout of the application during the first 2 milestones. <br/> <br/> While, milestone 3 and 4 were used to implement and optimize path finding algorithms for our application.'
    },
    {
        name: 'VGA Graphing Calculator',
        git: 'https://github.com/priyyanshi/Grapher-VGA-Graphing-Calculator-',
        live: 'https://cpulator.01xz.net/?sys=arm',
        img: grapher,
        gif: grapherG,
        tech: ['C  ', 'Arm-Processor  ', 'VGA  '],
        description: 'Grapher is a graphing calculator application that allows users to graph lines, polynomials, square root functions, and exponential functions. The project targets a DE1-SoC board. <br/> <br/>',
        learned: "This project was done in a group of 2 for a Computer Organization course (ECE243) at the University of Toronto. <br/> <br/> We were able to successfully polled I/O devices to get user input and display program on the VGA screen."
    },
    {
        name: 'ReRoute',
        git: null,
        live: "https://youtu.be/HRw8DVKcaxU",
        img: reroute,
        gif: reroute,
        tech: 'Engineering Design Project',
        description: 'Designed a system to notify staff about wandering residents with Dementia in nursing homes. This allows staff to appropriately redirect the patients as necessary. Worked in a team of 4 for Praxis II (ESC102, an engineering design course) to accomplish this. <br/> <br/>',
        learned: "The project was completed throughout the course of a semester. We worked closely with the Fairview Nursing Home to implemented the system. <br/> <br/> Throughout our design process, we priotized the freedom of the residents and ensured that our design did not hinder their social interactions or experience at the nursing home. "
    }, 
]

export default class Projects extends Component {
   
    render() {
        let k = 0
        const projComp = projects.map(proj => <Module key={k++} name={proj.name} git={proj.git} live={proj.live} gif={proj.gif} img={proj.img} tech={proj.tech} description={proj.description} learned={proj.learned}/>)

        return(
            <ScrollAnimation duration={1.5} animateIn="fadeIn" animateOnce={false}>
            <div id="projects" className={styles.projects}>
            
                <div id="projects-text" className={styles.projectsText}>
                    Some Things I've Built
                </div>
                <svg>
                    <line x1="0%" y1="50%" x2="100%" y2="50%" style={{stroke: '#7395AE'}}></line>
                </svg>
                <div className={styles.holder}> 
                    {projComp}
                </div>
            </div>
            </ScrollAnimation>
        )
    }
}

class Module extends Component {
    
    render() {
        if (this.props.name === "ReRoute") {
            return (
                <div className={styles.module} style={{}}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className={styles.thumbnail}>
                        <img className={styles.picMagnify} alt="img" type="image/png" src={this.props.img}/>
                        <Magnifier height="100%" width="100%" className={styles.magnify} src={this.props.img} />
                        <div id="overlay" className={styles.overlay}></div>
                    </div>
        
                    <div className={styles.description}>   
                        
                        <div id="learned" className={styles.learned}>
                            <h2>
                                Process: <br/> <br/>
                            </h2>
                            <h6 dangerouslySetInnerHTML={{__html: this.props.learned}}>
                            </h6>
                
                        </div>
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
                    <div className={styles.links}>
                        
                        <a title="Watch the full showcase presentation!" rel="noopener noreferrer" href={this.props.live} target="_blank"><i className="fa fa-link" style={{color:'#c4b6ab'}}></i></a>
                    </div>
                </div> 
            )
        }

        if (this.props.name === "Mapping Application") {
            return (
                <div className={styles.module} style={{}}>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className={styles.thumbnail}>
                        <img className={styles.pic} alt="img" type="image/png" src={this.props.img}/>
                        <img className={styles.gif} alt="img" src={this.props.gif}/>
                        <div id="overlay" className={styles.overlay}></div>
                    </div>
        
                    <div className={styles.description}>   
                        <div id="learned" className={styles.learned}>
                            <h2>
                                Process: <br/> <br/>
                            </h2>
                            <h6 dangerouslySetInnerHTML={{__html: this.props.learned}}>
                            </h6>
                
                        </div>
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
                    <div className={styles.links}>
                        <a title="View on Github" rel="noopener noreferrer" href={this.props.git} target="_blank"><i className="fa fa-github" style={{color:'#c4b6ab'}}></i></a>
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
                        <div id="learned" className={styles.learned}>
                            <h2>
                                Learnings &amp; Process: <br/> <br/>
                            </h2>
                            <h6 dangerouslySetInnerHTML={{__html: this.props.learned}}>
                            </h6>
                        </div>
                        <h1>
                            {this.props.name}
                        </h1>  
                        <h3 style={{wordSpacing:'0.4vw'}}>
                            {this.props.tech}
                        </h3>
                        <h4 dangerouslySetInnerHTML={{__html: this.props.description}}>
                        </h4>                    
                </div>
                <div className={styles.links}>
                        <a title="View live site!" rel="noopener noreferrer" href={this.props.live} target="_blank"><i className="fa fa-link" style={{color:'#c4b6ab'}}></i></a>
                        <a title="View on Github" rel="noopener noreferrer" href={this.props.git} target="_blank"><i className="fa fa-github" style={{color:'#c4b6ab'}}></i></a>
                </div>
            </div>      
        )
    }
}
