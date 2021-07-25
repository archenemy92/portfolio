import React, {useState} from "react"
import {createStyles, makeStyles} from "@material-ui/core/styles"
import {Button, useMediaQuery, useTheme} from "@material-ui/core"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down(950)]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0"
            },
            margin: "0 0 0 20%",

        },
        avatar: {
            "& > *": {
                width: "60%",
                display: "flex",
                margin: "5vh 0 0 0"

            },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "20px 0 0 0"
        },
        descBlock: {
            "& > *": {
                minWidth: "100px",
                maxWidth: "300px",
                textAlign: "start",
                color: "white",
                margin: "10px 0 10px 0",
                [theme.breakpoints.down(950)]: {
                    maxWidth: "300px",
                }
            },
            display: "flex",
            width: "60%",
            alignContent: "center",
            margin: "0 0 0 20%",
            justifyContent: "space-between",

            [theme.breakpoints.down(1350)]: {
                flexDirection: "column",
                alignItems: "center",
            },
            [theme.breakpoints.down(850)]: {
                margin: "0"
            },

        },
        desc: {
            height: "auto",
            maxHeight: "90px",
            overflow: "hidden",
            [theme.breakpoints.down(950)]: {
                maxHeight: "85px",
            }
        },
        info: {
            padding: "0 3px 0 0",
            [theme.breakpoints.down(950)]: {
                maxWidth: "300px",
                padding: "0"
            }
        },
        buttonMore: {
            color: "white",
            width: "100%",
            margin: "20px 0 0 0",
            border: "1px solid white"
        }


    })
)

export const MainContent: React.FC = () => {
    let classes = useStyles()
    const [tap, setTap] = useState<boolean>(false)

    const theme = useTheme()
    const showNavbar = useMediaQuery(theme.breakpoints.up("md"))

    if (tap) {
        classes = {
            ...classes,
            desc: ""
        }
    }
    if (!tap) {
        classes = {
            ...classes,
            desc: classes.desc
        }
    }

    return (
        <div className={classes.root}>
            {showNavbar && <h1 style={{color: "white", textAlign: "center", padding: "30px 0 0 0"}}>Portfolio</h1>}
            <div className={classes.avatar}>
                <img
                    src={"https://st3.depositphotos.com/2760050/31696/i/1600/depositphotos_316961086-stock-photo-what-if-man-with-bristle.jpg"}
                    alt={"mainPhoto"}/>
            </div>
            <div className={classes.descBlock}>
                <div>
                    <div className={classes.desc}>
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply
                        dummy text of the printing
                        and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the ,
                        when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged
                        . It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.

                        Why do we use it?
                        It is a long established fact that
                        a reader will be distracted by the readable
                        content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has
                        a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop
                        publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem
                        ipsum' will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).
                    </div>
                    {tap
                        ?<Button className={classes.buttonMore} onClick={() => setTap(!tap)}>Hide</Button>
                        :<Button className={classes.buttonMore} onClick={() => setTap(!tap)}>More</Button>}
                </div>
                <div className={classes.info}>
                    <div>Address: UA64240, Kharkiv</div>
                    <div>Age: 28</div>
                    <div>Birthday: 16/09/1992</div>
                    <div>Email: 19archenemy92@gmail.com</div>
                    <div>Freelance: no</div>
                    <div>Phone: +380990510506</div>
                    <div>Study: yes</div>
                </div>
            </div>
        </div>
    )
}