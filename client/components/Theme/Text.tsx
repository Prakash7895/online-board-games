import { Colors } from '@/utils/Color';
import { StyledComponentProps } from '@gluestack-style/react/lib/typescript/types';
import { Text as GText } from '@gluestack-ui/themed';
import { ForwardRefExoticComponent, forwardRef } from 'react';
import { StyleProp, TextProps, TextStyle, Text as RNText } from 'react-native';

const Text: ForwardRefExoticComponent<
  StyledComponentProps<
    StyleProp<TextStyle>,
    unknown,
    TextProps,
    'Text',
    typeof RNText
  >
> = forwardRef((props, ref) => {
  return (
    <GText
      ref={ref}
      $light-color={Colors.light.text}
      $dark-color={Colors.dark.text}
      {...props}
    >
      {props.children}
    </GText>
  );
});

export default Text;
