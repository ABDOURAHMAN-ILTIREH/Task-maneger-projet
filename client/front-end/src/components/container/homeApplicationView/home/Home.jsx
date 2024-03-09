import React from 'react'
import "./Home.css"
import { Navbar } from '../../../../Page/Content/Navbar/Navbar'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
          <div className="wrapper_center">
              <h1 className='task_title'>Task helps teams to work flexible.</h1>
              <span className='inner_title'>Work Forward.</span>
              <p className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci mollitia eaque, harum nihil quidem magni quis culpa! Ipsum </p>
              <button className='Register'>Get Task File For Free</button>
          </div>
      </div>
    </>
  )
}

export default Home