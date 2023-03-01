import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ActionTypes";


const initialeState = {
    listTask : [
        {id : Math.random() , text : "task1" , isDone : false},
        {id : Math.random() , text : "task2" , isDone : false}
    ]
}



const Reducer = (state = initialeState , {type , paylod}) => {
    switch(type) {
        case ADD_TASK : 
            return {...state , listTask :  [...state.listTask , paylod]   } 
        case DELETE_TASK : 
            return {...state , listTask : state.listTask.filter(task => task.id !== paylod)}
        case EDIT_TASK :
            return {...state , listTask : state.listTask.map(el => el.id === paylod.id ? {...el , text : paylod.newTask} : el)}
        case DONE_TASK :
            return {...state , listTask : state.listTask.map(el => el.id === paylod ? {...el , isDone : !el.isDone} : el) }
            default : 
                return state ;
    }
}


export default Reducer;