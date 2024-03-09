import React from 'react'
import "./CoverBoardsDetails.css"
import { MdClose } from 'react-icons/md'


const ForDone = ({id,TaskDone,setCoverDetails3}) => {
  return (
    <div className='CoverBoardsDetails'>
        <div className="coverDetails_wrapper">
            <div className="content_head">
                <div className="title_head">
                  <h1>{TaskDone}</h1>
                  <p>in list <span style={{textDecoration:"undreline"}}>Done</span></p>    
                </div>
                <MdClose className='icons' onClick={()=>setCoverDetails3(false)}/>
            </div>
        </div>
    </div>
  )
}

export default ForDone