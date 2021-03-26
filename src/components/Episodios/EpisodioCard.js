import React, { useEffect, useState } from 'react'


export const EpisodioCard = ({ Episodio }) => {
    const [episodio1, setEpisodio1] = useState({ id: '', titulo: '', caracteres: ''});
    const{characters}=Episodio;
    const getEpisodios = async () => {
        const { id, title, characters} = Episodio;
        
        setEpisodio1({ id: id, titulo: title, caracteres: characters});
    }
    useEffect(() => {
        getEpisodios();
    }, [])
    
    return (
        <div className="card-main">
            <div className="card">
                
                <div className="card-content" style={{background: 'linear-gradient(0deg , rgb(4, 4, 78), rgb(38, 65, 92) 10%, rgb(4, 4, 78))'}}>
                    <p style={{color: 'white'}}>Titulo: {episodio1.titulo}</p>
                    <p style={{color: 'white'}}><ul>Personajes: {characters.map(
                        caract=>( <li key={caract} id="caracteres">{caract}</li>)
                    )} </ul></p>
                </div>
            </div>
        </div>
    )
}
