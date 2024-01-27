import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DepartmentRegistration from '../Department/DepartmentRegistration'
import Home from './HomeMenu/Home'


function Menu() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<DepartmentRegistration />} />
            <Route path="/students" element={<DepartmentRegistration />} />
        </Routes>
    </>
  )
}

export default Menu