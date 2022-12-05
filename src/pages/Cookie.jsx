import React from 'react'
import CookieConsent from "react-cookie-consent"
import { Link } from '@nextui-org/react'

export const Cookie = () => {
  return (
    <>
    <CookieConsent enableDeclineButton flipButtons 
    buttonText="Aceptar"
    buttonStyle={{background:"blue",color:"white"}}
    cookieName='Privacy_politic'
    declineButtonText="Rechazar"
    >
    Esta página utiliza cookies y otras tecnologías para que podamos mejorar tu experiencia en nuestro sitio:<a href="/cookies">mas información</a></CookieConsent>
    </>
  )
}