import { View, Text } from 'react-native'
import React from 'react'
import Profile from './src/components/profile'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import useReducer from './src/apiCalling/useReducer'
// import useReducer from './src/components/useReducer'
import PaginationRedux from './src/apiCalling/paginationRedux'
import Pagination from './src/redux_practice/pagination'
import useReducer from './src/redux_practice/reducer'
import UpDownPagination from './src/redux_practice/onEndReached/pagination'

const store = configureStore({
  reducer: useReducer
})

const App = () => {
  return (
    <Provider store={store}>
      <UpDownPagination/>
      {/* <PaginationRedux /> */}
    </Provider>
    // <Provider store={store}>
    //   <Profile />
    // </Provider>
  )
}

export default App