import React, {useContext, useEffect, useState} from 'react';
import {TeamContext} from '../contexts/TeamContext';
import Miembro from './Miembro';
import {Row, Container} from 'react-bootstrap';
import Promedios from './Promedios'

const Equipo = () => {

    const [promedio,setPromedio] = useState({
        intelligence: null,
        strength: null,
        speed: null,
        durability: null,
        power: null,
        combat: null,
        height: null,
        weight: null
    });

    const {data} = useContext(TeamContext);
    const {team, setTeam} = data;

    const {members} = team
    
    let stats = members.map(member =>  member.heroe.powerstats)
    let heights = members.map(member =>  parseInt(member.heroe.appearance.height[1].slice(0,-3)))
    let weights = members.map(member =>  parseInt(member.heroe.appearance.weight[1].slice(0,-3)))
    // let weights = members.map(member =>  member.heroe.appearance.weight)
    
    
    const promediarHyW = (value) => {
        const targetAttribute = value;
        let resultado = team.members.length ? targetAttribute.reduce((total,valor)=> total + valor) : null;
        let promedio = resultado / targetAttribute.length;
        return promedio.toFixed(2);
    }
    
    //promedia los stats
    const promediar = (value) => {
        const targetAttribute = value;
        let total = 0;
        for(let i = 0; i < stats.length; i++){
            var arr = stats.map(stat => parseInt(stat[targetAttribute]));
            var noNaN = arr.map(e => isNaN(e)? e = 0 : e);
            // console.log(noNaN);

            let resultado = noNaN.reduce((total,valor)=> total + valor);
            // let promedio = resultado / noNaN.length;
            return resultado;
        }
        
    }
    
    
    useEffect(()=> {

        setPromedio(prevState=>{
            return {...prevState, intelligence:promediar('intelligence')}
        })
        setPromedio(prevState=>{
            return {...prevState, strength:promediar('strength')}
        })
        setPromedio(prevState=>{
            return {...prevState, speed:promediar('speed')}
        })
        setPromedio(prevState=>{
            return {...prevState, durability:promediar('durability')}
        })
        setPromedio(prevState=>{
            return {...prevState, power:promediar('power')}
        })
        setPromedio(prevState=>{
            return {...prevState, combat:promediar('combat')}
        })
        setPromedio(prevState=>{
            return {...prevState, height:promediarHyW(heights)}
        })
        setPromedio(prevState=>{
            return {...prevState, weight:promediarHyW(weights)}
        })
        
        
        
        // console.log(promedio);
        // console.log(promediarHyW(heights))
        // console.log(promediarHyW(weights))

    },[team])


    return (

            <div className="p-0 d-flex flex-column">
            <h1 className="text-center p-1 bg-personal rounded">Equipo</h1>
            {team.members.length ?
            (<Promedios 
                promedio={promedio}
                team={team}
            
            />)
        
        

            : null }
            <Row>
            {team.members.length > 0 ? team.members.map((member, index) => (
                <Miembro
                    key={index}
                    member={member}
                />
            )) : null }
            </Row>
            </div>

    )
}

export default Equipo
