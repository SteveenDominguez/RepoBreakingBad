import React, { useEffect, useState } from 'react'
import { PersonajeCard } from '../PersonajeCard';
export const Home = () => {
    const [personajes, setPersonajes] = useState([]);
    const getPersonajes = async() => {
        const url=`https://breakingbadapi.com/api/characters`;
        const resp = await (await fetch(url)).json();
        setPersonajes(resp);
    }
    
    useEffect(() => {
        getPersonajes();
    }, [])
    return (
        <div style={{justifyContent: 'center'}}>
            {
                personajes.map(Personaje=>{
                    return(
                    <PersonajeCard key={Personaje.name} Personaje={Personaje}/>
                    )
                })
            }
        </div>
    )
}
