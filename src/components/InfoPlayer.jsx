import React from 'react';

function InfoPlayer({ playerData }) {
  if (!playerData || Object.keys(playerData).length === 0) {
    return <p>No player data</p>;
  }

  return (
    <div>
      <p>Nombre: {playerData.name}</p>
      <img
        width={100}
        height={100}
        src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/profileicon/${playerData.profileIconId}.png`}
        alt="Profile Icon"
      />
      <p>Nivel de invocador: {playerData.summonerLevel}</p>
    </div>
  );
}

export default InfoPlayer;
