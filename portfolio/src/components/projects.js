import React, {Component} from 'react'
import styles from './components.module.css'

export default class Projects extends Component {
    constructor() {
        super()
    }

    render() {

        return(
            <div>
                <div id="projects" className={styles.projects}>
                    projects 
                </div>
            </div>
        )
    }
}

function projectModule(props) {
    return(
        <div className={styles.module}>

        </div>
    )
}