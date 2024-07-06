import React from 'react';
import Box from '../Theme/Box';
import Ground from './Ground';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Tikadi = () => {
  const tikadi = useSelector((state: RootState) => state.tikadi);

  console.log(JSON.stringify(tikadi, null, 2));
  return <Ground />;
};

export default Tikadi;
