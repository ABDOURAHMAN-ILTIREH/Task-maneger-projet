import React,{useState,useContext} from 'react'
import {MdClose} from "react-icons/md"
import {CreateProjectsContext} from "../../../../context/CreateProjects/CreateProjectsContext"
const CreateBoardCart = ({setCard}) => {
  const [name,setName] = useState('');
  const {NewCreateProject} = useContext(CreateProjectsContext);


  const SubmitEvent = (e) =>{
    e.preventDefault();
    if(name == '') {
      return  console.log("please provide a value");
    }
    let NewTransaction = {
      id: Math.floor(Math.random()*10000),
      name:name
    } 
    setName(e.target.value = '');
    NewCreateProject(NewTransaction);
    setCard(false);
  }

  return (
    <div className='CreateBoardCart'>
        <div className="boards_wrapper">
          <div className="board_head">
            <h1 className='board_title'>board title</h1>   
            <MdClose className='icons' onClick={()=>setCard(false)}/>
          </div>
          <input type="text" className="input_board" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <button className='submit_board' onClick={SubmitEvent}>Create</button>
        </div>
    </div>
  )
}

export default CreateBoardCart