import React, { useState } from 'react';
import axios from 'axios';
import InfoPlayer from './InfoPlayer';  // Asegúrate de que la ruta de importación es correcta
import logo from '../img/LOGO.OU.png';

function TextBoxWithButton() {
  const [inputValue, setInputValue] = useState('');
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "TU-API-KEY"

  function buscar_Jugador() {
    var APICallString = `/lol/summoner/v4/summoners/by-name/${encodeURIComponent(inputValue)}?api_key=${API_KEY}`;
    axios.get(APICallString).then(function (response) {
      console.log(response.data);
      setPlayerData(response.data);
    }).catch(function (error) {
      console.log(error);
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
        />
        <button onClick={buscar_Jugador}>Buscar jugador</button>
      </div>
      <InfoPlayer playerData={playerData} />
    </div>
  );
}

export default TextBoxWithButton;
