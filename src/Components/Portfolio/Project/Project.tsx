import React from "react"
import {Paper} from "@material-ui/core"
import styles from "./Project.module.css"

type ProjectPropsType = {

}

export const Project: React.FC<ProjectPropsType> = () => {
    return(
            <Paper className={styles.root}>
                Project Project
                Project  Project
                Project  Project
                Project   Project
                Project
            </Paper>
    )
}