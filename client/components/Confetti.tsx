import React, { FC, useEffect, useRef } from 'react';
import Box from './Theme/Box';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

interface IConfetti {
  show: boolean;
  onFinish: () => void;
}

const Confetti: FC<IConfetti> = ({ show, onFinish }) => {
  const confettiRef = useRef<LottieView>(null);

  function triggerConfetti() {
    confettiRef.current?.play(0);
  }

  useEffect(() => {
    if (show) {
      triggerConfetti();
    }
  }, [show]);

  return (
    <Box
      flex={1}
      justifyContent='center'
      alignItems='center'
      position='absolute'
      borderWidth={2}
      borderColor='yellow'
      width='$full'
      height='$full'
      zIndex={1000}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <LottieView
        ref={confettiRef}
        source={require('@/assets/confetti.json')}
        autoPlay={false}
        loop={false}
        style={styles.lottie}
        resizeMode='center'
        onAnimationFinish={onFinish}
        duration={3500}
      />
    </Box>
  );
};

export default Confetti;

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
});
