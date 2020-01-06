import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE_TODO, TOGGLE_EDIT_TODO, EDIT_TODO } from '../const/action-types'

export const addTodo=(payload)=>{
    return (
       { type: ADD_TODO, payload}
    )
}
export const deleteTodo=(payload)=>{
    return (
        { type: DELETE_TODO, payload }
    )
}
export const toggleCompleteTodo=(payload)=>{
    return (
        { type: TOGGLE_COMPLETE_TODO, payload }
    )
}
export const toggleEditTodo=(payload)=>{
    return (
        { type: TOGGLE_EDIT_TODO, payload }
    )
}
export const editTodo=(payload)=>{
    return (
        { type: EDIT_TODO, payload }
    )
}