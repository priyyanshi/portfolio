import React from 'react'
import styles from './contact.module.css'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact() {
    return(
        <ScrollAnimation duration={2} animateIn="fadeIn" animateOnce={true}>
        <div id="contact" className={styles.contact}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={styles.contactText}>
                Get In Touch
            </div>
            <svg>
                <line x1="50%" y1="0%" x2="50%" y2="100%" style={{stroke: '#7395AE', strokeWidth: '0.15vw'}}></line>
            </svg>
            <div className={styles.links}>
                <a title="Github" rel="noopener noreferrer" href="https://github.com/priyyanshi" target="_blank" className={styles.socialButton}><i className="fa fa-github" style={{color:'#c4b6ab'}}></i> Github</a>
                <a title="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/priyanshi-patel-/" target="_blank" className={styles.socialButton}><i className="fa fa-linkedin" style={{color:'#c4b6ab'}}></i> LinkedIn</a>
                <a title="Email" rel="noopener noreferrer" href="mailto: patel.priyanshi@outlook.com" target="_blank" className={styles.socialButton}><i className="fa fa-envelope" style={{color:'#c4b6ab'}}></i> Email</a>
            </div>
        </div>
        </ScrollAnimation>
    )
}