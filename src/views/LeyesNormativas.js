import React, { useState, useEffect } from "react";
import IndexHeader from "./../components/Headers/IndexHeader";
import styled from "styled-components";
import {QUERY_LEYESNORMATIVAS} from './helpers/graphql/querys'
import { useQuery} from '@apollo/react-hooks';
import {
    Row
    , Col,
    Container
} from 'reactstrap'


export default function LeyesNormativas () {
 
    const { data , loading , error , refetch} = useQuery(QUERY_LEYESNORMATIVAS); 

    const Clientes = () => { 
       const innerJSX = data.leyesNormativas.map( leyesNormativas => 
        <Col key={leyesNormativas._id} sm="3">  
       
        </Col>) 
        return innerJSX; 
    } 
    return (!data && loading)?
     <div> <span> cargando </span> </div>
      : 
    <ContainerClientes> 
    <div className="main"> 
    <Container fluid="true"> 
        <CardDeck> <Clientes/>    </CardDeck>
    </Container>
     
    </div>
    </ContainerClientes>


}
































export default function () {

    const LeyesNormativasContent = styled.div`

    div{
        text-align: justify;
        text-justify: inter-word;
    }

    h3{
      color:#4169E1;
      text-transform:uppercase; 
      align-items:center; 
      justify-content:center; 
      margin: 2rem auto;
    }

    h4{
        display: inline-block;
        font-size: 21px;
        margin-right: 1rem;
        margin-bottom: 5px;
        color: #0099cc;
        font-weight: 300;
        width: 100%;
    }

    h5{
        display: inline-block;
        color:#0e1d63;
        font-size: 21px;
        margin-right: 1rem;
        margin-bottom: 5px;
        font-weight: 300;
        width: 100%;
    }

    p{
        display: inline-block;
        width: 100%;
        margin-bottom:1rem; 
        justify-content:center; 
    }

    li{
        display: inline-block;
        width: 100%;
        margin-left: 1 rem;
        
        margin-bottom:1rem; 
    }

   ul {
    list-style-type: circle;
   }

    .sangria{
        margin-left: 1 rem;
        text-indent: 1%;
    }

`
return (

    <LeyesNormativasContent>
        <div className="wrapper">
            <div>
                <Container >
                    <Row>
                        <h3> Leyes y Normativas </h3>
                    </Row>
                    <Row>
                        <li><h4>Fecha</h4>
                        <div>
                            <h5>Ley o Normativa</h5>
                            <p>
                                Descripción
                            </p>
                        </div>
                        </li>
                    </Row>
                </Container>
            </div>
        </div>
    </LeyesNormativasContent >
);
}