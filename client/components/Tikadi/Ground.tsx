import React, { useState } from 'react';
import Box from '../Theme/Box';
import { Dimensions } from 'react-native';
import Bar from './Bar';
import { Button, ButtonText } from '@gluestack-ui/themed';

const screenDimensions = Dimensions.get('screen');

const Ground = () => {
  const { width } = screenDimensions;

  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <>
      <Button onPress={() => setShowAnimation(true)}>
        <ButtonText>Start</ButtonText>
      </Button>
      <Button onPress={() => setShowAnimation(false)}>
        <ButtonText>Reset</ButtonText>
      </Button>
      <Box
        width={width}
        height={width}
        borderColor='#fff'
        borderWidth={1}
        position='relative'
      >
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
          <Bar type='V1' showAnimation={showAnimation} />
          <Bar type='V2' showAnimation={showAnimation} />
          <Bar type='V3' showAnimation={showAnimation} />
        </Box>
        <Box
          flex={1}
          justifyContent='space-between'
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Bar type='H1' showAnimation={showAnimation} />
          <Bar type='H2' showAnimation={showAnimation} />
          <Bar type='H3' showAnimation={showAnimation} />
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
          // overflow='hidden'
        >
          <Bar type='D1' showAnimation={showAnimation} />
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
          // overflow='hidden'
        >
          <Bar type='D2' showAnimation={showAnimation} />
        </Box>
      </Box>
    </>
  );
};

export default Ground;
