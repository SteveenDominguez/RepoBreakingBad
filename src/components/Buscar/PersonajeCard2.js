import React, { useEffect, useState } from 'react'
import './personajecard.css'

export const PersonajeCard2 = ({ personaje }) => {
    const [quote, setQuote] = useState([])
    const { appearance } = personaje

    const getQuote = async () => {
        if(personaje.id > 0){
        const url = `https://breakingbadapi.com/api/quotes/${personaje.id}`
        const resp = await (await fetch(url)).json();
        setQuote(resp)
        }

    }

    useEffect(() => {
        getQuote();

    }, [])

    return (
        <div id="personaje-card">
            <div className="card-main" id="cont-card-main">
            <div className="card" id="cont-card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator " id="img-personaje" src={personaje.img} alt={personaje.nombre} />
                </div>
                <div className="card-content">
                    {personaje.nombre}
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{personaje.nombre}<i className="material-icons right">close</i></span>
                    <span className="card-title grey-text text-darken-4">Frases:</span>
                    
                    <ul>
                        {
                            quote.map(quote => (
                                <li key={quote.quote_id} id="frase"> - {quote.quote}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}