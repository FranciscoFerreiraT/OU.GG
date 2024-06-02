// App.js
import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';
import Resultados from './Resultados';
import './Resultados.css';
import { useState } from 'react';

function App() {
  const [showResultados, setShowResultados] = useState(false);
  const [partidas, setPartidas] = useState([]);
  const [playerStats, setPlayerStats] = useState({});

  const handleShowResultados = (partidasData, playerStatsData) => {
    setPartidas(partidasData);
    setPlayerStats(playerStatsData);
    setShowResultados(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        {!showResultados ? (
          <Buscador onShowResultados={handleShowResultados} />
        ) : (
          <Resultados partidas={partidas} playerStats={playerStats} />
        )}
      </div>
    </div>
  );
}

export default App;
