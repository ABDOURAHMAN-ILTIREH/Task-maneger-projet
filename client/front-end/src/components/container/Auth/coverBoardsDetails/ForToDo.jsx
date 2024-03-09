import React,{useState,useContext,useEffect} from 'react'
import "./CoverBoardsDetails.css"
// import { Link } from 'react-router-dom'
import { MdClose, MdCopyAll, MdDelete, MdOutlineDelete, MdOutlineUpdate, MdUpdate } from 'react-icons/md'
import {CreateTaskContext} from "../../../../context/TodoContext/TodoCreateTaks"

const ForToDo = ({id,TaskTodo, Desc,setCoverDetails}) => {
    const [updateTaskTitle,setUpdateTaskTile] = useState(false);
    const [updateTaskDesc,setUpdateTaskDesc] = useState(false);

    const {UpdateTodoTask, CreateTaskTodo} = useContext(CreateTaskContext);

    const [selectedTaskTodo, setSelectedTaskTodo] = useState({
        // id: '',
        // TaskTodo: '',
        // Desc:''
      });

    //   const history = useHistory();
      const currentTaskId = id;

      useEffect(() => {
        const itemId = currentTaskId;
        const selectedTaskTodos = CreateTaskTodo.find(item => item.id === itemId);
        setSelectedTaskTodo(selectedTaskTodos);
      }, [currentTaskId, CreateTaskTodo])
    
      const onChangeTaskTodoTitle = (e) => {
        setSelectedTaskTodo({ ...selectedTaskTodo, TaskTodo: e.target.value })
      }
      const onChangeTaskTodoDesc = (e) => {
        setSelectedTaskTodo({ ...selectedTaskTodo, Desc: e.target.value  })
      }
      
    
      const onSubmit = (e) => {
        e.preventDefault();
        UpdateTodoTask(selectedTaskTodo);
        setUpdateTaskTile(false)
      }

      const onSubmit2 = (e) => {
        e.preventDefault();
        UpdateTodoTask(selectedTaskTodo);
        setUpdateTaskDesc(false)
      }

  return (
    <div className='CoverBoardsDetails'>
        <div className="coverDetails_wrapper">
            <div className="content_head">
                <div className="title_head">
                  {
                    updateTaskTitle ? (
                        <div className="add_task">
                            
                             <textarea className='textarea' placeholder='Update your title task'  name={TaskTodo}
                               value={selectedTaskTodo.TaskTodo} onChange={onChangeTaskTodoTitle}/>

                            <button className='update button' onClick={onSubmit}>Update Title</button>
                            <button className='cancel button' onClick={()=>setUpdateTaskTile(false)}>cancel</button>  
                        </div>
                    ):(
                        <div className='content_wrapper'>
                          <h1>{TaskTodo == '' ? 'Add a title for your task' : TaskTodo}</h1>
                          <MdOutlineUpdate onClick={()=>setUpdateTaskTile(true)} className='icons'/>
                        </div>
                    )
                  }
                  <p>in list <span>Todo</span></p>    
                </div>
                <MdClose className='icons' onClick={()=>setCoverDetails(false)}/>
            </div>
            <div className="content_center">
                  <div className="box_left">  
                  <h2>Description</h2>
                  {
                    updateTaskDesc ? (
                        <div className="add_task">
                             <textarea className='textarea' placeholder='Update your description task'  name={Desc}
                               value={selectedTaskTodo.Desc} onChange={onChangeTaskTodoDesc}/>
                            <button className='update button' onClick={onSubmit2}>Update Description</button>
                            <button className='cancel button' onClick={()=>setUpdateTaskDesc(false)}>cancel</button>  
                        </div>
                    ):( 
                       <p onClick={()=>setUpdateTaskDesc(true)}>{Desc == '' ? 'Add a description for your task': Desc}</p>    
                    )

                    }
                  </div>
                  <div className="box_right">
                      <h2>actions</h2>
                      <div className="button">
                          <button className="copy">
                              <MdCopyAll className='icons'/>
                              copy
                          </button>
                          <button className="delete">
                              <MdOutlineDelete className='icons'/>
                              delete
                          </button>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ForToDo