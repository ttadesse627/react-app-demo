import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DepartmentRegistration from './Department/DepartmentRegistration'
import Home from './HomeMenu/Home'
import Navbar from './Navbar'
import StudentRegistration from './Student/StudentRegistration'


function Menu() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<DepartmentRegistration />} />
          <Route path="/students" element={<StudentRegistration />} />
      </Routes>
    </>
  )
}

export default Menu