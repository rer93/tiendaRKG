import React from 'react'
// import { useState,useEffect } from 'react'
// import { obtenerProductos } from '../services/productoService'
// import GroupProducts from '../components/GroupProducts'
import Caracts from '../components/Caracts'
import Cards from '../components/Cards'

import Narvbar from '../components/Narvbar'
import Footer from '../components/Footer'
import KevPrinci from '../components/KevPrinci'
// import Video from '../components/VideoBackground'
import Kev1 from '../components/Kevinprinci2'
import EstrellaPro2 from "../components/EstrellaPro2"

const PortadaView = _=>
    {
      
      return (<div>
          
            <Narvbar/>
            
            <KevPrinci/>
            <Caracts/>
            <EstrellaPro2/>
            <Kev1></Kev1>
            <Cards/>
            
            
          <Footer/>
          
          </div>)}

      export default PortadaView