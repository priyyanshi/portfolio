import React from 'react'
import styles from './header.module.css'
import logo from '../pics/logo.png'
import {animation} from './animations'
import {StyleRoot} from 'radium'
import { NavHashLink as Link } from 'react-router-hash-link';
import resume from '../pics/Resume.pdf'

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos> currentScrollPos ) {
    document.getElementById("header-temp").style.animationName = styles.slideInDown;
    document.getElementById("header-temp").style.animationFillMode = "forwards";

  } else {
    document.getElementById("header-temp").style.animationName = styles.slideOutUp;
    document.getElementById("header-temp").style.animationFillMode = "forwards";
  }
  prevScrollpos = currentScrollPos;
}

export default function Header() {
    return(
        <div id="nav-header">
            <StyleRoot>
            <div id="header-temp" className={styles.header} style={animation.slideInDown}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img src={logo} alt="P" className={styles.logo}></img>
                <div >
                    <Link smooth to="/portfolio/#about" href="/#">About Me</Link>
                    <Link smooth to="/portfolio/#projects" href="/#">Projects</Link>
                    <Link smooth to="/portfolio/#contact" href="/#">Contact</Link>

                    {/* <a href='/#'>Certificates</a> */}
                    <a href='/#'>Contact</a>
                </div>
                <a style={{color : '#c4b6ab'}} rel="noopener noreferrer" target="_blank" href={resume}><button>Resume</button></a>
            </div>
            </StyleRoot>
        </div>
    )
}


