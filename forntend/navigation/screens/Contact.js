import * as React from 'react';
import { View, Text } from 'react-native';
import { useState,useEffect } from 'react';
import axios from 'axios'

export default function ContactScreen({ navigation }) {
   const[tech,setTech]=useState([])
   const fetchData=()=>{
    axios.get('http://127.0.0.1:8000/emp/employelist/')
    .then((Response)=>setTech(Response.data))
    .catch((err)=>console.log(err))

   }
  
   const Delete=(id)=>{
       axios.delete(`http://127.0.0.1:8000/emp/employeDetials/${id}`)
       .then((_Response)=>alert('data is successfully deleted'),fetchData())
     .catch((err)=>console.log(err))
   }
    useEffect(()=>fetchData(),[])
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {tech.map((tech1)=>{
                return(<Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 19}}>
                    Employe Name :{tech1.EmployeName}<br></br>
                   
                   <button onClick={()=>Delete(tech1.id)}>Delete </button>
                     </Text>)
                
            
            })}
            
        </View>
    );
}