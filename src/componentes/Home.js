import React from 'react';
import Equipo from './Equipo';
import BuscadorHeroes from './BuscadorHeroes';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Login';


const Home = () => {

    const token = localStorage.getItem('token');


    
{  if (token){return (

        

        <Row>
            <Col xs={12} lg={6}
            className=""
            >
            
            <div className="text-center">
            <h1 className="mt-4 p-1 bg-personal rounded">Team Builder 📊</h1>
            </div>
            <Equipo />
            
            </Col>
            
            
            <Col>
            <BuscadorHeroes />
            </Col>

        </Row>
    )}else{return(
        <Login/>
    )
}}
}

export default Home
