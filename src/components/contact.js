import React from 'react'
import styles from './contact.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import ReactContactForm from 'react-mail-form';


export default function Contact() {
    return(
        <ScrollAnimation duration={2} animateIn="fadeIn" animateOnce={true}>
        <div id="contact" className={styles.contact}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={styles.contactText}>
                Get In Touch
            </div>
            <svg>
                <line x1="50%" y1="0%" x2="50%" y2="100%" style={{stroke: '#7395AE'}}></line>
            </svg>
            <ReactContactForm titleMaxLength={500} contentsMaxLength={5000} buttonText="Send" contentsPlaceholder="Message" titlePlaceholder="Subject" className={styles.form} to="patel.priyanshi@outlook.com" />
            
        </div>
        </ScrollAnimation>
    )
}