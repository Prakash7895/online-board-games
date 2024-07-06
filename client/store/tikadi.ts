import { checkIfWon, getNextPossibleTikadiPositions } from '@/utils';
import {
  MarblePositions,
  OpponentType,
  PlayerTurn,
  Position,
  SelectedMarbles,
} from '@/utils/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TikadiState {
  turn: PlayerTurn | -1;
  winner: PlayerTurn | -1;
  player1: MarblePositions;
  player2: MarblePositions;
  opponentType: OpponentType;
  selectedMarble: SelectedMarbles | -1;
  nextPossiblePositions: Position[];
}

const initialState: TikadiState = {
  turn: 1,
  winner: -1,
  player1: [-1, -1, -1],
  player2: [-1, -1, -1],
  opponentType: OpponentType.bot,
  selectedMarble: 1,
  nextPossiblePositions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

export const tikadiSlice = createSlice({
  name: 'tikadiState',
  initialState,
  reducers: {
    initializeGame: (
      state,
      {
        payload,
      }: PayloadAction<{
        opponentType: OpponentType;
        turn?: PlayerTurn | -1;
      }>
    ) => {
      const turn = payload.turn ? payload.turn : state.turn;
      return {
        ...initialState,
        opponentType: payload.opponentType,
        turn:
          turn === -1
            ? turn
            : turn === 1
            ? PlayerTurn.currentPlayer
            : PlayerTurn.otherPlayer,
      };
    },
    moveToSelectedPosition: (state, { payload }: PayloadAction<Position>) => {
      if (state.turn !== -1) {
        const updatedPosition: MarblePositions = [
          ...state[`player${state.turn}`],
        ];

        updatedPosition[state.selectedMarble - 1] = payload;

        state[`player${state.turn}`] = updatedPosition;

        const winCheck = checkIfWon([...updatedPosition]) >= 0;

        if (winCheck) {
          state.winner = state.turn;
          state.selectedMarble = -1;
          state.nextPossiblePositions = [];
        } else {
          state.turn =
            state.turn === PlayerTurn.currentPlayer
              ? PlayerTurn.otherPlayer
              : PlayerTurn.currentPlayer;

          const idx = state[`player${state.turn}`].findIndex((el) => el < 0);

          state.selectedMarble = (idx < 0 ? -1 : idx + 1) as SelectedMarbles;

          if (state.selectedMarble) {
            const nextPos = getNextPossibleTikadiPositions();
            state.nextPossiblePositions = nextPos.filter(
              (el) => ![...state.player1, ...state.player2].includes(el)
            );
          } else {
            state.nextPossiblePositions = [];
          }
        }
      }
    },
    selectMarble: (
      state,
      {
        payload,
      }: PayloadAction<{ puckNum: SelectedMarbles; currPos: Position }>
    ) => {
      state.selectedMarble = payload.puckNum;
      const nextPos = getNextPossibleTikadiPositions(payload.currPos);
      state.nextPossiblePositions = nextPos.filter(
        (el) => ![...state.player1, ...state.player2].includes(el)
      );
    },
    resetTikadiState: () => initialState,
  },
});

export const {
  resetTikadiState,
  initializeGame,
  moveToSelectedPosition,
  selectMarble,
} = tikadiSlice.actions;

export default tikadiSlice.reducer;
