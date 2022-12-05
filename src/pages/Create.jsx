import React, { useRef } from 'react'
import { Input, Spacer,Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import axios from 'axios';
export const Create = () => {
  const nameRef=  useRef()
  const passwordRef=  useRef()
  const password2Ref=  useRef()


  const handleApi=async(body)=>{
    try{
        axios.post('http://localhost:4000/api/register',body)
        .then(response=>{
            console.log(response)
            //si todo va bien
            //redirigimos 

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
        password:passwordRef.current.value,
        //password1:password2Ref.current.value
    }
    console.log(user)
    handleApi(user)



 
}

    return (
        <div>



            <h2>interesado en subcrinirte a la pagina</h2>
            <p>no te preocupes en nada estas inscrito</p>




            <form  onSubmit={handleSubmit}  style={{
                width:"40vw",
                marginLeft:"30vw",
                border:"1px solid black",
                padding:'2rem'
            }}>
                <Input    ref={nameRef}  labelPlaceholder="tu usuario"  size="sm" clearable bordered width='100%' />
                <Spacer   y={0.5} />
                <Input.Password    width='100%'  labelPlaceholder="passwrod1"   ref={passwordRef}  size="sm" clearable bordered  />
                <Spacer y={0.5} />
                <Input.Password  width='100%'   labelPlaceholder="password2" ref={password2Ref}  size="sm" clearable bordered  />
                <Spacer y={0.5}  />

                <Button type='submit' style={{marginLeft:'120px'}} shadow color="success" >Crear usuario</Button>

            </form>
        </div>
    )
}
