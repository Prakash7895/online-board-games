import AsyncStorage from '@react-native-async-storage/async-storage';
import { BarTypes, MarblePositions, Position } from './type';

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

export const horizontalBar = ['H1', 'H2', 'H3'] as const;
export const verticalBar = ['V1', 'V2', 'V3'] as const;

export const barNumByPos: BarTypes[] = [
  ...horizontalBar,
  ...verticalBar,
  'D1',
  'D2',
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

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log('Error storing data', err);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error storing data', e);
  }
};
