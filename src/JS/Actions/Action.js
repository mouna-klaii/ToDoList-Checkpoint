
import { DONE_TASK, ADD_TASK,EDIT_TASK,DELETE_TASK } from "../ActionTypes/ActionTypes";


export const doneTask = (id) => {
    return {
        type : DONE_TASK,
        payload : id
    }
}

export const addTask = (newTask) => {
    return {
        type : ADD_TASK,
        paylod : newTask
    }
}
export const editTask = (id , newTask) => {
    return {
        type : EDIT_TASK,
        paylod : {id , newTask}
    }
}
export const deleteTask = (id) => {
    return {
        type : DELETE_TASK,
        paylod : id
    }
}

