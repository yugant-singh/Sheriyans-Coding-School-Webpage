import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Hero from './components/Hero'

import CardSection from './components/card/CardSection'
import Sections from './Sections'
import { Route, Routes } from 'react-router-dom'
import Course from './pages/Course'
import Home from './pages/Home'
import Bootcamps from './pages/Bootcamps'
import Classrooms from './pages/Classrooms'
import About from './pages/Callback'
import Callback from './pages/Callback'

const App = () => {
 
  return (
    
  <div>
   

<Routes>
  <Route path='/' element={<Sections/>}/>
  <Route path='/course' element={<Course/>}/>
  <Route path='/bootcamp' element={<Bootcamps/>}/>
  <Route path='/classroom' element={<Classrooms/>}/>
   <Route path='/callback' element={<Callback/>}/>
</Routes>

  </div>
  )
}

export default App