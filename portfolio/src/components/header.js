import React from 'react'
import styles from './components.module.css'
import logo from '../pics/logo.png'

export default function Header() {
    return(
        <div className={styles.header}>
            <img src={logo} alt="P" className={styles.logo}></img>
            <div className={styles.headerContents}>
                <a id="#">About</a>
                <a id="#>">Projects</a>
                <a id="#">Contact</a>
            </div>
            <button className={styles.resume}> Resume </button>

        </div>
    )
}
