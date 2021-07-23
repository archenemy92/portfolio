import React from "react"
import "./App.css"
import {Header} from "./Components/Header/Header"
import {Container} from "@material-ui/core"
import {Footer} from "./Components/Footer/Footer"

export const App = () => {
    return (
        <Container fixed className="App">
            <Header/>
            <div className={"content"}>
                Content
            </div>
            <Footer/>
        </Container>
    )
}
