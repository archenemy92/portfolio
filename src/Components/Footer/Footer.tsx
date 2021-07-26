import React from "react"
import {BottomNavigation} from "@material-ui/core"
import styles from "./Footer.module.css"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import {NavLink} from "react-router-dom"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TelegramIcon from "@material-ui/icons/Telegram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: "black",
            margin: "auto 0 0 0",

            "& > a": {
                color: "white",
            }
        },

    }),
)


export const Footer: React.FC = () => {
    const classes = useStyles()

    return (
        <BottomNavigation className={`${classes.root} ${styles.footer}`}>
            <NavLink to={"/#"}><FacebookIcon/></NavLink>
            <NavLink to={"/#"}><InstagramIcon/></NavLink>
            <NavLink to={"/#"}><TelegramIcon/></NavLink>
            <NavLink to={"/#"}><LinkedInIcon/></NavLink>
        </BottomNavigation>
    )
}


