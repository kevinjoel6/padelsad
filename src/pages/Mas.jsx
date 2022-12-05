import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Card,  Text, Button } from "@nextui-org/react";
const Mas = () => {
    const params=useParams();
    const {id}=params
    console.log(params)

    //traaemos la data
    const [user, setuser] = useState({})

    const traerData=async()=>{
        try{
            axios.get(`http://localhost:4000/api/usuarios/${id}`).then(response=>{
                console.log(response)
                setuser(response.data)
            })

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        traerData()
      

    },[])

  return (
    
        <Card isHoverable variant="bordered" css={{}}
            key={user.id}>
            <Card.Header>
              <Text h4>  nombre:{user.name}</Text>

            </Card.Header>
            <Card.Body>
              <Text h3>putnuacion:{user.puntuacion}</Text>
              <Text h3>sexo:{user.sexo}</Text>
            

            </Card.Body>

            <Card.Footer>
              <Button
              
                icon
                color="primary"          
              >
                +1
              </Button>
            </Card.Footer>
          </Card>
      
   
  )
}

export default Mas
