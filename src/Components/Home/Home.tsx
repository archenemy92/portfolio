import React from "react"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import {Footer} from "../Footer/Footer"
import {NavLink} from "react-router-dom"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TelegramIcon from "@material-ui/icons/Telegram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "37vh 0 0 0",
            [theme.breakpoints.down(1400)]: {
                flexDirection: "column",
                alignItems: "center",
                margin: "10% 0 0 0"
            },
        },
        img: {
            height: "30vh",
            [theme.breakpoints.down(400)]: {
                width: "85vw",
            },
        },
        imageCont: {
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down(1300)]: {
                flexDirection: "column",
                alignItems: "center"
            },

        },
        desc: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 10px",
            width: "300px",
            [theme.breakpoints.down(1300)]: {
                alignItems: "center",
                width: "275px",
            },
        },
        head: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.down(1300)]: {
                fontSize: "2vh",
                alignItems: "center"
            },
            [theme.breakpoints.down(500)]: {
                fontSize: "2vh",
            },
        },
        imgBox: {
            padding: "10px",
        }
    })
)

export const Home: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.imageCont}>
                <div>
                    <div className={classes.imgBox}>
                        <img
                            className={classes.img}
                            alt={"mainPict"}
                            src={"https://st3.depositphotos.com/2760050/31696/i/1600/depositphotos_316961086-stock-photo-what-if-man-with-bristle.jpg"}
                        />
                    </div>
                </div>
                <div className={classes.desc}>
                    <div className={classes.head}>
                        <h2 style={{textAlign:"center", marginTop:"0"}}>VADYM BORSHCH</h2>
                        <p style={{padding: "0 30px"}}>
                            text text text text text
                            text text text text text
                            text text text text text
                        </p>
                    </div>
                    <Footer>
                        <NavLink to={"/#"}><FacebookIcon/></NavLink>
                        <NavLink to={"/#"}><InstagramIcon/></NavLink>
                        <a target="_blank" href="https://t.me/Borshche" rel="noreferrer"><TelegramIcon/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/vadym-borshch-31829621a" rel="noreferrer"><LinkedInIcon/></a>
                    </Footer>
                </div>
            </div>
        </div>
    )
}