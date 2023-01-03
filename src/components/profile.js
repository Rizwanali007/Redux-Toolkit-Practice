import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import { updateName, updateAge, updateStatus, fetchName } from './action'
import { updateAge,updateName,updateStatus,fetchUserName } from './useReducer'

const Profile = () => {
   
    const {name,age,status} = useSelector((state) => state)
    
    const dispatch = useDispatch()
    
    const update = (age) => {
        let name = 'Rizwan'
        let status = 'single'
        dispatch(updateAge(age))
        // dispatch(updateName(name))
        // dispatch(fetchName())
        dispatch(fetchUserName())
        dispatch(updateStatus(status))
    }

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>name : {name} </Text>
      <Text>age : {age} </Text>
      <Text>status : {status} </Text>
      <TouchableOpacity onPress={()=>update(24)}>
        <Text>Update </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile