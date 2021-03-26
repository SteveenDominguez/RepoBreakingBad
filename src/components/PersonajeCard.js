import React, { useEffect, useState } from 'react'
import './PersonajeCard/PersonajeCard.css'

export const PersonajeCard = ({ Personaje }) => {
    const [personaje1, setPersonaje1] = useState({ imagen: '', ocupacion: '', nombre: '', cumpleanos:'', apodo:'' });
    const getPersonajes = async () => {
        const { occupation, img, name, birthday, nickname } = Personaje;
        const ocupacion1 = occupation[0];
        setPersonaje1({ imagen: img, ocupacion: ocupacion1, nombre: name, cumpleanos: birthday, apodo:nickname });
    }
    useEffect(() => {
        getPersonajes();
    }, [])
    
    return (
        <div className="card-main">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={personaje1.imagen} alt={personaje1.nombre} style={{height: 400, objectFit: 'cover' }}/>
                </div>
                <div className="card-content" style={{background: 'linear-gradient(0deg , rgb(4, 4, 78), rgb(38, 65, 92) 10%, rgb(4, 4, 78))'}}>
                    <p style={{color: 'white'}}>{personaje1.nombre}</p>
                </div>
                <div className="card-reveal" style={{background: 'radial-gradient(rgb(49, 83, 117), rgb(38, 65, 92) , rgb(4, 4, 78))'}}>
                    <span className="card-title grey-text text-darken-4" ><p style={{color: 'white'}}>{personaje1.nombre}</p><i className="material-icons right">close</i></span>
                    <p style={{color: 'white'}}>Ocupacion: {personaje1.ocupacion}</p>
                    <p style={{color: 'white'}}>Cumpleaños: {personaje1.cumpleanos}</p>
                    <p style={{color: 'white'}}>Apodo: {personaje1.apodo}</p>
                </div>
            </div>
        </div>
    )
}
