import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from '../pages/HomeComponent'
import AboutUsComponent from '../pages/AboutUsComponent'

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<HomeComponent></HomeComponent>}></Route>
        <Route path='/about-us' element = {<AboutUsComponent></AboutUsComponent>}></Route>
      </Routes>
    </div>
  )
}

export default RouterComponent
