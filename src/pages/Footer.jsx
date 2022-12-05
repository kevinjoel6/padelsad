import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Text, Link } from '@nextui-org/react'

export const Footer = () => {
  return (
    
<footer className="text-center text-lg-start bg-white text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <Text h4>Federación de Padel de las Islas Baleares</Text>
    </div>
  
    <div >
      <a href="/" className="me-4 link-secondary" >
        <i><FaFacebook /></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i><FaInstagram/></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i><FaGoogle/></i>
      </a>
      <a href="/" className="me-4 link-secondary">
        <i><FaYoutube/></i>
      </a>
    </div>
   
  </section>
 
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>FPIB
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorum sapiente a corporis. Voluptas sint perspiciatis ratione libero accusantium minima aperiam repellendus consectetur ea quisquam!
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            INFO
          </h6>
          <p>
            <a href="#!" className="text-reset">Competiciones</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Blog</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Federación</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Comentarios</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Bases legales
          </h6>
          <p>
            <a href="/cookies">Politica de cookies</a>
          </p>
          <p>
            <a href="/privacidad">Politica de privacidad</a>
          </p>
          <p>
            <a href="/aviso">Aviso Legal</a>
          </p>
        </div>
            
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Carrer de Salvador Dalí, 3, 07011 Palma, Illes Balears</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            federacionpadel@fpib.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> 971 762 136</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> 632 534 345</p>
        </div>
        
      </div>
    </div>
  </section>
  </footer>
  
  )
}


