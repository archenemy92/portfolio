import React from "react"
import "./App.css"
import {Header} from "./Components/Header/Header"
import {Nav} from "./Components/Nav/Nav"
import {AboutMe} from "./Components/AboutMe/AboutMe"
import {Route} from "react-router-dom"
import {Home} from "./Components/Home/Home"
import {Portfolio} from "./Components/Portfolio/Portfolio"
import {News} from "./Components/News/News"
import {Contacts} from "./Components/Contacts/Contacts"

export const App = () => {
    return (
        <div className="App">
            <div className={"content"}>
                <Header/>
                <Nav/>
                <div className={"main_content"}>
                    <Route path={"/home"} render={() => <Home/>}/>
                    <Route path={"/aboutMe"} render={() => <AboutMe/>}/>
                    <Route path={"/portfolio"} render={() => <Portfolio/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/contacts"} render={() => <Contacts/>}/>
                </div>
            </div>
        </div>
    )
}
