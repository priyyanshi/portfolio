import React from 'react'
import styles from './header.module.css'
import logo from '../pics/logo.png'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import { NavHashLink as Link } from 'react-router-hash-link';


export default function Header() {
    return(
        <div id="nav-header">
            <StyleRoot>
            <div id="header-temp" className={styles.header} style={animation.slideInLeft}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img src={logo} alt="P" className={styles.logo}></img>
                <div >
                    <Link smooth to="/#about" href="/#">About Me</Link>
                    <Link smooth to="/#projects" href="/#">Projects</Link>
                    <Link smooth to="/#contact" href="/#">Contact</Link>

                    {/* <a href='/#'>Certificates</a> */}
                    <a href='/#'>Contact</a>
                </div>
                <button> Resume </button>
            </div>
            </StyleRoot>
        </div>
    )
}


