import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "black",
            [theme.breakpoints.up(950)]: {
                display: "none"
            },
            position: "fixed",
            zIndex: 2,
            width: "100vw"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            [theme.breakpoints.down(300)]: {
                fontSize: "14px",
            },
        },
        headerNav: {
            "& > *": {
                margin: "0 0 0 -20px"
            },
            margin: "0 0 0 auto"
        },
        icons: {
            color: "white"
        }
    }),
)
export const Header: React.FC = () => {
    let classes = useStyles()


    return (
        <div className={classes.root} style={{backgroundColor: "black"}}>
            <AppBar position="static" style={{backgroundColor: "black", borderBottom: "2px solid white"}}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Portfolio
                    </Typography>
                    <div className={classes.headerNav}>
                        <Home/>
                        <AboutMe/>
                        <Portfolio/>
                        <News/>
                        <Contacts/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
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
        <IconButton aria-label={"contacts"} >
            <NavLink to={"/contacts"} className={styles.icon} activeClassName={styles.active}>
                <ContactsIcon/>
            </NavLink>
        </IconButton>
    )
}