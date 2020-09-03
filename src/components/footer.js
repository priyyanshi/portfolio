import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <a title="Github" rel="noopener noreferrer" href="https://github.com/priyyanshi" target="_blank" className={styles.socialButton}><i className="fa fa-github" style={{color:'#69696B'}}></i></a>
            <a title="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/priyanshi-patel-/" target="_blank" className={styles.socialButton}><i className="fa fa-linkedin" style={{color:'#69696B'}}></i></a>
            <a title="Email" rel="noopener noreferrer" href="mailto: patel.priyanshi@outlook.com" target="_blank" className={styles.socialButton}><i className="fa fa-envelope" style={{color:'#69696B'}}></i></a>
            | Developed by Priyanshi Patel 
        </div>
    )
}