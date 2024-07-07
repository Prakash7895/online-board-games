import React, { FC } from 'react';
import Box from '../Theme/Box';
import Bar from './Bar';
import { Dimensions } from 'react-native';
import Text from '../Theme/Text';
import { BarTypes, Position } from '@/utils/type';
import TikadiCircle from './TikadiCircle';

const screenDimensions = Dimensions.get('screen');

interface IMesh {
  winnerBar?: BarTypes | null;
}

const Mesh: FC<IMesh> = ({ winnerBar }) => {
  const { width } = screenDimensions;

  const margin = 20;

  return (
    <Box
      width={width}
      height={width}
      position='relative'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        width={width - 2 * margin}
        height={width - 2 * margin}
        position='absolute'
      >
        <Box width='$full' height='$full' position='absolute'>
          <Box
            flex={1}
            style={{
              backgroundColor: 'transparent',
            }}
            width='$full'
            height='$full'
            position='absolute'
            alignItems='center'
            flexDirection='row'
            justifyContent='space-between'
          >
            <Bar type='V1' showAnimation={winnerBar === 'V1'} />
            <Bar type='V2' showAnimation={winnerBar === 'V2'} />
            <Bar type='V3' showAnimation={winnerBar === 'V3'} />
          </Box>
          <Box
            flex={1}
            justifyContent='space-between'
            style={{
              backgroundColor: 'transparent',
            }}
          >
            <Bar type='H1' showAnimation={winnerBar === 'H1'} />
            <Bar type='H2' showAnimation={winnerBar === 'H2'} />
            <Bar type='H3' showAnimation={winnerBar === 'H3'} />
          </Box>
          <Box
            position='absolute'
            width='$full'
            height='$full'
            style={{
              backgroundColor: 'transparent',
            }}
            justifyContent='center'
            alignItems='center'
            overflow='hidden'
          >
            <Bar type='D1' showAnimation={winnerBar === 'D1'} />
          </Box>
          <Box
            position='absolute'
            width='$full'
            height='$full'
            style={{
              backgroundColor: 'transparent',
            }}
            justifyContent='center'
            alignItems='center'
            overflow='hidden'
          >
            <Bar type='D2' showAnimation={winnerBar === 'D2'} />
          </Box>
        </Box>
      </Box>
      <Box
        width={width - margin / 2}
        height={width - margin / 2}
        style={{
          backgroundColor: 'transparent',
        }}
        justifyContent='space-between'
      >
        {Array.from({ length: 3 }, () => 0).map((_, i) => {
          return (
            <Box
              key={i}
              flexDirection='row'
              justifyContent='space-between'
              style={{
                backgroundColor: 'transparent',
              }}
            >
              {Array.from({ length: 3 }, () => 0).map((_, j) => {
                return (
                  <TikadiCircle key={i + j} num={(i * 3 + (j + 1)) as Position}>
                    <Text>{i * 3 + (j + 1)}</Text>
                  </TikadiCircle>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Mesh;
