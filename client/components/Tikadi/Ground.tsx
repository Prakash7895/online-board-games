import Puck from './Puck';
import Mesh from './Mesh';
import Box from '../Theme/Box';
import * as React from 'react';
import { Colors } from '@/utils/Color';
import { PlayerTurn } from '@/utils/type';
import { useAppSelector } from '@/hooks/useAppSelector';
import { barNumByPos, checkIfWon, TIKADI_CIRCLE_SIZE } from '@/utils';

const Ground = () => {
  const { turn, selectedMarble, player1, player2, winner } = useAppSelector(
    (state) => state.tikadi
  );

  const pucks = Array.from({ length: 3 }, (_, idx) => idx + 1);

  const winnerBarNum =
    winner > 0
      ? checkIfWon([
          ...(winner === PlayerTurn.currentPlayer ? player1 : player2),
        ])
      : -1;

  const renderPucks = (player: PlayerTurn) => {
    return pucks.map((i) => (
      <Box
        key={`player-${player}-${i}`}
        {...(turn === player &&
        i === selectedMarble &&
        [...player1, ...player2].includes(-1)
          ? {
              style: {
                transform: 'scale(1.25)',
              },
            }
          : {})}
        elevation={7}
        shadowOffset={{
          width: 10,
          height: 10,
        }}
        shadowRadius='$10'
        $dark-shadowColor={Colors.dark.tikadiShadowColor}
        $light-shadowColor={Colors.light.tikadiShadowColor}
        borderRadius='$md'
        alignItems='center'
        justifyContent='center'
        width={TIKADI_CIRCLE_SIZE}
        height={TIKADI_CIRCLE_SIZE}
      >
        {(player === PlayerTurn.currentPlayer
          ? player1[i - 1] === -1
          : player2[i - 1] === -1) && (
          <Puck
            radius={TIKADI_CIRCLE_SIZE - 7}
            {...(player === PlayerTurn.currentPlayer
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
        )}
      </Box>
    ));
  };

  return (
    <>
      <Box
        py={3}
        px={6}
        my={7}
        gap={10}
        w='$full'
        flexDirection='row'
        alignItems='center'
        justifyContent='flex-start'
      >
        {renderPucks(PlayerTurn.otherPlayer)}
      </Box>
      <Mesh winnerBar={winnerBarNum < 0 ? null : barNumByPos[winnerBarNum]} />
      <Box
        py={3}
        px={6}
        my={7}
        gap={10}
        w='$full'
        flexDirection='row'
        alignItems='center'
        justifyContent='flex-end'
      >
        {renderPucks(PlayerTurn.currentPlayer)}
      </Box>
    </>
  );
};

export default Ground;
