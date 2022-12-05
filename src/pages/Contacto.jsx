import React from 'react';
import { Input, Spacer,Text,Button } from "@nextui-org/react";
import '../App.css'
import { Link } from 'react-router-dom';
import { Comentarios }  from './Comentarios';

export const Contacto = () => {
  return (
      <div className='contact-form'>
        <Text h2>Contacta con nosotros FPIB</Text>
        <Spacer></Spacer>
        <Text h3>Estamdos en: Carrer de Salvador Dalí, 3, 07011 Palma, Illes Balears</Text>
        <Text h3>Nuestro horario de atención al público es de LUNES A VIERNES de 7:00h a 19:00h</Text>
        <Text h3>OFICINA Administración: info@fpib.es - 971 762 136</Text>
        <Text h3>Deportivo (Competición): deportivo@fpib.es - 640 214 093</Text>
        <Text h4>Puede enviar un e-mail a federacionpadel@fpib.com o rellenar el siguiente formulario</Text>
        <Spacer></Spacer>
        <Input placeholder='Nombre' width='25%'/>
        <Spacer></Spacer>
        <Input placeholder='Correo electrónico' width='25%'/>
        <Spacer></Spacer>
        <Input placeholder='Telefóno' width='25%'/>
        <Spacer></Spacer>
        <Text style={{textAlign:'justify'}}>Enviando este formulario, usted acepta nuestra <Link to="/privacidad">política de privacidad.</Link></Text>
        <Button type='submit' style={{marginLeft:'53%'}}>Enviar</Button> 
        <Spacer></Spacer>
        <Comentarios/>
     </div>
  )
}
