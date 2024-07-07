import React, { FC, ReactNode, useEffect, useRef } from 'react';
import Box from './Theme/Box';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

interface IConfetti {
  show: boolean;
  onFinish: () => void;
  children: ReactNode;
}

const Confetti: FC<IConfetti> = ({ show, onFinish, children }) => {
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
      width='$full'
      height='$full'
      zIndex={10}
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
        resizeMode='cover'
        onAnimationFinish={onFinish}
        duration={3500}
      />

      <Box
        width='$full'
        height='$full'
        alignItems='center'
        justifyContent='center'
        style={{
          zIndex: 100,
          position: 'absolute',
          backgroundColor: 'transparent',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Confetti;

const styles = StyleSheet.create({
  lottie: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    pointerEvents: 'none',
  },
});
