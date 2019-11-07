import React from 'react';
import { QUERY_LEYESNORMATIVAS } from './helpers/graphql/querys'
import { useQuery } from '@apollo/react-hooks';
import {initGA} from './helpers/initGA.js';
import Header from '../components/Headers/IndexHeader.js'
import {Link} from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn, 
    MDBIcon
} from 'mdbreact';

export default function LeyesNormativas() {
    React.useEffect(()=> {
        initGA();
      },[]);
    const { data, loading, error, refetch } = useQuery(QUERY_LEYESNORMATIVAS);

    const LeyesNormativas = () => {
        const innerJSX = data.leyesNormativas.map(leyesNormativas =>
            <MDBRow key={leyesNormativas._id}>
                <Link to="/leyNormativa"> 
             <h4> <i className="fas fa-file-pdf"></i> {leyesNormativas.titulo}</h4>
             </Link>
                         
            </MDBRow>)
        return innerJSX;
    }
    return <>
    <Header />
     <div className="page-leyes-normativas">
            
              
                    <MDBContainer>
                    <MDBRow className="title">
           <h2 > 
            Leyes y Normativas

            </h2> </MDBRow>
                    {(!data && loading) ? <div className="container-load-posts"> 
              <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Cargando...</span>
              </div>
              </div>   : <MDBRow>  <LeyesNormativas />
              </MDBRow>  }
                     
                      
              <MDBRow className="rowCompartir"> 
             <MDBBtn><MDBIcon icon="envelope" size="3x" /></MDBBtn>
         </MDBRow>
                    </MDBContainer>
             
            </div>
    </>


}

