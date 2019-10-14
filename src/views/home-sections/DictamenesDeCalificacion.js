import React, {useState, useEffect} from "react";
// reactstrap components
import { MDBBtn , MDBCol, MDBRow, MDBContainer, MDBCardTitle , MDBCardGroup , MDBCard, MDBCardBody, MDBCardText , MDBCardFooter} from "mdbreact";
import CardDictamen from './../../components/Cards/CardDictamenes'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components"; 
import axios from 'axios'
export default function DictamenesDeCaificacion() {
   
  const [dictamenes, setDictamenes] = useState(); 
   useEffect(()=> {
     console.log("hola")
    getJson(); 
    
  },[])

   const getJson= async () => {
   const {data}= await axios.get("https://www.finanzasdigital.com/traeposts.php?token=aHcT639@/$muzk56&pagina=0&numNoticias=6&categoriaIncluir=7667,-7014");
    setDictamenes(data)
    console.log(data)
  
   }
   const Dictamenes = () => dictamenes.map(
     dictamen => 
     <MDBCol key={dictamen.id} sm="12" md="6" lg="4">
    <CardDictamen {...dictamen} />
   </MDBCol>)
  
    return( 
      <div className="dictamenes"> 
         <div className="dictamenes-title"
         >
             <h2 > 
            DICTAMENES DE CALIFICACIÓN 
            </h2>

         </div>
         <MDBContainer>
          
          {
              !dictamenes?  
              <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div> :
              <MDBCardGroup>
                <MDBRow> 
            <Dictamenes/>
        
             </MDBRow>
               </MDBCardGroup>
            }
       
    < MDBRow className="row-button"> 
             <MDBBtn className="btn-round btn-color-primary"
             > Ver más </MDBBtn>
         </MDBRow>
         </MDBContainer>
         
  
         
       
        
        </div>
  ); 
}

