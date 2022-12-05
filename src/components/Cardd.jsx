import { Button, Card,Input,Text } from '@nextui-org/react'

import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const Cardd = ({name,sexo,puntuacion,_id,handleEliminarData,handleChangeData}) => {
    const [mostrar, setmostrar] = useState(false)
   const nameRef= useRef()
   const sexoRef=useRef();
   const edadRef=useRef();
   const puntuacionRef=useRef()


    const handleForm=(e)=>{
      e.preventDefault();
      const body={
        id:_id,
        name:nameRef.current.value,
        sexo:sexoRef.current.value,
        edad:sexoRef.current.value,
        puntuacion:puntuacionRef.current.value
      }
      
      handleChangeData(_id,body)
    }
   
  return (<>
    <Card>
    <Card.Header>
    <Text>{name}</Text>

    </Card.Header>
    <Card.Body>
        <Text>{sexo}</Text>
        <Text>{puntuacion}</Text>
    </Card.Body>
    <Card.Footer>
        <Button onClick={()=>handleEliminarData(_id)}>Eliminar usuario</Button>
        <Button onPress={()=>setmostrar(!mostrar)}>Editar  usuario</Button>
    </Card.Footer>

    </Card>
  
  { mostrar && <form onSubmit={handleForm}>
    <h2>editar usuario</h2>
    <Input  ref={nameRef} placeholder="nombre"/>
    <Input ref={sexoRef} placeholder="sexo"/>
    <Input ref={puntuacionRef} placeholder="puntuacion"/>
    <Input ref={edadRef} placeholder="edad"/>
    <Button type='submit'>actualizar usuaro</Button>
   </form>}  
</>
   

  )
}
