// import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChampionListComponent from './components/champion-list/ChampionListComponent';
import { Container } from 'react-bootstrap';
import RandomChampionComponent from './components/random-champion/RandomChampionComponent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <Container>
          <h1 className="py-5">LOL Champion Select</h1>

          <RandomChampionComponent></RandomChampionComponent>
          <ChampionListComponent></ChampionListComponent>

        </Container>
    </div>
  );
}

export default App;
