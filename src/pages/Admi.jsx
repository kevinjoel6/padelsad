import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Cardd } from '../components/Cardd';

export const Admi = () => {
  const [data, setdata] = useState([])
  const [cambio, setcambio] = useState(false)
  

  const handleEliminarData=async(id)=>{
    try{
     await   axios.delete(`http://localhost:4000/api/jugadores/${id}`,)
        .then(response=>{
            console.log(response)})
            setcambio(!cambio)
        

    }
    catch(err){
        console.log(err)
    }

}
const handleChangeData=async(id,body)=>{
  try{
   await   axios.put(`http://localhost:4000/api/jugadores`,body)
      .then(response=>{
          console.log(response)})
          setcambio(!cambio)
      

  }
  catch(err){
      console.log(err)
  }
}

  const getData=async()=>{
    try{
     await axios.get(`http://localhost:4000/api/jugadores`).then(response=>{
                console.log(response)
                setdata(response.data)
            })

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()

  },[cambio])

  return (
    <div>
      <h2>bienvenido admin!!</h2>
      <h4>lista de usuarios</h4>
      {
        data.map(data=><Cardd {...data} handleChangeData={handleChangeData} handleEliminarData={handleEliminarData} key={data.id}/>)
      }
    
    </div>
  )
}
