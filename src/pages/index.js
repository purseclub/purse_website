import * as React from "react"
import NavigationBar from "../components/navigationBar"
import GlobalStyle from "../styles/globalStyle"
import LandingPage from "./landingPage"


// markup
const IndexPage = () => {
  return (
    <>
    <GlobalStyle/>
    <NavigationBar/>
    <LandingPage/>
    </>
  )
}

export default IndexPage
