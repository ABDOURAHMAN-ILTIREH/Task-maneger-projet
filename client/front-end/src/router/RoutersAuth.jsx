import React from 'react'
import {Route,Routes,Navigate} from "react-router-dom"
import Layout from '../layout/Layout'
import CoverBoards from '../components/container/Auth/CoverBoardsWorks/CoverBoards'
import CoverBoardsDetails from '../components/container/Auth/coverBoardsDetails/ForToDo'



export const RoutersAuth = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/Layout' />} /> 
        <Route path="/Layout" element={< Layout/>} /> 
        <Route path="/Boards/:id/" element={<CoverBoards/>} />
        <Route path='/Boards/:id' element={< CoverBoardsDetails/>} /> 
    </Routes>
  )
}

