import React , { useState } from "react"
import ReactDOM from "react-dom"
import Profile from "./right-component/developer-desc"
import Content from "./components/Content"
import Navigation from "./left-component/Navigation"
import './style.css'

const App = () => {
  
  return (
  <div className="w-full h-auto bg-main-color flex xl:flex-row xl:pr-80 md:flex-col-reverse sm:flex-col-reverse">
    <Navigation />

    <Content />
    
    <Profile/>
  </div>
  )
}

export default App;
