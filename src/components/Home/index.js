import React, { useEffect, useState } from 'react'
import { PersonajeCard } from '../PersonajeCard';
import './index.css'

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
        <div id="home-cards">
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
