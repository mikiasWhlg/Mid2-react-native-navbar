import * as React from 'react';

import { View, Text } from 'react-native';
import { useState,useEffect } from 'react';
import axios from 'axios'

export default function AboutScreen({ navigation }) {
   
    const[ emp, setEmp ] = useState ([])

   const fetchData=()=>{
    axios.get('http://127.0.0.1:8000/teach/techlist/')
    .then((Response)=>setEmp(Response.data))
    .catch((err)=>console.log(err))

   }
   const Delete=(id)=>{
       axios.delete(`http://127.0.0.1:8000/teach/techDetials/${id}`)
       .then((_Response)=>{alert('data is successfully deleted');fetchData();})
       .catch((err)=>console.log(err))
   }
    const setData=(Id)=>{ 
    axios.post('http://127.0.0.1:8000/teach/techlist/',{studentName:ufname})  
    .then((res)=> {alert('New Teacher is added Successfully');fetchData();}) 
     
    .catch((err)=>alert('Failed')) 
  } 
  const updateData=(Id)=>{ 
    axios.patch(`http://127.0.0.1:8000/teach/techDetials/${Id}`,{studentName:ulname})  
    .then((res)=> {alert('Updated Successfully');fetchData();}) 
     
    .catch((err)=>alert('Failed')) 
  }

    
  
    useEffect (()=>fetchData(),[])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {emp.map((tech1)=>{
                return( <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 19}}> 
                            Teachers Name:{tech1.teachersName}<br></br>
                    <button onClick={()=>Delete (tech1.id) }> Delete </button>
                    Name <input  onChange={(e)=>setulname(e.target.value)} type='text'/> 
                          <button onClick={()=>updateData(tech1.id)}>Update</button> 
      
  
                  Name<input  onChange={(e)=>setufname(e.target.value)} type='text'/> 
                          <button onClick={()=>setData()}>Add new</button>
                    
                    
                     </Text>)
               })}
        </View>
    );
}