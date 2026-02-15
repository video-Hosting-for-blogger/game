import { useEffect, useState } from "react";
import { getGridPosition } from "./boardLayout";
import { ladders, snakes } from "./gameBoard";

export default function Token({ position, color }) {

  const [visualPos, setVisualPos] = useState(1);

  // WALK STEP BY STEP
  useEffect(() => {
    async function animateMove() {

      let current = visualPos;

      while (current !== position) {
        current += current < position ? 1 : -1;
        setVisualPos(current);
        await delay(250);
      }

      // ladder climb
      if (ladders[current]) {
        await delay(300);
        setVisualPos(ladders[current]);
      }

      // snake slide
      if (snakes[current]) {
        await delay(300);
        setVisualPos(snakes[current]);
      }
    }

    animateMove();
  }, [position]);

  const grid = getGridPosition(visualPos);

  return (
    <div
      className="token"
      style={{
        background: color,
        gridRow: grid.row,
        gridColumn: grid.col
      }}
    />
  );
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}