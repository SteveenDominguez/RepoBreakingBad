import React, { useEffect, useState } from 'react'

export const PersonajeCard = ({Personaje}) => {
    const [personaje1, setPersonaje1] = useState({imagen:'', ocupacion:'', nombre:''});
    const getPersonajes = async() => {
        const {occupation,img, name} = Personaje;
        const  ocupacion1 = occupation[0];
        setPersonaje1({imagen:img, ocupacion:ocupacion1, nombre:name});
        console.log("hey"+personaje1)
    }
    useEffect(() => {
        getPersonajes();
    }, [])
    return (
        <div className="card">
            <h2>{personaje1.nombre}</h2>
            <h3>{personaje1.ocupacion}</h3>
            <img src={personaje1.imagen} alt={personaje1.nombre}/>
        </div>
    )
}
