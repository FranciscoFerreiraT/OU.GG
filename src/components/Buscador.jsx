import React, { useState } from 'react';
import axios from 'axios';

import logo from '../img/LOGO.OU.png';

function TextBoxWithButton() {
<<<<<<< HEAD
  const [inputValue, setInputValue] = useState(''); 
  const [playerData, setPlayerData] = useState({}); 
  const [playerLvlIco, setPlayerLvlIco] = useState({}); 
=======
  const [inputValue, setInputValue] = useState('');
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "TU-API-KEY"
>>>>>>> 864400abff48b268fa41ffb34a328735a75aec25

  function buscarJugador() {
    const [playerName, playerTag] = inputValue.split('#');
    console.log(playerName); 
    console.log(playerTag); 
    const API_KEY = "RGAPI-aee64d73-bf63-4467-8111-e7a4bb9fdb1a"; 

    
    const endpoint = `/europe/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(playerName)}/${encodeURIComponent(playerTag)}?api_key=${API_KEY}`;
    

   
    axios.get(endpoint)
    .then(response => {
      console.log('First API call success:', response.data);
      const endpoint2 = `/euw1/lol/summoner/v4/summoners/by-puuid/${encodeURIComponent(response.data.puuid)}?api_key=${API_KEY}`;
      //const endpoint3 =`/europe/lol/match/v5/matches/by-puuid/${encodeURIComponent(response.data.puuid)}?api_key=${API_KEY}`;
      console.log(`Endpoint for second API call: ${endpoint2}`);
      return axios.get(endpoint2);
    })
    .then(response2 => {
      console.log('Second API call success:', response2.data);
      setPlayerLvlIco(response2.data);
      console.log(playerLvlIco.summonerLevel)
      console.log(playerLvlIco.profileIconId)
    })
    .then(response3 =>{


    })
    .catch(error => {
      console.error('Error fetching player data:', error);
    });
  
  
  

    

   
  }


  return (
    <div className='input-button-container'>
      <img src={logo} alt="Logo" className="logo-img" />
      <div>
        <input 
          className='boton_buscar' 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Ingrese su RiotID#tag"
        />
        <button onClick={buscarJugador}>Buscar jugador</button>
      </div>
      <div>
        {playerData.error ? (
          <p>{playerData.error}</p>
        ) : (
          <div>
              
          </div>
        )}
      </div>
    </div>
  );
}

export default TextBoxWithButton;
