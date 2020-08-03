import React from 'react'
import styles from './components.module.css'

export default function Sidebar() {
    return(
        <div className={styles.socialBar}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a href="https://github.com/priyyanshi" target="_blank" class={styles.socialButton}><i class="fa fa-github" style={{color:'#c4b6ab'}}></i></a>
            <a href="https://www.linkedin.com/in/priyanshi-patel-/" target="_blank" class={styles.socialButton}><i class="fa fa-linkedin" style={{color:'#c4b6ab'}}></i></a>
        </div>
    )
}