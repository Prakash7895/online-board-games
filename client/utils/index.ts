import { MarblePositions, Position } from './type';

export const TIKADI_CIRCLE_SIZE = 45;

const allPositions: Position[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const getNextPossibleTikadiPositions: (num?: Position) => Position[] = (
  num?: Position
) => {
  switch (num) {
    case 1:
      return [2, 4, 5];

    case 2:
      return [1, 3, 5];

    case 3:
      return [2, 5, 6];

    case 4:
      return [1, 5, 7];

    case 5:
      return [1, 2, 3, 4, 6, 7, 8, 9];

    case 6:
      return [3, 5, 9];

    case 7:
      return [4, 5, 8];

    case 8:
      return [5, 7, 9];

    case 9:
      return [5, 6, 8];

    default:
      return allPositions;
  }
};

const winningPositions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],

  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],

  [1, 5, 9],
  [3, 5, 7],
];

export const checkIfWon = (arr: MarblePositions) => {
  arr.sort();

  const idx = winningPositions.findIndex((el) => {
    if (el.join('') === arr.join('')) {
      return true;
    }
    return false;
  });

  return idx;
};
