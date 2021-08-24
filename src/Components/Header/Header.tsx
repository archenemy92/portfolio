import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import ContactsIcon from "@material-ui/icons/Contacts"
import ReceiptIcon from "@material-ui/icons/Receipt"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import WorkIcon from "@material-ui/icons/Work"
import {NavLink} from "react-router-dom"
import styles from "./Header.module.css"

export const Header: React.FC = () => {

    return (
        <AppBar position="static" style={{backgroundColor: "black"}}>
            <Toolbar variant="dense" className={styles.appBarContent} >
                <Typography variant="h6" color="inherit" className={styles.title}>
                    Portfolio
                </Typography>
                <div className={styles.link}>
                    <Home/>
                    <AboutMe/>
                    <Portfolio/>
                    <News/>
                    <Contacts/>
                </div>
            </Toolbar>
        </AppBar>
    )
}


const Home: React.FC = () => {
    return (
        <IconButton aria-label={"home"}>
            <NavLink to={"/home"} className={styles.icon} activeClassName={styles.active}>
                <HomeIcon/>
            </NavLink>
        </IconButton>
    )
}
const AboutMe: React.FC = () => {
    return (
        <IconButton aria-label={"me"}>
            <NavLink to={"/aboutMe"} className={styles.icon} activeClassName={styles.active}>
                <AccountCircleIcon/>
            </NavLink>
        </IconButton>
    )
}

const Portfolio: React.FC = () => {
    return (
        <IconButton aria-label={"portfolio"}>
            <NavLink to={"/portfolio"} className={styles.icon} activeClassName={styles.active}>
                <WorkIcon/>
            </NavLink>
        </IconButton>
    )
}
const News: React.FC = () => {
    return (
        <IconButton aria-label={"news"}>
            <NavLink to={"/news"} className={styles.icon} activeClassName={styles.active}>
                <ReceiptIcon/>
            </NavLink>
        </IconButton>
    )
}

const Contacts: React.FC = () => {
    return (
        <IconButton aria-label={"contacts"}>
            <NavLink to={"/contacts"} className={styles.icon} activeClassName={styles.active}>
                <ContactsIcon/>
            </NavLink>
        </IconButton>
    )
}