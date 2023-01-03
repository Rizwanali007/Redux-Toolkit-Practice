import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    fakeApidata: [],
    error: '',
    nextPage: 2
}

// export const fetchApiData = createAsyncThunk(

//     'fetchdata',
//     async (page) => {
//         return await axios.get(`https://randomuser.me/api/?page=${page}&results=10`)
//             .then((response) => {
//                 console.log('nextpage', page)
//                 console.log("RESPONSE", response.data.results);
//                 // return response.data

//                 return { fakeApidata: response.data.results }

//             }).catch((error) => {
//                 console.log("ERROR", error)
//             })
//     }

// )

export const getData = createAsyncThunk(
    'fetchdata',
    async (page) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/users/${page}`)
            .then((response) => {
                console.log("RESPONSE", response.data);
                console.log("page", page);
                return { fakeApidata: response.data }
            }).catch((error) => {
                console.log("ERROR", error)
            })
        // const myJSON = JSON.stringify(resp);
        // console.log('DATAAAAA?>>>>>>>>>',resp.data)

    }
)

// export const emptyApiData = createAsyncThunk(

//     'fetchdata',

//         async () => {
//             return {
//                 rejected: true
//             }
//         }

// )



export const fetchApiDataOnEnd = createAsyncThunk(
    'fetchdata',
    async (page) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/users/${page}`)
            .then((response) => {
                console.log('nextpage', page)
                console.log("RESPONSE", response.data);
                // return response.data

                return { fakeApidata: response.data}

            }).catch((error) => {
                console.log("ERROR", error)
            })
    }
)



const useReducer = createSlice({
    name: "fakeData",
    initialState,
    // extraReducers: (builder) => {
    //     builder.addCase(fetchApiData.pending, (state) => {
    //         state.loading = true
    //     })
    //     builder.addCase(fetchApiData.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.fakeApidata = state.fakeApidata.concat(action.payload.fakeApidata)
    //         // state.fakeApidata = action.payload
    //         state.error = ''
    //     })
    //     builder.addCase(fetchApiData.rejected, (state, action) => {
    //         state.loading = false
    //         state.fakeApidata = []
    //         state.error = action.error.message
    //     })
        // builder.addCase(emptyApiData.rejected, (state, action) => {
        //     state.loading = false
        //     state.fakeApidata = []
        //     state.error = action.error.message
        // })
    // },
    //   extraReducers: (builder) => {
    //     builder.addCase(fetchApiDataOnEnd.pending, (state) => {
    //         state.loading = true
    //     })
    //     builder.addCase(fetchApiDataOnEnd.fulfilled, (state, action) => {
    //         state.nextPage = ++state.nextPage
    //         state.loading = false
    //         state.fakeApidata = state.fakeApidata.splice(0,1)
    //         state.fakeApidata = [...state.fakeApidata,...action.payload.fakeApidata]
    //         state.error = ''
    //     })
    //     builder.addCase(fetchApiDataOnEnd.rejected, (state, action) => {
    //         state.loading = false
    //         state.fakeApidata = []
    //         state.error = action.error.message
    //     })
    //   },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.loading = false
            state.nextPage += 1
            state.fakeApidata = state.fakeApidata.concat(action.payload.fakeApidata)
            // state.fakeApidata = action.payload
            state.error = ''
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.loading = false
            state.fakeApidata = []
            state.error = action.error.message
        })
    }
})

export default useReducer.reducer
