import {createStyles, makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            [theme.breakpoints.down(1240)]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "auto"
            }

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
            margin: "50px 0 0 0"
        },
        descBlock: {
            "& > *": {
                minWidth: "100px",
                maxWidth: "300px",
                textAlign: "start",
                color: "white",
                margin: "10px 0 10px 0",
                [theme.breakpoints.down(1240)]: {
                    maxWidth: "300px",
                }
            },
            display: "flex",
            alignContent: "center",
            margin:" 10px auto",
            justifyContent: "space-evenly",
            [theme.breakpoints.down(1240)]: {
                flexDirection: "column",
                alignItems: "center",
            },

        },
        desc: {
            height: "auto",
            maxHeight: "90px",
            overflow: "hidden",
            [theme.breakpoints.down(1240)]: {
                maxHeight: "85px",
            }
        },
        info: {
            padding: "0 3px 0 0",
            [theme.breakpoints.down(1240)]: {
                maxWidth: "300px",
                padding: "0"
            }
        },
        buttonMore: {
            color: "white",
            width: "100%",
            margin: "20px 0 0 0",
            border: "1px solid white"
        },
        modal: {
            position: "absolute",
            width: "40%",
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            display: "flex",
            alignContent: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            [theme.breakpoints.down(1240)]: {
                width: "95%",
                display:"flex",
                flexDirection: "column",
                alignContent: "center"
            },
        },

        modal_codeSkill: {
            width: "50%",
            margin: "0 50px 0 10px",
            [theme.breakpoints.down(1240)]: {
                margin: "0 auto"
            },
        },
        modal_langSkill: {
            width: "50%",
            margin: "0 10px 0 50px",
            [theme.breakpoints.down(1240)]: {
                margin: "0 auto"
            },
        }

    })
)