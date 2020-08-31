import React from 'react'
import TicTacToe from "./components/TicTacToe";
import { Route} from 'react-router-dom'
import Game from './components/Game';

function App() {
  return (
    <div>
      <Route path="/" exact component={TicTacToe}/>
      <Route path="/singleplayer">
        <Game multi={false}/>
      </Route>
      <Route path="/multiplayer">
        <Game multi={true}/>
      </Route>
    </div>
  )
}

export default App
