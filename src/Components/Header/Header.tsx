import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

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
    }),
)
export const Header: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root} style={{backgroundColor: "black"}}>
            <AppBar position="static" style={{backgroundColor: "black", borderBottom: "2px solid white"}} >
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}