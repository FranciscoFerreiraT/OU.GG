// Resultados.jsx
import React from 'react';
import './Resultados.css'; 

const championNameCorrections = {
  "FiddleSticks": "Fiddlesticks",
  "Twistedfate": "TwistedFate",
  "Missfortune": "MissFortune",
 
};

const normalizeChampionName = (name) => {
  const correctedName = championNameCorrections[name] || name;
  return correctedName.charAt(0).toUpperCase() + correctedName.slice(1);
};

const Resultados = ({ partidas, playerStats }) => {
  return (
    <div className="resultados-wrapper">
      <div className="player-stats">
        <h2>Ranked Solo</h2>
        <div className="rank-info">
          <div className="rank-details">
            <p className="rank">{playerStats.rank}</p>
            <p className="lp">{playerStats.lps} LP</p>
            <p className="winrate">{playerStats.winrate}% Win Rate</p>
            <p className="wins-losses">{playerStats.wins}W {playerStats.losses}L</p>
          </div>
        </div>
      </div>
      <div className="resultados-container">
        {partidas.map((partida, index) => {
          const normalizedChampionName = normalizeChampionName(partida.champion);
          const championUrl = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/champion/${normalizedChampionName}.png`;
          return (
            <div key={index} className={`partida ${partida.win ? 'win' : 'loss'}`}>
              <div className="partida-header">
                <span>{partida.queueType}</span>
                <span>{partida.timeAgo}</span>
                <span className="result">{partida.win ? 'WIN' : 'LOSS'}</span>
                <span>{partida.duration}</span>
              </div>
              <div className="partida-details">
                <div className="player-info">
                  <img src={championUrl} alt={partida.champion} className="champion-icon"/>
                  <div className="stats">
                    <span className="kda">{partida.kills} / {partida.deaths} / {partida.assists}</span>
                    <span className="kda-ratio">{partida.kdaRatio} KDA</span>
                    <span className="cs">{partida.cs} CS</span>
                    <span className="vision">{partida.vision} Vision</span>
                  </div>
                </div>
                <div className="items">
                  {partida.items.map((item, i) => {
                    const itemUrl = `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/item/${item}.png`;
                    return (
                      <img key={i} src={itemUrl} alt={`Item ${item}`} className="item-icon"/>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resultados;
