import React, {useState} from "react"
import {Card} from "../Common/Card"
import styles from "./Portfolio.module.css"
import {v1} from "uuid"

let array = [
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

export const Portfolio: React.FC = () => {

    const [state, setState] = useState(array)

    let onClickHandler = (filter: string) => {
        if (filter === "all") {
            setState(array)
            return
        }

        let newState = array.filter(el => el.filter === filter)
        setState(newState)
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h5> MY PROJECTS </h5>
                </div>
                <div className={styles.list}>
                    <ul>
                        <li onClick={() => onClickHandler("all")}>All</li>
                        <li onClick={() => onClickHandler("js")}>JS</li>
                        <li onClick={() => onClickHandler("ts")}>React_TS</li>
                        <li onClick={() => onClickHandler("other")}>Redux</li>
                    </ul>
                </div>
            </div>
            <div className={styles.content}>
                {state.map(p => <Card key={p.id} {...p}/>)}
            </div>
        </div>
    )
}