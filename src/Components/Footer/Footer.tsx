import React from "react"
import {BottomNavigation} from "@material-ui/core"
import styles from "./Footer.module.css"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import {NavLink} from "react-router-dom"

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: "rgba(63,65,92,0.75)",
            margin: "3px 0 0 0",
        },

    }),
)


export const Footer: React.FC = () => {
    const classes = useStyles()

    return (
        <BottomNavigation className={`${classes.root} ${styles.footer}`}>
                <NavLink to={"/#"}>link</NavLink>
                <NavLink to={"/#"}>link</NavLink>
                <NavLink to={"/#"}>link</NavLink>
                <NavLink to={"/#"}>link</NavLink>
        </BottomNavigation>
    )
}


