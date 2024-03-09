import React from 'react'
import "./HomeAuth.css"
import NavbarAuth from '../NavbarAuth/NavbarAuth'
import WorkSpaceCover from '../../container/Auth/CoverWorkSpace/WorkSpaceCover'

const HomeAuth = () => {
  return (
    <section className='SectionAuth'>
        <div className="NavLeft">
            <NavbarAuth/>
        </div>
        <div className="NavRight">
             <WorkSpaceCover />  
        </div>
    </section>
  )
}

export default HomeAuth