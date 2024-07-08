import React from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';

const DismissKeyboardHOC = (Comp: any) => {
  return ({ children, ...props }: ViewProps) => (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('Dismiss');
      }}
      accessible={false}
    >
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View);

export default DismissKeyboardView;
