import React from 'react'
import { Input, Spacer,Text ,Button} from "@nextui-org/react";
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Log = () => {
  const navigate=useNavigate()
    const nameRef=  useRef()
  const passwordRef=  useRef()


  const handleApi=async(body)=>{
    try{
      await axios.post('http://localhost:4000/api/login',body).then(response=>{
        //si va todo bien lo enviamos a una pagina de miebro
        console.log(response)
        //subimos al localstorage para luego tener rutas privadas
        const user=response.data;
        console.log(user)
        localStorage.setItem("user",JSON.stringify(user))
        navigate("/user")
      })


    }catch(err){
      console.log(err)
    }
  }

const handleSubmit=(e)=>{
   // console.log(e)
    e.preventDefault()
    const user={
        username:nameRef.current.value,
        password:passwordRef.current.value
      
    }
    handleApi(user)
    console.log(user)}

  return (
    <div>
        <Text>conectarme a mi cuenta!!</Text>
        
        <form  onSubmit={handleSubmit}  style={{
                width:"40vw",
                marginLeft:"30vw",
                border:"1px solid black",
                padding:'2rem'
            }}>
                <Input    ref={nameRef}   size="sm" clearable bordered width='100%' initialValue="tu suario" />
                <Spacer   y={0.5} />
                <Input.Password    width='100%'  ref={passwordRef}  size="sm" clearable bordered initialValue="tu contraseña" />
                <Spacer y={0.5} />
        

                <Button type='submit' style={{marginLeft:'120px'}} shadow color="success" >logearme</Button>

            </form>
    </div>
  )
}
