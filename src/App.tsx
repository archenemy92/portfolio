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
import {useMediaQuery, useTheme} from "@material-ui/core"

export const App = () => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <div className="content">
            <div className={"nav"}>
                {isDesktop
                    ? <div className={"navigation"}> <Nav/> </div>
                    : <div className={"header"}> <Header/> </div>}
            </div>

            <div className={"main_content"}>
                <div className={"main_components"}>
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
