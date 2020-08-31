import React,{useState} from 'react'
import './Game.css'
import Yay from './Yay'

let clicked = []

function Oneplayer() {

    let id0 = React.createRef()
    let id1 = React.createRef()
    let id2 = React.createRef()
    let id3 = React.createRef()
    let id4 = React.createRef()
    let id5 = React.createRef()
    let id6 = React.createRef()
    let id7 = React.createRef()
    let id8 = React.createRef()
   

    let [ turn , setTurn ] = useState(1);
    let [ won , setWon ] = useState(0);
    let [ win , setWinner ] = useState('');

    let v = [id0,id1,id2,id3,id4,id5,id6,id7,id8]

    let handleClick=(i)=>{
        if(clicked.includes(i))
        {  
            return
        }
        else
        {
            if(turn===1)
            {
                v[i].current.textContent = "X"
                clicked.push(i)
                checkWin()
                setTurn(turn=0)
            }
            else
            {
                v[i].current.textContent = "O"
                clicked.push(i)
                checkWin()
                setTurn(turn=1)
            }
        }
    }

    let checkWin=()=>{
            let c1 = id0.current.textContent+id1.current.textContent+id2.current.textContent
            let c2 = id3.current.textContent+id4.current.textContent+id5.current.textContent
            let c3 = id6.current.textContent+id7.current.textContent+id8.current.textContent
            let c4 = id0.current.textContent+id3.current.textContent+id6.current.textContent
            let c5 = id1.current.textContent+id4.current.textContent+id7.current.textContent
            let c6 = id2.current.textContent+id5.current.textContent+id8.current.textContent
            let c7 = id2.current.textContent+id4.current.textContent+id6.current.textContent
            let c8 = id0.current.textContent+id4.current.textContent+id8.current.textContent
            if(c1==='XXX'||c2==='XXX'||c3==='XXX'||c4==='XXX'||c5==='XXX'||c6==='XXX'||c7==='XXX'||c8==='XXX')
            {
                setWinner(win='X');
                clicked = [];
                setWon(won=1);
            }
            else if(c1==='OOO'||c2==='OOO'||c3==='OOO'||c4==='OOO'||c5==='OOO'||c6==='OOO'||c7==='OOO'||c8==='OOO')
            {
                setWinner(win='O');
                clicked = [];
                setWon(won=1);
            }
            else if(id0.current.textContent&&id1.current.textContent&&id2.current.textContent&&id3.current.textContent&&id4.current.textContent
                   &&id5.current.textContent&&id6.current.textContent&&id7.current.textContent&&id8.current.textContent)
           {
               setWinner(win='Tie');
               clicked = [];
               setWon(won=1);
           }
    }
    
    return (
        <div className="cont">
            {
                !won?
                <div className='game'>
                <p onClick={()=>{handleClick(0)}} className="tiles" ref={id0}></p>
                <p onClick={()=>{handleClick(1)}} className="tiles" ref={id1}></p>
                <p onClick={()=>{handleClick(2)}} className="tiles" ref={id2}></p>
                <p onClick={()=>{handleClick(3)}} className="tiles" ref={id3}></p>
                <p onClick={()=>{handleClick(4)}} className="tiles" ref={id4}></p>
                <p onClick={()=>{handleClick(5)}} className="tiles" ref={id5}></p>
                <p onClick={()=>{handleClick(6)}} className="tiles" ref={id6}></p>
                <p onClick={()=>{handleClick(7)}} className="tiles" ref={id7}></p>
                <p onClick={()=>{handleClick(8)}} className="tiles" ref={id8}></p>
                </div>
                : <Yay winner={win}/>
            }
            
            
        </div>
    )
    }

export default Oneplayer
