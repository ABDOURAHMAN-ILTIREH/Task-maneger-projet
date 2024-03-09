import {useState} from 'react'
import {Link} from "react-router-dom"
import "./HeaderAuth.css"
import logo from "../../../assets/image/logo.svg"
import userImage from "../../../assets/image/teacher-1.png"
import {MdWorkspacesOutline,MdOutlineKeyboardDoubleArrowDown, MdSettings, MdLogout, MdClose} from "react-icons/md";
import { FaUser,FaArrowRight } from 'react-icons/fa';
import CoverWorkSpace1 from './CoverWorkSpace1'

const HeaderAuth = () => {

  const [display, setDisplay] = useState(false);
  const [account, setAccount] = useState();
  return (
    <div>   
        <div className="Header_Auth">
            <div className="logo_Header">
                <img src={logo} alt="logo" />
                <h2 className='title'>TASK FILE</h2>
                <button className="create_Workspace">Create</button>
            </div>
            <div className="Auth_spaceWork_Wrapper">
                 <div className="spaceWork_content">
                  <div className="Admin_Workspace">
                    <MdWorkspacesOutline className='icons_workSpace'/>
                    <span className='spaceName'>Lorem Inc</span>
                  </div>
                    <MdOutlineKeyboardDoubleArrowDown onClick={()=>setDisplay(true)}/>
                 </div>
                 <div className="Auth_User" onClick={()=>setAccount(!account)}>
                   <img src={userImage} alt="user_img" id='imgUser'/>
                   
                  {
                    account && (
                    <div className='UserAccountCover'>
                      <div className="close_window">
                          <MdClose className='close_icons' onClick={()=>setAccount(!account)}/>
                      </div>
                      <div className="cover_account_head">
                            <img src={userImage} alt="user_img" id='imgUser'/>
                            <h3 className="userName">jammes aldrino</h3>
                       </div>
                       <hr />
                       <div className="cover_account_bottom">
                          <Link to="" className='Link_cover'>
                            <div className="left_content">
                              <FaUser className='icons'/>
                              <p>edit profile</p>
                            </div>
                             <FaArrowRight className='icons'/>
                          </Link>
                        </div>
                       <div className="cover_account_bottom">
                          <Link to="" className='Link_cover'>
                            <div className="left_content">
                              <MdSettings className='icons'/>
                              <p>settings & privacy</p>
                            </div>
                             <FaArrowRight className='icons'/>
                          </Link>
                        </div>
                       <div className="cover_account_bottom">
                          <Link to="" className='Link_cover'>
                            <div className="left_content">
                              <MdLogout className='icons'/>
                              <p>logout</p>
                            </div>
                             <FaArrowRight className='icons'/>
                          </Link>
                        </div>
                     </div>
                    )

                  }
                 </div>
            </div>
        </div>
        <hr className='line_Auth'/>
        {
          display && ( <CoverWorkSpace1 setDisplay={setDisplay}/>)
        }
    </div>
  )
}

export default HeaderAuth