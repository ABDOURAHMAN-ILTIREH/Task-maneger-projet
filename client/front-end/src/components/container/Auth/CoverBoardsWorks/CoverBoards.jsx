import React,{useState,useContext} from 'react'
import "./CoverBoards.css"
import HeaderAuth from '../../../page/HeaderAuth/HeaderAuth'
import {CreateTaskContext} from "../../../../context/TodoContext/TodoCreateTaks"

import {CreateProjectsContext} from "../../../../context/CreateProjects/CreateProjectsContext"
import ForToDo from '../coverBoardsDetails/ForToDo'

const CoverBoards = () => {
    const {Projet} = useContext(CreateProjectsContext);

    const [coverDetails,setCoverDetails] = useState(false);


    return (
    <>
        <HeaderAuth />
        <div className='CoverBoards'>
            <h1 className='title_coverBoard'>CoverBoards</h1>
            <div className="cover-Projects-content">
                    <div className="Todo_cover card">
                        <div className="top_title">
                            <h3 className='cover_title'>Todo</h3>
                            <span>...</span>
                        </div>
                        <div className="cover_content">
                            {
                                Projet.slice(0).reverse().map(item =>(
                                    <div className="task_landing" key={item.id}>
                                        <div>
                                            
                                        <p>{item.contentTypes.ToDO}</p>
                                                {
                                                    coverDetails && (<ForToDo {...item} setTaskTodo={setTaskTodo}  setCoverDetails={setCoverDetails}/>)
                                                }
                                        </div>
                                        <span>...</span>
                                    </div>
                                ))
                            }
                            
                               
                                    <div className="add_task">
                                    <textarea  placeholder='Enter a title for this card'/>
                                    <button className='addCard button'>Add card</button>
                                    <button className='cancel button'>cancel</button>   
                                </div>
                             
                                    <p className="add_div" ><span>+</span> Add a card</p>    
                                
                            
                            
                        </div>
                        </div>
                        </div>
        </div>
    </>
  )
}

export default CoverBoards