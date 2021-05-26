import React from 'react';
import {Formik, useFormik, } from 'formik';
import axios from 'axios';
import token from '../tokenConfig/token';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col, ButtonGroup} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


const Login = () => {

    const history = useHistory();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: async values => {
            const errors = {};
            console.log(values);
            if(!values.email || !values.password){
                errors.email = 'Email requerido';
                errors.password = 'Contraseña requerida';
                // alert(`${errors.email} ${errors.password}`);
                Swal.fire({
                    title: `Email y contraseña requeridos`,
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }else{
                const res = await axios.post('http://challenge-react.alkemy.org/',{
                    email : values.email,
                    password : values.password
                })
                .then((res) => {
                    // console.log(res);
                    console.log('redireccionando...')
                    localStorage.setItem('token', token)
                    history.push('/')
                })
                .catch((err) => {
                    console.log(`${err} Accesso denegado`);
                    Swal.fire({
                        title: 'Accesso denegado',
                        icon: 'warning',
                        confirmButtonText: 'Intentar de nuevo',
                        showCloseButton: true
                      })
                    
                });
            }
        },
    });


    
    return (

        <Container>
            <Row>
                <Col></Col>
                <Col 
                md={6}
                className="p-4">
                
                <Form 
                className="text-center"
                onSubmit={formik.handleSubmit}>
                    <Form.Label htmlFor="email"><h2>Email</h2></Form.Label>
                    <Form.Control 
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {/* {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

                    <Form.Label htmlFor="password"><h2>Contraseña</h2></Form.Label>
                    <Form.Control 
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {/* {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null} */}
                        <ButtonGroup className="d-flex">
                        <Button 
                        className="my-4"
                        type="submit"
                        block

                        >Enviar</Button>
                        </ButtonGroup>
                        
                </Form>
                
                </Col>
                <Col></Col>
            </Row>
        </Container>




    )
}

export default Login
