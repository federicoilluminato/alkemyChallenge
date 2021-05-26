import React, {useContext} from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {TeamContext} from '../contexts/TeamContext';
import Swal from 'sweetalert2';

const Heroe = ({heroe}) => {

    const {data} = useContext(TeamContext);
    const {team, setTeam} = data;

    const onAdd = (heroe) => {           
        // console.log(team);s
        const exist = team.members.find(member => member.heroe.id === heroe.id );
        const goodLimit = team.members.filter(member =>{return member.heroe.biography.alignment === 'good'});
        const badLimit = team.members.filter(member =>{return member.heroe.biography.alignment === 'bad'});
        if(exist){
            // console.log('ya esta en el equipo...')
            Swal.fire({
                title: 'Este personaje ya se encuentra en el equipo',
            })
        }else if(team.members.length >= 6){
            Swal.fire({
                title: 'Limite de 6 personajes en el equipo',
              })
        }else if(goodLimit.length === 3 && heroe.biography.alignment === 'good'){
            Swal.fire({
                title: 'Limite de 3 personajes con orientación buena en el equipo',
              })
        }
        else if(badLimit.length === 3 && heroe.biography.alignment === 'bad'){
            Swal.fire({
                title: 'Limite de 3 personajes con orientación mala en el equipo',
              })
        }
        else if(team.members.length === 0){
            setTeam({...team.members, members:[
                {heroe}
            ]})
        }else{
            setTeam({...team,members:[
                ...team.members, {heroe}
            ]})
        }
        // console.log(goodLimit);
        // console.log(heroe);
    }



    let bgFnc = () => {
        let bg = '';
        if(heroe.biography.alignment === "good"){
            bg = 'success';
        }else{
            bg = 'danger';
        }
        return bg
    }

    return (
                <Col xs={12} sm={6} md={6} lg={4} xl={3} className="centrar">

                <Card
                border={`${bgFnc()}`}   
                // bg={'success'}
                className="card-border my-2 text-center"
                style={{ borderWidth:'3px', width:'100%' }}
                >
                    <Card.Img 
                    src={heroe.image.url} 
                    alt={`${heroe.name}-image`}
                    style={{objectFit: 'cover', height: '20vh', width:'100%', objectPosition:'30% 20%'}}

                    />
                    <Card.Body className="">
                    <Card.Title className="text-nowrap"><h5>{heroe.name}</h5></Card.Title>
                    <Button
                    className=""
                    variant={`outline-${bgFnc()}`}
                    onClick={()=>{onAdd(heroe)}}
                    style={{fontSize: '0.7rem'}}
                    >Agregar</Button>
                    </Card.Body>
                </Card>

                </Col>


    )
}

export default Heroe
