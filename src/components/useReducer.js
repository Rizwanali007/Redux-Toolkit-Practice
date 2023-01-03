import { createReducer, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { updateAge, updateName, updateStatus } from "./action";

const initialState = {
    name: "Riz",
    age: 20,
    status: "coder",
}

export const fetchUserName = createAsyncThunk(
    'fetchuser',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const res = await response.json()
      return res[0].name
    }
  )

const useReducer = createSlice({
    name:"person",
    initialState,
    reducers: {
        updateName(state,action){
            state.name = action.payload
        },
        updateAge(state,action){
            state.age = action.payload
        },
        updateStatus(state,action){
            state.status = action.payload
        }
    },
    // extraReducers: {
    //     [fetchUserName.fulfilled]: (state,action) => {
    //         state.name = action.payload
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchUserName.fulfilled, (state, action) => {
            state.name = action.payload
        })
      },
})

export const { updateAge,updateName,updateStatus} = useReducer.actions
export default useReducer.reducer

// export default createReducer(initialState,(builder) => {
//     builder.addCase(updateAge,(state,action) => {
//         state.age = action.payload
//     })
//     builder.addCase(updateName,(state,action) => {
//         state.name = action.payload
//     })
//     builder.addCase(updateStatus,(state,action) => {
//         state.status = action.payload
//     })
// })