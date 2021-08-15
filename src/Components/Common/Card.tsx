import React from "react"
import {Paper} from "@material-ui/core"
import styles from "./Card.module.css"

type ProjectPropsType = {
    title: string
    link: string
    image: string
}

export const Card: React.FC<ProjectPropsType> = ({title, link, image}) => {

    return (
        <div style={{textAlign: "center"}}>
            {title}
            <Paper className={styles.root}>
                <a href={link} className={styles.link}>
                    <img
                        src={image}
                        alt={"Kartinka"}
                        className={styles.img}

                    />
                </a>
            </Paper>
        </div>
    )
}