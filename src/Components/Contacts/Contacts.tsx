import React, {ChangeEvent, useState} from "react"
import styles from "./Contacts.module.css"
import {Button} from "@material-ui/core"

export const Contacts: React.FC = () => {

    return (
        <form className={styles.form}>
            <h1>CONTACT ME</h1>
            <Input value={"NAME"}/>
            <Input value={"EMAIL"}/>
            <TextArea value={"MESSAGE"}/>
            <Button className={styles.button}>SEND</Button>
        </form>
    )
}

type InputPropsType = {
    value: string
}

const Input: React.FC<InputPropsType> = ({value, ...restProps}) => {

    const [text, setText] = useState("")
    const [isTap, setIsTap] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsTap(true)
        setText(e.currentTarget.value)
        if (!e.currentTarget.value) {
            setIsTap(false)
        }
    }

    return (
        <div>
            <label>
                <div className={styles.label}>{isTap ? value : ""}</div>
                <div className={styles.inputBox}>
                    <input
                        value={text}
                        onBlur={() => setIsTap(false)}
                        onChange={onChangeHandler}
                        className={styles.input}
                        type={"text"}
                        placeholder={value}
                        {...restProps}
                    />
                </div>

                {/*{error && <span className={s.error}>{error}</span>}*/}
            </label>
        </div>
    )
}

type TextareaPropsType ={
    value: string
}

const TextArea: React.FC<TextareaPropsType> = ({value}) => {
    const [text, setText] = useState("")
    const [isTap, setIsTap] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setIsTap(true)
        setText(e.currentTarget.value)
        if (!e.currentTarget.value) {
            setIsTap(false)
        }
    }

    return(
        <div>
            <label >
                <div className={styles.label}>{isTap? value: ""}</div>
                <div  className={styles.textAreaContainer}>
                     <textarea
                         value={text}
                         onChange={onChangeHandler}
                         onBlur={()=>setIsTap(false)}
                         className={styles.textArea}
                         placeholder={value}
                     />
                </div>
            </label>
        </div>
    )
}