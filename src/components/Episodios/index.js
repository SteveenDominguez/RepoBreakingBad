import React, { useEffect, useState } from 'react'
import { EpisodioCard } from './EpisodioCard';
import './index.css'

export const Indexepisodios = () => {
  const [episodios, setEpisodios] = useState([]);
  const getEpisodios = async() => {
      const url=`https://breakingbadapi.com/api/episodes`;
      const resp = await (await fetch(url)).json();
      setEpisodios(resp);
  }
  
  useEffect(() => {
      getEpisodios();
  }, [])
  return (
      <div id="home-cards">
          {
              episodios.map(Episodio=>{
                  return(
                  <EpisodioCard key={Episodio.id} Episodio={Episodio}/>
                  )
              })
          }
      </div>
    )
}
