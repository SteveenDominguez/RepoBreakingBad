import React, { useEffect, useState } from 'react'
import { PersonajeCard } from '../PersonajeCard';

export const Home = () => {
    const [personajes, setPersonajes] = useState([]);
    const getPersonajes = async() => {
        const url=`https://breakingbadapi.com/api/characters?limit=20&offset=20`;
        const resp = await (await fetch(url)).json();
        setPersonajes(resp);
    }
    useEffect(() => {
        getPersonajes();
    }, [])
    return (
        <div>
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
