import { createContext,useReducer } from "react";
import Projet from "../../assets/fake_data/Projet";


const AppReducer = (state,action) =>{
    switch(action.type){
        case 'CREATEPROJECT':
            return {
                ...state,
                Projet: [action.payload, ...state.Projet]
            };

        case 'DELETEPROJECT':
            return {
                ...state,
                Projet: state.Projet.filter(project => project.id !== action.payload)
            };

        default:
            return state;
    }
}

const initials = {
    Projet:Projet,
}

export const CreateProjectsContext = createContext(initials);

export const CreateProjectsComponent = ({children})=>{
  
    const [state, Dispatch] = useReducer(AppReducer, initials);

    //AJOUTE UN PROJECT
    function NewCreateProject(Projet){
       Dispatch({
        type:"CREATEPROJECT",
        payload: Projet
       })
    }

    // SUPPRIME UN PROJECT
    function DeleteProject(id){
        Dispatch({
            type:"DELETEPROJECT",
            payload: id
        })
    }


    return(
        <CreateProjectsContext.Provider
         value={{Projet: state.Projet, 
         NewCreateProject,DeleteProject }}>
            {children}
        </CreateProjectsContext.Provider>
    )
}