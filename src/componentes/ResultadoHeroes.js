import React from 'react';
import {Row} from 'react-bootstrap';
import Heroe from './Heroe';
import LoadingSpinner from '../layout/LoadingSpinner';

const ResultadoHeroes = ({resultado, busqueda, show, error}) => {


    return (
        <div>            
                {/* <Container> */}
                    <Row className="ms-0">
    
                    {error === 'error' ? <p className="fs-5 fw-bold">No se encontraron resultados</p> : null}
                    {show === true ? 

                        <LoadingSpinner 
                        /> 


                    : null}
                    {resultado ? resultado.map((heroe, id) => (
                        <Heroe
                            key={id} 
                            heroe={heroe}
                        />
                        
                    )): null}
                
                    </Row>
                {/* </Container> */}
        </div>
    )
}

export default ResultadoHeroes
