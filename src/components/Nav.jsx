import React from 'react'
import { Navbar ,Text} from "@nextui-org/react";
import {  NavLink, useLocation} from 'react-router-dom';
import { FaBaseballBall } from 'react-icons/fa'


export const Nav = () => {
    const location=useLocation()
   
    let activeStyle={
        color:'blue'
    }

   // console.log(location)
    return (
        <>
        
        <Navbar variant="floating" isBordered>
        <i className='ball'><FaBaseballBall /></i>
            <Navbar.Content isBordered>
              
                <Navbar.Link color="inherit" href="/create">
                    <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  to="/create">
                        <Text>REGISTRARME</Text>
                        
                        
                    </NavLink>
            
                    
   
                </Navbar.Link>
            </Navbar.Content>

            <Navbar.Content>
                <Navbar.Link color="inherit" >
                
                    <NavLink to="/log">
                    <Text>LOGIN </Text>
                        
                    </NavLink>
                </Navbar.Link>
            </Navbar.Content>

            <Navbar.Content isBordered>
              
              <Navbar.Link color="inherit" href="/create">
                  <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }  to="/user">
                      <Text>TOP JUGADORES</Text>
                      
                  </NavLink>
          
                  
 
              </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content isBordered>
              
              <Navbar.Link color="inherit">
                  <NavLink  style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }  to="/contacto">
                      <Text>CONTACTO</Text>
                      
                  </NavLink>
          
                  
 
              </Navbar.Link>
          </Navbar.Content>

            <Navbar.Content>
                <Navbar.Link color="inherit" >
                    <NavLink to="/">
                    <Text>HOME</Text>

                    </NavLink>
                  
                </Navbar.Link>
            </Navbar.Content>


        </Navbar>
        </>
    )
}
