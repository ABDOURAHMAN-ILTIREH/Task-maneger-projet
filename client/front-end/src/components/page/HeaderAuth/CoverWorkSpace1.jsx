import React from 'react'
import './HeaderAuth.css'
import {MdWorkspacesOutline,MdSettings,MdClose} from "react-icons/md"
import {FaPlus} from "react-icons/fa"

const CoverWorkSpace1 = ({setDisplay}) => {
  return (
    <div className='CoverWorkSpace1'>
        <div className="close_window">
            <MdClose className='close_icons' onClick={()=>setDisplay(false)}/>
        </div>
        <div className="cover_wrapper">
            <div className="Admin_Workspace">
                <MdWorkspacesOutline className='icons_workSpace'/>
                <div className="space_cover">
                    <p className='spaceName'>Lorem Inc</p>
                    <span>Admin</span>
                </div>
            </div>
        </div>
        <div className="setting_content">
            <MdSettings className='setting_img' />
            <h3 className='title_manege'>Manage Organization</h3>
        </div>
         <hr />
         {/* <div className="cover_wrapper">
            <div className="Admin_Workspace">
                <MdWorkspacesOutline className='icons_workSpace'/>
                <div className="space_cover">
                    <p className='spaceName'>Lorem Inc</p>
                </div>
            </div>
        </div>
         <div className="cover_wrapper">
            <div className="Admin_Workspace">
                <MdWorkspacesOutline className='icons_workSpace'/>
                <div className="space_cover">
                    <p className='spaceName'>Lorem Inc</p>
                </div>
            </div>
        </div>
         <div className="cover_wrapper">
            <div className="Admin_Workspace">
                <MdWorkspacesOutline className='icons_workSpace'/>
                <div className="space_cover">
                    <p className='spaceName'>Lorem Inc</p>
                </div>
            </div>
        </div>
         <div className="cover_wrapper">
            <div className="Admin_Workspace">
                <MdWorkspacesOutline className='icons_workSpace'/>
                <div className="space_cover">
                    <p className='spaceName'>Lorem Inc</p>
                </div>
            </div>
        </div> */}
        <div className="setting_content">
            <FaPlus className='MdPlusOne' />
            <h3 className='title_manege'>Create Organization</h3>
        </div>
    </div>
  )
}

export default CoverWorkSpace1