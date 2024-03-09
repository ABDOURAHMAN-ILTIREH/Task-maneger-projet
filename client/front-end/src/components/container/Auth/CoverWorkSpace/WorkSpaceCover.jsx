import React,{useState,useContext } from "react";
import CreateBoardCart from './CreateBoardCart'
import "./CoverWorkSpace.css"
import {MdOutlinePerson, MdWorkspacesOutline} from "react-icons/md"
// import Projet from "../../../../assets/fake_data/Projet"

import {CreateProjectsContext} from "../../../../context/CreateProjects/CreateProjectsContext"
import { Link } from "react-router-dom";


const WorkSpaceCover = () => {
  const [card,setCard] = useState(false);
  const {Projet} = useContext(CreateProjectsContext);
  console.log(Projet)


   
  return (
    <div className='WorkSpaceCover'>
      <div className="Admin_Workspace">
        <div className="space_cover">
          <MdWorkspacesOutline className='icons_workSpace'/>
           <p className='spaceName'>Lorem Inc</p>
           </div>
        </div>
        <hr />
        <div className="Auth_User_boards">
          <div className="accout_boards">
            <MdOutlinePerson className='person_icon'/>
            <span className='person_accout'>your boards</span>
          </div>
          <div className="content_board">
              {
                Projet.slice(0).reverse().map(item =>(
                  <Link className="boards_created" key={item.id} to={`/Boards/${item.id}`}>
                    <div className="board_timer">
                        <span>{item.name}</span>
                        <span>1/decembre/2023</span>
                    </div>
                    <h4 className='board_title'>{item.name}</h4>
                  </Link>
                ))
              }
            <div className="create_new_boards" onClick={()=>setCard(true)}>
              <h2 className='text_board'>Create new board</h2>
              <p>unlimited boards</p>
            </div>
          </div>

        </div>
        {
          card && (<CreateBoardCart setCard={setCard}/>)
        }
    </div>
  )
}

export default WorkSpaceCover