import React from "react"
import {BottomNavigation} from "@material-ui/core"
import styles from "./Footer.module.css"
import {createStyles, makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: "inherit",
            margin: "auto 0",
            "& > a": {
                color: "white",
            }
        },

    }),
)


export const Footer: React.FC = ({...restProps}) => {
    const classes = useStyles()

    return (
        <BottomNavigation className={`${classes.root} ${styles.footer}`}>
            {restProps.children}
        </BottomNavigation>
    )
}

