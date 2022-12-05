
import { Grid } from '@nextui-org/react';
import React, { useState } from 'react'
import { useEffect } from 'react'
import Awards from '../components/Awards';
import Sponsors from '../components/Sponsors';

import { Torneo } from '../components/Torneo';


const Home = () => {

    const [torneos, settorneos] = useState([])
    const [promo, setpromo] = useState([])
    const [trofeos, settrofeos] = useState([])

    const getInformation=async()=>{
        try{
         const res=await fetch("/assets/data1.json");
 
         const response=await res.json();
      
        setpromo(response)
         
        }catch(err){
         console.log(err)
        } 
     }
     const getInformatio2=async()=>{
        try{
         const res=await fetch("/assets/data2.json");
 
         const response=await res.json();
      
        settrofeos(response)
         
        }catch(err){
         console.log(err)
        } 
     }

    const getData=async()=>{
       try{
        const res=await fetch("/assets/data.json");

        const response=await res.json();
     
        settorneos(response)
        
       }catch(err){
        console.log(err)
       } 
    }

    useEffect(()=>{
        getData()
        getInformation()
        getInformatio2()

        

    },[])
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        gap:"5px",
        
    }}>
        <Grid.Container  style={{
        width:"100%",
    }} gap={2}>
        {torneos.map(torneo=><Torneo key={torneo.id} {...torneo}/>)}
    </Grid.Container>


<Grid.Container  style={{
        width:"100%",
    }} gap={2}>
        {trofeos.map(tro=><Awards key={tro.id} {...tro}/>)}
    </Grid.Container>
    <Grid.Container  style={{
        width:"100%",
    }} gap={2}>
        {promo.map(pro=><Sponsors key={pro.id} {...pro}/>)}
    </Grid.Container>
    </div>

    
  )
}

export default Home
