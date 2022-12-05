import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Grid, Text,Link } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const [miembros, setmiembros] = useState([])
  const [login, setlogin] = useState({})
  const navigate=useNavigate()

  const traerUser=()=>{
    const user= JSON.parse(localStorage.getItem("user"));
    setlogin(user)
    
  }
  const handleUser=(id)=>{
    console.log(id)
    navigate(`/user/${id}`)
    

  }

  const traerDatos = async () => {
    try {
      
      await axios.get("http://localhost:4000/api/jugadores").then(response => {
        console.log(response.data)
        setmiembros(response.data)
        console.log(miembros)
      })

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    traerUser()
    traerDatos()

  }, [])
  return (
    <>
    <h3>bienvenido {login.username}</h3>
      <h1>top jugadores del club</h1>
      <Grid.Container gap={2}>

        {
          miembros.map(miembro => <Card isHoverable variant="bordered" css={{ mw: "400px" }}
            key={miembro.id}>
            <Card.Header>
              <Text h4>  nombre:{miembro.name}</Text>

            </Card.Header>
            <Card.Body>
              <Text h3>putnuacion:{miembro.puntuacion}</Text>
            

            </Card.Body>

            <Card.Footer>
              <Link
               onClick={()=>handleUser(miembro._id)}
                icon
                color="primary"
    
              
              >
                Ver mas informacion de este jugador
              </Link>
            </Card.Footer>
          </Card>)
        }



      </Grid.Container>
    </>

  )
}
