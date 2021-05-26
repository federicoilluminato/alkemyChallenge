import React, {useState, useEffect, useContext} from 'react';
import clienteAxios from '../configAxios/axios';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col, ButtonGroup} from 'react-bootstrap';
import Heroe from './Heroe';
import LoadingSpinner from '../layout/LoadingSpinner';
import axios from 'axios';
import ResultadoHeroes from './ResultadoHeroes';

const BuscadorHeroes = () => {


    const [busqueda,setBusqueda] = useState('');
    const [resultado,setResultado] = useState(null);
    const [show,setShow] = useState(false);
    const [error,setError] = useState(null);

    const token = localStorage.getItem('token');

    // const Data = async (nombre) => {
    //     const req = await clienteAxios.get(`/${token}/search/${nombre}`)
    //     .then((res) => {
    //         console.log(res);
    //         setResultado(res.data.results)
    //     })
    //     .catch((err)=> {
    //         console.log(err)
    //     })
    // }
    
    const formik = useFormik({
        initialValues: {
            nombre: '',
            orientacion: ''
        },
        onSubmit:(values) => {
            // setResultado(null);
            setBusqueda(values.nombre);
            fetchData(values.nombre);
        },
        
    })

    async function fetchData(nombre){
        const req = await clienteAxios.get(`/${token}/search/${nombre}`)
        .then((res)=> {
            if(!res.data.results){
                setResultado(res.data.results);
            }else{
                const resFiltrado = res.data.results.filter(member => {return member.biography.alignment !== '-';});
                setResultado(resFiltrado);
            }
            // console.log(res.data.results);
            // setResultado(res.data.results)              
            setShow(false)
            setError(res.data.response)             
        })
        .catch((err)=> {
            console.log(err)
        })
        return req;
}


    return (
            <Row>
            <div className="text-center">


            <Form
            onSubmit={formik.handleSubmit}
            className="justify-content-center"
            >
                {/* <Form.Label className="mt-4 p-2 h1 bg-personal d-block rounded">Buscador 🔍</Form.Label> */}
                <Form.Control 
                id="nombre"
                name="nombre"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nombre}
                placeholder="Nombre del personaje"
                className="w-50 text-center mx-auto mt-4"
                />


                        <ButtonGroup className="d-flex w-50 mx-auto">
                        <Button 
                        className="my-4"
                        type="submit"
                        block
                        onClick={function(){
                            setShow(true);
                        }}
                        
                        >Buscar</Button>
                        </ButtonGroup>

            </Form>

            <div
            style={{height:'auto'}}
            >
            <ResultadoHeroes
            busqueda={busqueda}
            resultado={resultado}
            show={show}
            error={error}
            />
            </div>
            
                        

        </div>
        </Row>
    )
}

export default BuscadorHeroes
