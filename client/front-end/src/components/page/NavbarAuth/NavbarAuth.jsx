import React from 'react'
import "./NavbarAuth.css"
import {FaPlus, FaRegArrowAltCircleUp } from 'react-icons/fa'
import {MdOutlineAccountTree, MdWorkspacesOutline,MdOutlineDashboard, MdOutlineSettings} from "react-icons/md"
const NavbarAuth = () => {
  return (
    <div className='NavbarAuth'>
        <div className="work_space_btn">
           <span className='title_nav'>Workspaces</span>
           <FaPlus className='icons'/>
        </div>
        <div className="projects_Created">
            <div className="cover_project_wrapper">
                <div className="Admin_Workspace">
                    <div className="space_cover">
                        <MdWorkspacesOutline className='icons_workSpace'/>
                        <p className='spaceName'>Lorem Inc</p> 
                    </div>
                    <FaRegArrowAltCircleUp className='icons'/>
                </div>
                <div className="inner_activite">
                    <div className="inner_wrapper">
                        <MdOutlineDashboard className='icons'/>
                        <span className='inner_text'>Boards</span>
                    </div>
                    <div className="inner_wrapper">
                        <MdOutlineAccountTree className='icons'/>
                        <span className='inner_text'>Activity</span>
                    </div>
                    <div className="inner_wrapper">
                        <MdOutlineSettings className='icons'/>
                        <span className='inner_text'>Settings</span>
                    </div>
                </div>
            </div>
            <div className="cover_project_wrapper">
                <div className="Admin_Workspace">
                    <div className="space_cover">
                        <MdWorkspacesOutline className='icons_workSpace'/>
                        <p className='spaceName'>Lorem Inc</p> 
                    </div>
                    <FaRegArrowAltCircleUp className='icons'/>
                </div>
                <div className="inner_activite">
                    <div className="inner_wrapper">
                        <MdOutlineDashboard className='icons'/>
                        <span className='inner_text'>Boards</span>
                    </div>
                    <div className="inner_wrapper">
                        <MdOutlineAccountTree className='icons'/>
                        <span className='inner_text'>Activity</span>
                    </div>
                    <div className="inner_wrapper">
                        <MdOutlineSettings className='icons'/>
                        <span className='inner_text'>Settings</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarAuth