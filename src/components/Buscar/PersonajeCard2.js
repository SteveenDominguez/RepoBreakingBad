import React, { useEffect, useState } from 'react'
import './personajecard.css'

export const PersonajeCard2 = ({ personaje }) => {
    const [quote, setQuote] = useState([])
    const { appearance } = personaje
    
    

    const getQuote = async () => {
        
        const url = `https://breakingbadapi.com/api/quote?author=${personaje.nombre}`
        console.log(url)
        const resp = await (await fetch(url)).json();
        setQuote(resp)
        

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
                <div className="card-content" style={{color:'white'}}>
                    {personaje.nombre}
                    
                </div>
                <div className="card-reveal" id="reverso">
                    <span className="card-title text-darken-4" style={{color:'white'}} >{personaje.nombre}<i className="material-icons right">close</i></span>
                    <br/>
                    <span className="card-title white-text text-darken-4">Frases:</span>
                    
                    <ul>
                        
                        {
                            quote.map(quote => (
                                <li key={quote.quote_id} id="frase"> - {quote.quote}</li>
                            ))
                        }
                    </ul>
                    <span className="card-title white-text text-darken-4">Apariciones:</span>
                    
                    <ul>
                        {appearance.map(apariciones=>(
                        <li key={apariciones} id="frase">Temporada: {apariciones}</li>
                        ))
                    }
                        
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}