export enum PlayerTurn {
  currentPlayer = 1,
  otherPlayer = 2,
}

export type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type MarblePositions = [-1 | Position, -1 | Position, -1 | Position];

export type SelectedMarbles = 1 | 2 | 3;

export enum OpponentType {
  bot = 'bot',
  player = 'player',
}
