import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {useTheme} from "@material-ui/core"
import {useMediaQuery} from "@material-ui/core"
import {NavLink} from "react-router-dom"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "20%",
            backgroundColor: "black",
            display: "flex",
            height: "100vh",
            color: "white",
            flexDirection: "column",
            alignItems:"center",
            fontSize: "20px",
            padding: "10px ",
            position: "fixed",
            zIndex: 1,
            borderRight: "2px solid white"
        },
        links: {
            "& > a": {
                textDecoration: "none",
                margin: "10px",
                color: "white",
            },
            "& > a.active": {
                color: "yellow"
            },
            "& > a:hover": {
                color: "blue"
            },
            margin: "80% 0 0 0",
            display: "flex",
            flexDirection: "column"
        }

    })
)

export const Nav: React.FC = () => {
    const theme = useTheme()
    const showNavbar = useMediaQuery(theme.breakpoints.up("md"))

    const classes = useStyles()

    return (
        <>
            {showNavbar &&
            <div className={classes.root}>
                <div className={classes.links}>
                    <NavLink to={"/home"}>HOME</NavLink>
                    <NavLink to={"/aboutMe"}>ABOUT ME</NavLink>
                    <NavLink to={"/portfolio"}>PORTFOLIO</NavLink>
                    <NavLink to={"/news"}>NEWS</NavLink>
                    <NavLink to={"/contact"}>CONTACT</NavLink>
                </div>
            </div>

            }
        </>
    )
}