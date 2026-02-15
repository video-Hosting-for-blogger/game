import { useState } from "react";

export default function Gavvalu({ onThrow }) {

  const [rolling,setRolling]=useState(false);

  const throwShells = () => {
    if(rolling) return;

    setRolling(true);

    setTimeout(()=>{
      setRolling(false);

      // simulate gavvalu
      let open = 0;
      for(let i=0;i<4;i++)
        if(Math.random()>0.5) open++;

      let value = open===0 ? 8 : open;

      onThrow(value);
    },1200);
  };

  return (
    <div className="gavvalu">
      <div className={rolling?"shell roll":"shell"} />
      <div className={rolling?"shell roll":"shell"} />
      <div className={rolling?"shell roll":"shell"} />
      <div className={rolling?"shell roll":"shell"} />

      <button onClick={throwShells}>
        Throw Gavvalu
      </button>
    </div>
  );
}