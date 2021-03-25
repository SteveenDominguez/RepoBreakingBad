import React, { useEffect, useState } from 'react'
import './PersonajeCard/PersonajeCard.css'

export const PersonajeCard = ({ Personaje }) => {
    const [personaje1, setPersonaje1] = useState({ imagen: '', ocupacion: '', nombre: '', cumpleanos:'', apodo:'' });
    const getPersonajes = async () => {
        const { occupation, img, name, birthday, nickname } = Personaje;
        const ocupacion1 = occupation[0];
        setPersonaje1({ imagen: img, ocupacion: ocupacion1, nombre: name, cumpleanos: birthday, apodo:nickname });
        console.log("hey" + personaje1)
    }
    useEffect(() => {
        getPersonajes();
    }, [])
    return (
        <div className="card-main">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={personaje1.imagen} alt={personaje1.nombre} />
                </div>
                <div className="card-content">
                    {personaje1.nombre}
                </div>
                <div className="card-reveal">
                    <span class="card-title grey-text text-darken-4">{personaje1.nombre}<i class="material-icons right">close</i></span>
                    <p>Ocupacion: {personaje1.ocupacion}</p>
                    <p>Cumpleaños: {personaje1.cumpleanos}</p>
                    <p>Apodo: {personaje1.apodo}</p>
                </div>
            </div>
        </div>
    )
}
