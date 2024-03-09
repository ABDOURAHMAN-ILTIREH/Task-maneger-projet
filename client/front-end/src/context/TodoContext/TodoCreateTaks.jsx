import { createContext,useReducer } from "react";
import UserReducer from "./UseReducer/UseReducer"

const initials = {

    CreateTaskTodo:[],
    CreateTaskInProgress:[],
    CreateTaskDone:[]
}

export const CreateTaskContext = createContext(initials);

export const CreateTaskComponent = ({children})=>{
  
    const [state, Dispatch] = useReducer(UserReducer, initials);
    function CreateNewTodoTask(CreateTaskTodo){
        Dispatch({
         type:"CREAT_TODO_TASK",
         payload: CreateTaskTodo
        })
     }
     //AJOUTE UN  INPROGRESS TASK
     function CreateNewInProgressTask(CreateTaskInProgress){
        Dispatch({
         type:"CREAT_INPROGRESS_TASK",
         payload: CreateTaskInProgress
        })
     }
     //AJOUTE UN DONE TASK
     function CreateNewDoneTask(CreateTaskDone){
        Dispatch({
         type:"CREAT_DONE_TASK",
         payload: CreateTaskDone
        })
    }
    //UPDATE UN TASK TODO
    function UpdateTodoTask(CreateTaskTodo){
        Dispatch({
         type:"UPDATE_TODO_TASK",
         payload: CreateTaskTodo
        })
     }
    //UPDATE UN TASK IN PROGRESS
    function UpdateInProgressTask(CreateTaskInProgress){
       Dispatch({
        type:"UPDATE_INPROGRESS_TASK",
        payload: CreateTaskInProgress
       })
    }
    // UPDATE UN TASK FOR DONE
    function UpdateDoneTask(CreateTaskDone){
        Dispatch({
         type:"UPDATE_DONE_TASK",
         payload: CreateTaskDone
        })
    }
     // SUPPRIME UN TODO TASK
     function DeleteTodoTask(id){
         Dispatch({
             type:"DELETE_TODO_TASK",
             payload: id
         })
     }
    
     // SUPPRIME UN  INPROGRESS TASK
     function DeleteInProgressTask(id){
         Dispatch({
             type:"DELETE_INPROGRESS_TASK",
             payload: id
         })
     }
     // SUPPRIME UN DONE TASK
     function DeleteDoneTask(id){
         Dispatch({
             type:"DELETE_DONE_TASK",
             payload: id
         })
     }
    return(
        <CreateTaskContext.Provider
         value={{

            CreateTaskTodo: state.CreateTaskTodo, 
            CreateTaskInProgress: state.CreateTaskInProgress, 
            CreateTaskDone: state.CreateTaskDone, 

            // context for todo tasks
            CreateNewTodoTask,UpdateTodoTask,DeleteTodoTask,
            // context for inProgress tasks
            CreateNewInProgressTask,UpdateInProgressTask,DeleteInProgressTask,
            // context for done task
            CreateNewDoneTask,UpdateDoneTask,DeleteDoneTask, }}>

            {children}
        </CreateTaskContext.Provider>
    )
}