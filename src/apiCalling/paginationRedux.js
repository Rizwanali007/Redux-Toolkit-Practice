import { View, Text, FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getData, fetchApiData,fetchApiDataOnEnd } from './useReducer'

const PaginationRedux = () => {
    const [fakeData,setFakeData] = useState([])

    const dispatch = useDispatch()
      useEffect(() => {  
        dispatch(getData(1))  
        // for (let i = 1; i <= 5; i++) {
        //     dispatch(getData(i))
        // }
      },[])
      
    const stateData = useSelector((state) => state)
    console.log("STATEDATA",stateData);
    
    const onEnd = () => {
        // setOffset(offset+1)
        // console.log("ghdfghadhjkgadfhgjkadfsgh");
        // dispatch(emptyApiData)
        dispatch(fetchApiDataOnEnd(stateData.nextPage))
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <View style={{ width: "90%", marginTop: 30 }}>
           <FlatList
                    data={stateData.fakeApidata}
                    // extraData={data}
                    onEndReachedThreshold={0}
                    onEndReached={() => onEnd()}
                    renderItem={({ item }) => {
                        // console.log("ITEM...........", item)
                        return (
                            <View 
                            style={{ flex: 1, alignItems: "center", marginBottom: 15,
                             borderWidth: 1, borderRadius: 15, margin: 10,
                             }}
                             >  
                                {/* <Text>name : {item.name.first}</Text>
                                <Text>city : {item.location.city}</Text>
                                <Text>country : {item.location.country}</Text>
                                <Text>cell : {item.cell}</Text>
                                <Text>age : {item.dob.age}</Text>
                                <Text>email : {item.email}</Text> */}
                                <Text
                                    style={{
                                        fontSize: 50, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}>
                                    Id : {item.id}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 30, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    Name : {item.name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 22, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    User Name : {item.username}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    Email : {item.email}</Text>
                                <Text style={{ fontSize: 12, }}>City : {item.address.city}</Text>
                                <Text style={{ fontSize: 12 }}>Suite : {item.address.suite}</Text>
                                <Text style={{ fontSize: 12 }}>ZipCode : {item.address.zipcode}</Text>
                                <Text style={{ fontSize: 12 }}>#Street Address : {item.address.street}</Text>
                                <Text
                                    style={{
                                        fontSize: 12, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    #Geo Location : Lat : {item.address.geo.lat},
                                    Lng : {item.address.geo.lng}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    #Phone : {item.phone}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15, textDecorationColor: "grey",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    Website : {item.website}
                                </Text>
                                <Text style={{ fontSize: 12 }}>Company Name : {item.company.name}</Text>
                                <Text style={{ fontSize: 12 }}>Company CatchPhrase : {item.company.catchPhrase}</Text>
                                <Text style={{ fontSize: 12, marginBottom: 10 }}>Company Bs : {item.company.bs}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default PaginationRedux