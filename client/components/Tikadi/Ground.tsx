import * as React from 'react';
import Mesh from './Mesh';
import Box from '../Theme/Box';
import { TIKADI_CIRCLE_SIZE } from '@/utils';
import Puck from './Puck';

const Ground = () => {
  const pucks = Array.from({ length: 3 }, (_, idx) => idx + 1);

  const renderPucks = (player: 'one' | 'two') => {
    return pucks.map((i) => (
      <Box key={`player-${player}-${i}`} borderWidth={1} borderColor='#f1f'>
        <Puck
          radius={TIKADI_CIRCLE_SIZE - 7}
          {...(player === 'one'
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
        {renderPucks('one')}
      </Box>
      <Mesh />
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
        {renderPucks('two')}
      </Box>
    </>
  );
};

export default Ground;
