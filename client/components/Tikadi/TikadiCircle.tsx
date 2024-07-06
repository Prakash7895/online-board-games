import { RootState } from '@/store';
import { PlayerTurn, Position, SelectedMarbles } from '@/utils/type';
import React, { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Circle from './Circle';
import { Pressable } from '@gluestack-ui/themed';
import { moveToSelectedPosition, selectMarble } from '@/store/tikadi';
import Puck from './Puck';
import { getNextPossibleTikadiPositions, TIKADI_CIRCLE_SIZE } from '@/utils';

interface ITikadiCircle {
  num: Position;
  children?: ReactNode;
}

const TikadiCircle: FC<ITikadiCircle> = ({ num, children }) => {
  const {
    turn,
    winner,
    player1,
    player2,
    selectedMarble,
    nextPossiblePositions,
  } = useSelector((state: RootState) => state.tikadi);
  const dispatch = useDispatch();

  const handlePress = () => {
    console.log('PRESSSSEEDDD', num);

    if (winner > 0) {
      return;
    }

    const occupiedBy1 = player1.includes(num);
    const occupiedBy2 = player2.includes(num);

    const posOccupied = occupiedBy1 || occupiedBy2;

    if (
      selectedMarble < 0 ||
      (selectedMarble > 0 &&
        posOccupied &&
        (turn === PlayerTurn.currentPlayer ? occupiedBy1 : occupiedBy2))
    ) {
      const nextPos = getNextPossibleTikadiPositions(num).filter(
        (p) => ![...player1, ...player2].includes(p)
      );
      if (nextPos.length > 0) {
        const puckNum = (
          turn === PlayerTurn.currentPlayer ? player1 : player2
        ).findIndex((el) => el === num);

        console.log('PUCKNUM', puckNum);
        if (puckNum >= 0) {
          dispatch(
            selectMarble({
              currPos: num,
              puckNum: (puckNum + 1) as SelectedMarbles,
            })
          );
        }
      }
    } else if (
      selectedMarble > 0 &&
      !posOccupied &&
      nextPossiblePositions.includes(num)
    ) {
      dispatch(moveToSelectedPosition(num));
    }
  };

  const canShowRipple =
    winner < 0 &&
    (selectedMarble > 0
      ? nextPossiblePositions.includes(num)
      : (turn === PlayerTurn.currentPlayer ? player1 : player2).includes(num) &&
        getNextPossibleTikadiPositions(num).filter(
          (p) => ![...player1, ...player2].includes(p)
        ).length > 0);

  const canScalePos =
    ![...player1, ...player2].includes(-1) &&
    selectedMarble > 0 &&
    (turn === PlayerTurn.currentPlayer ? player1 : player2)[
      selectedMarble - 1
    ] === num;

  return (
    <Pressable onPress={handlePress}>
      <Circle
        showRippleEffect={canShowRipple}
        {...(canScalePos
          ? {
              style: {
                transform: 'scale(1.25)',
              },
            }
          : {})}
      >
        {[...player1, ...player2].includes(num) ? (
          <Puck
            radius={TIKADI_CIRCLE_SIZE - 7}
            {...(player1.includes(num)
              ? {
                  color1: '#efb832',
                  color2: '#cc9322',
                  color3: '#ae8132',
                }
              : {
                  color1: '#e0f1ef',
                  color2: '#b7c1b4',
                  color3: '#99948a',
                })}
          />
        ) : (
          children
        )}
      </Circle>
    </Pressable>
  );
};

export default TikadiCircle;
