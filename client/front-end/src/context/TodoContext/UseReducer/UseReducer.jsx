export default (state,action) =>{
    switch(action.type){
        // SWITCH FOR CreateTaskTODO
        case 'CREAT_TODO_TASK':
            return {
                ...state,
                CreateTaskTodo: [action.payload, ...state.CreateTaskTodo]
            };
        case 'UPDATE_TODO_TASK':
            
            const updatedTasksTodo = action.payload;
            const updatedTasksTodos = state.CreateTaskTodo.map((item) => {
                if (item.id === updatedTasksTodo.id) {
                    return updatedTasksTodo;
                }
                return item;
            });
    
            return {
                ...state,
                CreateTaskTodo: updatedTasksTodos
            };    

        case 'DELETE_TODO_TASK':
            return {
                ...state,
                CreateTaskTodo: state.CreateTaskTodo.filter(project => project.id !== action.payload)
            };
            // SWITCH FOR CreateTaskInProgress

        case 'CREAT_INPROGRESS_TASK':
            return {
                ...state,
                CreateTaskInProgress: [action.payload, ...state.CreateTaskInProgress]
            };
            // SWITCH FOR UpdateTaskInProgress
        case 'UPDATE_INPROGRESS_TASK':
                const updatedTaskInProgress = state.CreateTaskInProgress.map((item) => {
                    if (item.id === updatedTaskInProgress.id) {
                        return updatedTaskInProgress;
                    }
                    return item;
            });
        
            return {
                    ...state,
                    CreateTaskInProgress: updatedTaskInProgress
            };  
            // Swith for DELTE IN PROGRESS TASK
        case 'DELETE_INPROGRESS_TASK':
            return {
                ...state,
                CreateTaskInProgress: state.CreateTaskInProgress.filter(project => project.id !== action.payload)
            };
             // SWITCH FOR CreateTaskDONE
        case 'CREAT_DONE_TASK':
            return {
                ...state,
                CreateTaskDone: [action.payload, ...state.CreateTaskDone]
            };


        case 'UPDATE_DONE_TASK':
                const updatedTaskDone = state.CreateTaskDone.map((item) => {
                    if (item.id === updatedTaskDone.id) {
                        return updatedTaskDone;
                    }
                    return item;
                });
        
                return {
                    ...state,
                    CreateTaskDone: updatedTaskDone
                }; 

        case 'DELETE_DONE_TASK':
            return {
                ...state,
                CreateTaskDone: state.CreateTaskDone.filter(project => project.id !== action.payload)
            };

        default:
            return state;
    }
}