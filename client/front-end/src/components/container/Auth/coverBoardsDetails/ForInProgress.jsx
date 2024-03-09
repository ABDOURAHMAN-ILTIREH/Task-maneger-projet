import React from 'react'
import "./CoverBoardsDetails.css"
import { MdClose } from 'react-icons/md'


const ForInProgress = ({id,TaskInProgress,setCoverDetails2}) => {
  return (
    <div className='CoverBoardsDetails'>
        <div className="coverDetails_wrapper">
            <div className="content_head">
                <div className="title_head">
                  <h1>{TaskInProgress}</h1>
                  <p>in list <span>In Progress</span></p>    
                </div>
                <MdClose className='icons' onClick={()=>setCoverDetails2(false)}/>
            </div>
        </div>
    </div>
  )
}

export default ForInProgress