import React from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const HeroInfo = ({details}) => {

    console.log(details)

    return (
        
        <>
        {details ? 
        
        <Col
        className="py-5 px-0 animate__animated animate__fadeIn"
        >
        
        <div className="px-1">
        <h1 className="py-1 bg-dark text-light p-2 text-center rounded">Información</h1>
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold">Alias: </span>{details.name}</p>

        {/* <p>{details.biography.aliases[0]}</p> */}
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold">Nombre Completo: </span>{details.biography["full-name"]}</p>
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold">Altura: </span>{details.appearance.height[0]}" - {details.appearance.height[1]}</p>
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold">Peso: </span>{details.appearance.weight[0]} - {details.appearance.weight[1]}</p>
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold">Color de Ojos: </span>{details.appearance["eye-color"]}</p>
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold">Color de Pelo: </span>{details.appearance["hair-color"]}</p>
        <p className="fs-5 bg-dark text-light p-2 m-2 rounded"><span className="fw-bold fs-xs-1">Lugar de Trabajo: </span>{details.work.base}</p>
        
        <div className="d-flex justify-content-center justify-content-lg-start pt-4">
        <Link to={"/"}>
        <Button className="test">
        Volver Atrás
        </Button>  
        </Link>
        </div>
        
        </div>

        </Col>
        
        : null
        }

        </>
            
    )
}

export default HeroInfo
