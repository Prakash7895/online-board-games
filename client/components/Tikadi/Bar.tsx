import React, { FC, useEffect } from 'react';
import Box from '../Theme/Box';
import { DimensionValue, Dimensions, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const horizontalBar = ['H1', 'H2', 'H3'] as const;
const verticalBar = ['V1', 'V2', 'V3'] as const;

type HorizontalBarType = (typeof horizontalBar)[number];
type VerticalBarType = (typeof verticalBar)[number];

interface IBar {
  type: HorizontalBarType | VerticalBarType | 'D1' | 'D2';
  showAnimation?: boolean;
}

const { width } = Dimensions.get('screen');

const Bar: FC<IBar> = ({ type, showAnimation = false }) => {
  const dimensions: { width: DimensionValue; height: DimensionValue } =
    horizontalBar.includes(type as HorizontalBarType)
      ? styles.horizontalBar
      : verticalBar.includes(type as VerticalBarType)
      ? styles.verticalBar
      : type === 'D1'
      ? styles.d1
      : styles.d2;

  const length = useSharedValue(0);
  console.log('length', length);

  useEffect(() => {
    if (showAnimation) {
      length.value = withTiming(
        type === 'D1' || type === 'D2' ? width * Math.SQRT2 : width,
        {
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
        }
      );
    } else {
      length.value = 0;
    }
  }, [showAnimation]);

  return (
    <Box {...dimensions} borderColor={'#f1f'} borderWidth={1}>
      <Animated.View
        style={{
          backgroundColor: 'orange',
          ...(verticalBar.includes(type as VerticalBarType)
            ? { width: '100%', height: length }
            : { width: length, height: '100%' }),
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  horizontalBar: {
    width: '100%',
    height: 10,
  },
  verticalBar: {
    width: 10,
    height: '100%',
  },
  d1: {
    transform: 'rotate(45deg)',
    width: width * Math.SQRT2,
    height: 10,
  },
  d2: {
    transform: 'rotate(-45deg)',
    width: width * Math.SQRT2,
    height: 10,
  },
});

export default Bar;
