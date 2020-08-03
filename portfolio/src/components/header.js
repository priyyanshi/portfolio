import React from 'react'
import styles from './components.module.css'

export default function Header() {
    return(
        <div>
            <img src="../pics/logo.svg"></img>
            <div className={styles.header}>
                <a id="#">About</a>
                <a id="#>">Projects</a>
                <a id="#">Contact</a>
            </div>
        </div>
    )
}
