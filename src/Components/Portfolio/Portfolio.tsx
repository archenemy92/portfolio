import React from "react"
import {Project} from "./Project/Project"
import styles from "./Portfolio.module.css"

export const Portfolio: React.FC = () => {
    return (
        <div className={styles.main}>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
        </div>
    )
}