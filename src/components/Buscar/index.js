import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import queryString from 'query-string';
import './index.css'
import { useForm } from './useForm';
import { PersonajeCard2 } from './PersonajeCard2';

export const Buscar = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [personaje, setPersonaje] = useState({ id:'', nombre: '', img: '', appearance: {} })

    const [form, handleInputChange] = useForm({
        searchtext: q,
    });

    const { searchtext } = form;
    const getPersonajeByNombre = async () => {
        if (searchtext.length > 1) {
            const url = `https://breakingbadapi.com/api/characters?name=${searchtext}`;
            const resp = await fetch(url);
            const arr = await resp.json();
            
            if (arr.length > 0) {
                const { char_id, name, img, appearance } = arr[0]
                setPersonaje({ id: char_id, nombre: name, img: img, appearance: appearance });
                
            } else {
                setPersonaje({});
            }
        } else {
            setPersonaje({});
        }


    }
    
    useEffect(() => {
        getPersonajeByNombre();

    }, [searchtext])

    let mostrar = "";
    if (personaje?.appearance?.length > 0) {
        mostrar = <PersonajeCard2 personaje={personaje} />
    }

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchtext}`);

    }
    return (
        <div id="cont-buscar">
            <div>
            <div id="cont-form">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Nombre personaje"
                        name="searchtext"
                        value={searchtext}
                        onChange={handleInputChange}
                    >

                    </input>

                </form>
            </div>
            <div id="cont-mostrar">
                {mostrar}
            </div>
            </div>
        </div>
    )
}
