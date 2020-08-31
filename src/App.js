import React from 'react'
import TicTacToe from "./TicTacToe";
import { Route} from 'react-router-dom'
import Oneplayer from './Oneplayer';
import Twoplayer from './Twoplayer';
import Yay from './Yay';

function App() {
  return (
    <div>
      <Route path="/" exact component={TicTacToe}/>
      <Route path="/singleplayer"  component={Oneplayer}/>
      <Route path="/multiplayer"  component={Twoplayer}/>
      <Route path="/winner"  component={Yay}/>
    </div>
  )
}

export default App
