
import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <Buscador></Buscador>
      </div>
    </div>
  );
}

export default App;
