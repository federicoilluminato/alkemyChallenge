import React, {useEffect,useState} from 'react';
import Badge from 'react-bootstrap/Badge';


const Promedios = ({promedio}) => {

            
            const Max = (obj) => {
                
                let prom = {...obj}
                delete prom.height
                delete prom.weight
                // delete promedio.height
                // delete promedio.weight
                // return Object.entries(object)
                // const prueba1 = Object.entries(object).filter(x => {console.log(x[1])})
                // const prueba2 = Math.max.apply(null,Object.keys(object))
                const values = Object.values(prom);
                const max = Math.max.apply(Math, values);
                for(var key in prom){
                    if(prom[key] === max){
                        return {
                            [key]: max,
                        };
                        
                    }
                }
                
                
            }
            
            
    const [maxStat,setMaxStat] = useState();


            
            
    useEffect(()=> {
        // setMaxStat(statMaximo);
        console.log(maxStat)
        // console.log(Object.values(statMaximo));
    },[promedio])


    return (
        <div className="overflow-hidden">
                <div className="d-flex flex-wrap justify-content-evenly fs-5 align-content-around">

                    <Badge className="bg-primary margin-promedios">{promedio.intelligence} INT</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.strength} STR</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.speed} SPD</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.durability} DUR</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.power} PWR</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.combat} CBT</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.weight} KG Promedio</Badge>
                    <Badge className="bg-primary margin-promedios">{promedio.height} CM Promedio</Badge>

                </div>
        </div>
    )
}

export default Promedios
