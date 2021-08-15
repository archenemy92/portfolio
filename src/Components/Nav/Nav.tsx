import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {NavLink} from "react-router-dom"
import {Footer} from "../Footer/Footer"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        links: {
            "& > a": {
                textDecoration: "none",
                margin: "10px",
                color: "white",
            },
            "& > a.active": {
                color: "hsl(40, 7%, 74%)"
            },
            "& > a:hover": {
                fontWeight: "bold"
            }
        }
    })
)

export const Nav: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.links}>
            <h2 style={{color:"#63655b"}}>
                REACT_DEV
            </h2>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/aboutMe"}>About</NavLink>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
            <NavLink to={"/news"}>News</NavLink>
            <NavLink to={"/contacts"}>Contacts</NavLink>
            <Footer>
                <p>
                    © 2021 BORSHCH
                    <br/>  Created by ME
                </p>
            </Footer>
        </div>
    )
}