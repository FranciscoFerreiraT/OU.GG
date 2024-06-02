// Buscador.jsx
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../img/LOGO.OU.png';

function Buscador({ onShowResultados }) {
  const [inputValue, setInputValue] = useState('');

  function buscarJugador() {
    const [playerName, playerTag] = inputValue.split('#');
    const API_KEY = "ApiKey";

    const endpoint = `/europe/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(playerName)}/${encodeURIComponent(playerTag)}?api_key=${API_KEY}`;

    axios.get(endpoint)
      .then(response => {
        const endpoint2 = `/euw1/lol/summoner/v4/summoners/by-puuid/${encodeURIComponent(response.data.puuid)}?api_key=${API_KEY}`;
        return axios.get(endpoint2);
      })
      .then(response2 => {
        const summonerId = response2.data.id;
        const endpoint3 = `/euw1/lol/league/v4/entries/by-summoner/${encodeURIComponent(summonerId)}?api_key=${API_KEY}`;
        const endpoint4 = `/europe/lol/match/v5/matches/by-puuid/${encodeURIComponent(response2.data.puuid)}/ids?start=0&count=10&api_key=${API_KEY}`;
        
        return Promise.all([axios.get(endpoint3), axios.get(endpoint4), response2.data]);
      })
      .then(async ([response3, response4, summonerData]) => {
        const rankedData = response3.data.find(entry => entry.queueType === "RANKED_SOLO_5x5");
        const matches = response4.data;

        const lps = rankedData ? rankedData.leaguePoints : 0;
        const rank = rankedData ? `${rankedData.tier} ${rankedData.rank}` : "Unranked";
        const totalGames = rankedData ? rankedData.wins + rankedData.losses : 0;
        const winrate = totalGames > 0 ? ((rankedData.wins / totalGames) * 100).toFixed(2) : 0;

        const matchPromises = matches.map(match => {
          const endpoint5 = `/europe/lol/match/v5/matches/${match}?api_key=${API_KEY}`;
          return axios.get(endpoint5);
        });

        const matchResponses = await Promise.all(matchPromises);

        const partidasData = matchResponses.map(response => {
          const participants = response.data.info.participants;
          const participant = participants.find(p => p.puuid === summonerData.puuid);

          if (participant) {
            return {
              queueType: response.data.info.queueId,
              timeAgo: new Date(response.data.info.gameCreation).toLocaleString(),
              duration: new Date(response.data.info.gameDuration * 1000).toISOString().substr(11, 8),
              win: participant.win,
              champion: participant.championName,
              kills: participant.kills,
              deaths: participant.deaths,
              assists: participant.assists,
              kdaRatio: ((participant.kills + participant.assists) / (participant.deaths || 1)).toFixed(2),
              cs: participant.totalMinionsKilled + participant.neutralMinionsKilled,
              vision: participant.visionScore,
              items: [
                participant.item0,
                participant.item1,
                participant.item2,
                participant.item3,
                participant.item4,
                participant.item5,
                participant.item6
              ],
              players: participants.map(p => ({
                name: p.summonerName,
                champion: p.championName,
                isMe: p.puuid === summonerData.puuid
              }))
            };
          }

          return null;
        }).filter(partida => partida !== null);

        const playerStats = {
          lps,
          rank,
          winrate
        };

       
        onShowResultados(partidasData, playerStats);
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
    </div>
  );
}

export default Buscador;
