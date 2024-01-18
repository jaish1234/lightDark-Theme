import { ADDTODO, REMOVETODO, UPDATETODO } from "./action-types"

export const add_todo = (todo) => {
    return (
        {
            action: ADDTODO,
            payLoad: todo
        }
    )
}

export const remove_todo = (todoName) => {
    return( {
        action: REMOVETODO,
        payLoad: todoName   
    })
} 

export const update_todo = (todoName, updatedData) => {
    return(
        {
            action: UPDATETODO,
            payLoad: {currentData: todoName, updationData: updatedData}
        }
    )
}
