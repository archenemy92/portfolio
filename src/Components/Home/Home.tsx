import React from "react"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import {Footer} from "../Footer/Footer"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            color: "white",
            display: "flex",
            justifyContent: "center",
            width: "60%",
            margin: "15% 0 0 30%",
            [theme.breakpoints.down(950)]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
                margin: "30% 0 0 30%",
            },
        },
        img: {
            height: "30vh",
            [theme.breakpoints.down(500)]: {
                height: "25vh",
            },
        },
        imageCont: {
            display: "flex",
            justifyContent: "start",
            [theme.breakpoints.down(1300)]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },

        },
        desc: {
            width: "40%",
            margin: "0 5px 15px 5%",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down(1300)]: {
                width: "100%"
            },
        },
        head: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down(500)]: {
                fontSize: "2vh"
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
                <div style={{border: "5px solid white"}}>
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
                        <h1>VADYM BORSHCH</h1>
                        <h5 style={{width: "80%"}}>
                            text text text text text
                            text text text text text
                            text text text text text
                        </h5>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}