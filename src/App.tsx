import React from "react"
import "./App.css"
import {Header} from "./Components/Header/Header"
import {Nav} from "./Components/Nav/Nav"
import {MainContent} from "./Components/MainContent/MainContent"

export const App = () => {
    return (
        <div className="App">
            <div className={"content"}>
                <Header/>
                <Nav/>
                <div className={"main_content"}>
                    <MainContent/>
                </div>
            </div>
        </div>
    )
}
