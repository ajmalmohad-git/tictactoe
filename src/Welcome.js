import React from 'react'
import './Welcome.css'
import { Link} from 'react-router-dom'

function Welcome() {
    return (
        <div className="welcomepage">
        <div className="content">
            <h1 className="heading">Tic Tac Toe</h1>
            <div className="btns">
            <Link to="/singleplayer"><button className="btn">Single Player</button></Link>
            <Link to="/multiplayer"><button className="btn">Multiplayer</button></Link>
            </div>
        </div>
        <a href="mailto:ajmalajmal.2016@gmail.com"><p className="me">Contact Developer</p></a>
        </div>
    )
}
export default Welcome
