import {ALL_TODO,TODO_DONE,TODO_NOT_DONE,ADD_TODO,SAVE_TODO,EDIT_TODO} from './types' 

export const allTodo=()=>{
    return {
        type:ALL_TODO 
    }
}  ;
export const todoDone=()=>{
    return {
        type:TODO_DONE
    }
} ;
export const todoNotDone=()=>{
    return {
        type:TODO_NOT_DONE
    }
} ; 
export const addTodo=(newTodo)=>{
    return (
        {
            type:ADD_TODO ,
            payload:newTodo 
        }
    )
};
export const saveTodo=(todo)=>{
    return(
        {
            type:SAVE_TODO,
            payload : todo,
        }
    )
};
export const editTodo=(todo)=>{
    return(
        {
            type:EDIT_TODO,
            payload: todo,
        }
    )
};