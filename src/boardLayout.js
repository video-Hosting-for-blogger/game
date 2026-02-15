export const COLS = 10;
export const ROWS = 10;

export function getGridPosition(square) {
  const row = Math.floor((square - 1) / COLS);
  const col = (square - 1) % COLS;

  const visualCol =
    row % 2 === 0 ? col : COLS - 1 - col;

  return {
    row: ROWS - row,
    col: visualCol + 1
  };
}