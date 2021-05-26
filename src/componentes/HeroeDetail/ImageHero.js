import React from 'react';
import { Col } from 'react-bootstrap';


const ImageHero = ({details}) => {
    return (
        <>
        {details?
        
        <Col md={6}
        className="d-flex justify-content-center p-xs-3 p-md-5 img-fluid"
        styles={{}}
        >
        
        <div className="p-3">
        <img 
        src={`${details.image.url}`}
        className="shadow-css rounded img-fluid animate__animated animate__fadeInLeft"
        />
        </div>

        </Col>
    
        : null
        }
        </>
    )
}

export default ImageHero
