// export const updateStatus = (status) => {
//     return {
//         type:'UPDATE_STATUS',
//         payload:status
//     }
// }
// export const updateName = (name) => {
//     return {
//         type:'UPDATE_NAME',
//         payload:name
//     }
// }
// export const updateAge = (age) => {
//     return {
//         type:'UPDATE_AGE',
//         payload:age
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const updateStatus = createAction('UPDATE_STATUS')
export const updateName = createAction('UPDATE_NAME')
export const updateAge = createAction('UPDATE_AGE')

export const fetchName = () => {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users') 
        const result = await res.json()
        console.log("LOOOG",result[0].name)
        dispatch({ type:"UPDATE_NAME", payload:result[0].name})
    }
}