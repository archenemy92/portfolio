import React, {useState} from "react"
import {Card} from "../Common/Card"
import styles from "./Portfolio.module.css"
import {v1} from "uuid"

let cards = [
    {
        id: v1(),
        title: "JS",
        link: "/",
        filter: "js",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&usqp=CAU"
    },
    {
        id: v1(),
        title: "TS",
        link: "/",
        filter: "ts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&usqp=CAU"
    },
    {
        id: v1(),
        title: "React",
        link: "/",
        filter: "ts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&usqp=CAU"
    },
    {
        id: v1(),
        title: "Redux",
        link: "/",
        filter: "ts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&usqp=CAU"
    },
    {
        id: v1(),
        title: "MaterialUi",
        link: "/",
        filter: "other",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&usqp=CAU"
    },
]
let liArr = [
    {id:v1(), value: "ALL"},
    {id:v1(), value: "JS"},
    {id:v1(), value: "TS"},
    {id:v1(), value: "OTHER"},
]
export const Portfolio: React.FC = () => {

    const [state, setState] = useState(cards)
    const [active, setActive] = useState("ALL")

    let onClickHandler = (e: React.MouseEvent<HTMLLIElement>, filter: string) => {
        if (filter === "ALL") {
            setState(cards)
            setActive(filter)
            return
        }

        let newState = cards.filter(el => el.filter.toUpperCase() === filter)
        setState(newState)
        setActive(filter)
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h5> MY PROJECTS </h5>
                </div>
                <div className={styles.list}>
                    <ul>
                        {liArr.map(li=> <LI key={li.id}
                            style={active===li.value? styles.active: styles.unActive}
                            value={li.value}
                            callback={onClickHandler}/>)}
                    </ul>
                </div>
            </div>
            <div className={styles.content}>
                {state.map(p => <Card key={p.id} {...p}/>)}
            </div>
        </div>
    )
}

type LIPropsType = {
    style: string | undefined
    value: string
    callback: (e: React.MouseEvent<HTMLLIElement>, title:string) => void
}

const LI: React.FC<LIPropsType> = ({style, value, callback}) => {
    return (
        <li
            onClick={(e)=> {
                callback(e, value)
            }}
            className={style}
        >
            {value}
        </li>
    )
}