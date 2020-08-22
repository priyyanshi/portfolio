import React from 'react'
import styles from './sidebar.module.css'
import {animation} from './animations'
import {StyleRoot} from 'radium'

export default function Sidebar() {
    return(
        <StyleRoot>
        <div className={styles.socialBar} style={animation.slideInUp}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a title="Github" rel="noopener noreferrer" href="https://github.com/priyyanshi" target="_blank" className={styles.socialButton}><i className="fa fa-github" style={{color:'#c4b6ab'}}></i></a>
            <a title="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/priyanshi-patel-/" target="_blank" className={styles.socialButton}><i className="fa fa-linkedin" style={{color:'#c4b6ab'}}></i></a>
            <a title="Email" rel="noopener noreferrer" href="mailto: patel.priyanshi@outlook.com" target="_blank" className={styles.socialButton}><i className="fa fa-envelope" style={{color:'#c4b6ab'}}></i></a>
        </div>
        </StyleRoot>
    )
}