import { Box as GBox } from '@gluestack-ui/themed';
import { Colors } from '@/constants/Color';
import { forwardRef } from 'react';
import { StyledComponentProps } from '@gluestack-style/react/lib/typescript/types';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { ForwardRefExoticComponent } from 'react';

const Box: ForwardRefExoticComponent<
  StyledComponentProps<
    StyleProp<ViewStyle>,
    unknown,
    ViewProps,
    'Box',
    typeof View
  >
> = forwardRef((props, ref) => {
  return (
    <GBox
      ref={ref}
      $light-bgColor={Colors.light.background}
      $dark-bgColor={Colors.dark.background}
      {...props}
    >
      {props.children}
    </GBox>
  );
});

export default Box;
