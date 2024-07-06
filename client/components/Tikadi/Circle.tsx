import React, { FC, ReactNode } from 'react';
import Box from '../Theme/Box';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '@/utils/Color';
import RippleEffect from '../RippleEffect';
import { TIKADI_CIRCLE_SIZE } from '@/utils';

interface ICircle {
  children?: ReactNode;
  showRippleEffect: boolean;
  style?: StyleProp<ViewStyle>;
}

const Circle: FC<ICircle> = ({ children, showRippleEffect, style }) => {
  if (showRippleEffect) {
    return (
      <RippleEffect radius={TIKADI_CIRCLE_SIZE}>
        <Box
          width='$full'
          height='$full'
          borderRadius='$full'
          justifyContent='center'
          alignItems='center'
          $light-bgColor={Colors.light.tikadiCircleBg}
          $dark-bgColor={Colors.dark.tikadiCircleBg}
          style={[styles.shadow, style]}
          $light-shadowColor={Colors.light.tikadiShadowColor}
          $dark-shadowColor={Colors.dark.tikadiShadowColor}
        >
          {children}
        </Box>
      </RippleEffect>
    );
  }

  return (
    <Box
      width={TIKADI_CIRCLE_SIZE}
      height={TIKADI_CIRCLE_SIZE}
      borderRadius='$full'
      justifyContent='center'
      alignItems='center'
      $light-bgColor={Colors.light.tikadiCircleBg}
      $dark-bgColor={Colors.dark.tikadiCircleBg}
      style={[styles.shadow, style]}
      $light-shadowColor={Colors.light.tikadiShadowColor}
      $dark-shadowColor={Colors.dark.tikadiShadowColor}
    >
      {children}
    </Box>
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
