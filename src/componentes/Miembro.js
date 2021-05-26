import React, {useContext} from 'react';
import {Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {TeamContext} from '../contexts/TeamContext';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'

const Miembro = ({member}) => {


    
    const {data} = useContext(TeamContext);
    const {team, setTeam} = data;

    const {heroe} = member;
    const { name, image, powerstats } = heroe
    const { intelligence, strength, speed, durability, power, combat } = powerstats

    let bgFnc = () => {
        let bg = '';
        if(heroe.biography.alignment === "good"){
            bg = 'success';
        }else{
            bg = 'danger';
        }
        return bg
    }

    const Delete = (id) => {
        const newTeam = team.members.filter(member =>{return member.heroe.id !== id});
        // console.log(team.members);
        // console.log(newTeam);
        setTeam({members: newTeam})
    }

    return (
        <Col xs={6} md={4} 
            style={{}}
        >
            {/* <p>{name}</p>
            <img src={image.url}></img> */}
            {/* {console.log(heroe, 'estoy aca')} */}

            <Card
                border={`${bgFnc()}`}   
                // bg={'success'}
                className="card-border my-3 text-center shadow-css animate__animated animate__fadeIn"
                style={{ borderWidth:'3px',}}
                >
                    <Card.Img 
                    src={image.url} 
                    alt={`${name}-image`}
                    style={{objectFit: 'cover', height: '20vh', width: 'auto',objectPosition:'0% 10%'}}
                    className="img-fluid"

                    />
                    <Card.Body className="p-1"
                    
                    >
                    <Card.Title><h4 className="text-nowrap">{name}</h4></Card.Title>
                    
                    <Card.Text>
                    
                    <div>
                    <Badge pill variant="" className="bg-primary">INT {intelligence}</Badge>
                    <Badge pill variant="" className="bg-danger">STR {strength}</Badge>
                    <Badge pill variant="" className="bg-secondary">SPD {speed}</Badge>
                    <Badge pill variant="" className="bg-success">DUR {durability}</Badge>
                    <Badge pill variant="" className="bg-warning">PWR {power}</Badge>
                    <Badge pill variant="" className="bg-dark">CBT {combat}</Badge>
                    </div>
                    
                    </Card.Text>
                    
                    <div className="d-flex justify-content-evenly">
                    <Link to ={`/heroe/${heroe.id}`}
                    >
                    <Button
                    variant={`${bgFnc()}`}
                    className="p-0 p-lg-1"
                    styles={{}}
                    onClick={()=>{console.log(heroe.id)}}
                    >Detalle
                    </Button>
                    </Link>
                    
                    <Button
                    className="p-0 p-lg-1"
                    variant={`${bgFnc()}`}
                    onClick={()=>{Delete(heroe.id)}}
                    >Eliminar</Button>
                    </div>
                    </Card.Body>
                </Card>
        
        
        
        </Col>
    )
}

export default Miembro
