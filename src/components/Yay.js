import React from "react";
import {Link} from 'react-router-dom'
import './Yay.css'

function Yay(props) {
  return (
    <div className="wincont">
      <div className="winnername">
        <p className="winner">{props.winner}</p>
        <p className="won">{props.winner==="Tie" ? '' : 'Won'}</p>
      </div>
      <Link to="/"><button className="gohome">Home</button></Link>
    </div>
  );
}

export default Yay;
