import { resetTikadiState } from '@/store/tikadi';
import { Stack } from 'expo-router';
import React from 'react';
import { useDispatch } from 'react-redux';

const RootNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen
        name='tikadi'
        listeners={{
          beforeRemove: () => dispatch(resetTikadiState()),
        }}
      />
    </Stack>
  );
};

export default RootNavigator;
