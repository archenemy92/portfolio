import React, {useState} from "react"
import {Button, Modal, useMediaQuery, useTheme} from "@material-ui/core"
import style from "./AboutMe.module.css"
import {loremText} from "../../accets/common/loremText"
import {useStyles} from "./useStyles"

export const AboutMe: React.FC = () => {
    let classes = useStyles()
    const [tap, setTap] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const theme = useTheme()
    const showTitle = useMediaQuery(theme.breakpoints.up("md"))

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
            {showTitle && <h1 style={{color: "white", textAlign: "center"}}>Portfolio</h1>}
            <div className={classes.avatar}>
                <img
                    src={"https://st3.depositphotos.com/2760050/31696/i/1600/depositphotos_316961086-stock-photo-what-if-man-with-bristle.jpg"}
                    alt={"mainPhoto"}/>
            </div>
            <div className={classes.descBlock}>
                <div>
                    <div className={classes.desc}>
                        {loremText}
                        <Button className={classes.buttonMore} onClick={handleOpen}>INFO</Button>
                    </div>
                    {tap
                        ? <Button className={classes.buttonMore} onClick={() => setTap(!tap)}>Hide</Button>
                        : <Button className={classes.buttonMore} onClick={() => setTap(!tap)}>More</Button>}
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.modal}>
                        <div className={classes.modal_codeSkill}>
                            <InfoContainer skillSection={"CODE_SKILLS"}>
                                <Info skillTitle={"JS"} skillLevel={"20%"}/>
                                <Info skillTitle={"REACT"} skillLevel={"50%"}/>
                                <Info skillTitle={"TS"} skillLevel={"30%"}/>
                            </InfoContainer>
                        </div>
                        <div className={classes.modal_langSkill}>
                            <InfoContainer skillSection={"LANGUAGE_SKILL"}>
                                <Info skillTitle={"UA"} skillLevel={"90%"}/>
                                <Info skillTitle={"ENG"} skillLevel={"50%"}/>
                                <Info skillTitle={"RUS"} skillLevel={"55%"}/>
                            </InfoContainer>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

type InfoType = {
    skillTitle: string
    skillLevel: string
}

const Info: React.FC<InfoType> = ({skillLevel, skillTitle}) => {
    return (
        <div className={style.root}>
            <span className={style.root_span}>
                <span>{skillTitle}</span>
                <span style={{float: "right"}}>{skillLevel}</span>
            </span>
            <div className={style.background}>
                <div style={{width: "100%", height: "100%"}}>{}</div>
                <div className={style.bar_in} style={{width: `${skillLevel}`}}>{}</div>
            </div>
        </div>
    )
}

type InfoContainerType = {
    skillSection: string
}
const InfoContainer: React.FC<InfoContainerType> = ({skillSection, ...restProps}) => {
    return (
        <div>
            <div>
                <h3>
                    {skillSection}
                </h3>
            </div>
            <div className={style.container}>
                {restProps.children}
            </div>
        </div>
    )
}
