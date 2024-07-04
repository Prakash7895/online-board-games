import { Button, ButtonText } from '@gluestack-ui/themed';
import React, { FC, ReactNode, useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Box from './Theme/Box';
import { StyleSheet, View } from 'react-native';

interface IRippleEffect {
  radius: number;
  children?: ReactNode;
}

const config = {
  initialScale: 1,
  finalScale: 1.25,
  duration: 1500,
  delay: 250,
};

const RippleEffect: FC<IRippleEffect> = ({ radius, children }) => {
  const scale1 = useSharedValue(config.initialScale);
  const opacity1 = useSharedValue(1);

  const scale2 = useSharedValue(config.initialScale);
  const opacity2 = useSharedValue(1);

  useEffect(() => {
    scale1.value = withRepeat(
      withTiming(config.finalScale, {
        duration: config.duration,
        easing: Easing.bezier(0.65, 0, 0.34, 1),
      }),
      -1
    );

    opacity1.value = withRepeat(
      withTiming(0, {
        duration: config.duration,
        easing: Easing.bezier(0.65, 0, 0.34, 1),
      }),
      -1
    );

    scale2.value = withDelay(
      config.delay,
      withRepeat(
        withTiming(config.finalScale, {
          duration: config.duration,
          easing: Easing.bezier(0.65, 0, 0.34, 1),
        }),
        -1
      )
    );

    opacity2.value = withDelay(
      config.delay,
      withRepeat(
        withTiming(0, {
          duration: config.duration,
          easing: Easing.bezier(0.65, 0, 0.34, 1),
        }),
        -1
      )
    );
  }, [radius]);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale1.value }],
      opacity: opacity1.value,
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale2.value }],
      opacity: opacity2.value,
    };
  });

  return (
    <Box
      width={radius}
      height={radius}
      borderRadius='$full'
      position='relative'
    >
      <Box
        width='$full'
        height='$full'
        borderRadius='$full'
        style={{
          zIndex: 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
      <View style={styles.loader}>
        <Animated.View
          style={[styles.ripple, styles.ripple2, animatedStyle2]}
        />
        <Animated.View
          style={[styles.ripple, styles.ripple1, animatedStyle1]}
        />
      </View>
    </Box>
  );
};

export default RippleEffect;

const styles = StyleSheet.create({
  loader: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
  },
  ripple: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 999,
    zIndex: 0,
  },
  ripple1: {
    borderColor: 'orange',
    borderWidth: 8,
  },
  ripple2: {
    borderColor: 'orangered',
    borderWidth: 8,
  },
});
