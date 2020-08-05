import React from 'react'
import styles from './components.module.css'
import logo from '../pics/logo.png'


export default function Header(props) {
    return(
        <div id="nav-header">
            <div id="header-temp" className={styles.header}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img src={logo} alt="P" className={styles.logo}></img>
                <div >
                    <a id="#">About Me</a>
                    <a id="#>">Projects</a>
                    <a id="#">Contact</a>
                </div>
                <button> Resume </button>
            </div>
        </div>
    )
}


