import { useState } from "react";
import Board from "./Board";
import Gavvalu from "./Gavvalu";

export default function App() {

  const [players,setPlayers]=useState({
    p1:1,
    p2:1
  });

  const [turn,setTurn]=useState("p1");

  function move(value){

    setPlayers(prev=>{
      const next={...prev};
      next[turn]+=value;
      if(next[turn]>100) next[turn]-=value;
      return next;
    });

    setTurn(turn==="p1"?"p2":"p1");
  }

  return (
    <div className="app">
      <Board players={players}/>
      <Gavvalu onThrow={move}/>
    </div>
  );
}