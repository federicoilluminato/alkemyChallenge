import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import clienteAxios from '../../configAxios/axios';
import ImageHero from './ImageHero';
import HeroInfo from './HeroInfo';
import TeamContext from '../../contexts/TeamContext';
import Login from '../Login';
import LoadingSpinner from '../../layout/LoadingSpinner';


const HeroeDetail = (props) => {

    const [details,setDetails] = useState();
    
    
    const id = props.match.params.id
    const token = localStorage.getItem('token');

    useEffect(()=> {
        clienteAxios.get(`/${token}/${id}`)
        .then(res => {
            setDetails(res.data);
            console.log(res.data);
        })
        .catch(err =>  {
            console.log(err)
        })
    },[id])


    if(token){return (
        
        <Container>
            <Row>
            {!details ? 
            <div className="text-center spinner-height">
                <LoadingSpinner></LoadingSpinner>
            </div>
            
            :
            <>
            <ImageHero 
            details={details}
            
            />
            
            <HeroInfo
            details={details}
           
           />
            </>
            }
            </Row>
        </Container>

        
    )}else{return(
        <Login/>
    )}
}

export default HeroeDetail
