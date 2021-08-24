import React from "react"
import styles from "./News.module.css"
import {Card} from "../Common/Card"
import {v1} from "uuid"

let state = [
    {
        id: v1(),
        title: "react",
        link: "/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw9pU17B166dKHpQuyBK5SWTbMic0RWqxxA&usqp=CAU"
    },
    {
        id: v1(),
        title: "ts",
        link: "/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw9pU17B166dKHpQuyBK5SWTbMic0RWqxxA&usqp=CAU"
    },
    {
        id: v1(),
        title: "js",
        link: "/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw9pU17B166dKHpQuyBK5SWTbMic0RWqxxA&usqp=CAU"
    },
    {
        id: v1(),
        title: "redux",
        link: "/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw9pU17B166dKHpQuyBK5SWTbMic0RWqxxA&usqp=CAU"
    },
    {
        id: v1(),
        title: "other",
        link: "/",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw9pU17B166dKHpQuyBK5SWTbMic0RWqxxA&usqp=CAU"
    }
]

export const News: React.FC = () => {
    return (
        <div>
            <h5 style={{width:"100%", textAlign: "center", marginBottom:"50px"}}> NEWS </h5>
            <div className={styles.content}>
                {state.map(p => <Card key={p.id} {...p}/>)}
            </div>
        </div>
    )
}