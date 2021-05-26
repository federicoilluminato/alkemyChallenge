import React, {  } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Route } from 'react-router-dom';
import Home from '../componentes/Home';
import Login from '../componentes/Login';
import Bg from '../img/3a7c2f0bc22206abf17edf79a7d08355.jpg';
import HeroeDetail from '../componentes/HeroeDetail/HeroeDetail';

const Layout = () => {
    return (
    <div 
    className="overflow-auto vh-100"
    style={{backgroundImage:`url(${Bg})`}}
    >
    
        <div
            className="box overflow-auto vh-100"
            style={{height:'auto'}}
            fluid
        >
            <Container fluid 
            className=""
            >
                <div 
                className="p-3"
                style={{height:'auto'}}
                >
                    <Route exact path="/alkemyChallenge/" component={Home}/>
                    <Route exact path="/alkemyChallenge/login" component={Login}/>
                    <Route exacth path="/alkemyChallenge/heroe/:id" component={HeroeDetail}/>
                </div>
            </Container>
        </div>
    </div>
    )
}

export default Layout
