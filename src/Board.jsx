import board from "./assets/board.png";
import Token from "./Token";

export default function Board({ players }) {

  return (
    <div className="board-wrapper">

      <img src={board} className="board-image" />

      <div className="grid-overlay">

        {Object.entries(players).map(
          ([id, pos], i) => (
            <Token
              key={id}
              position={pos}
              color={["red","blue","green","orange"][i]}
            />
          )
        )}

      </div>
    </div>
  );
}