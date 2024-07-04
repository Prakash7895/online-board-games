import React, { FC, ReactNode } from 'react';
import Box from '../Theme/Box';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Color';
import RippleEffect from '../RippleEffect';

interface ICircle {
  children: ReactNode;
}

const Circle: FC<ICircle> = ({ children }) => {
  return (
    <RippleEffect radius={50}>
      <Box
        width='$full'
        height='$full'
        borderRadius='$full'
        justifyContent='center'
        alignItems='center'
        $light-bgColor={Colors.light.tikadiCircleBg}
        $dark-bgColor={Colors.dark.tikadiCircleBg}
        style={styles.shadow}
        $light-shadowColor={Colors.light.tikadiShadowColor}
        $dark-shadowColor={Colors.dark.tikadiShadowColor}
      >
        {children}
      </Box>
    </RippleEffect>
  );
};

export default Circle;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
