import React from 'react';
import Box from '../Theme/Box';
import Ground from './Ground';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Confetti from '../Confetti';

const Tikadi = () => {
  const tikadi = useSelector((state: RootState) => state.tikadi);

  console.log(JSON.stringify(tikadi, null, 2));

  return (
    <>
      <Ground />
      {tikadi.winner > 0 && (
        <Confetti show={tikadi.winner > 0} onFinish={() => {}} />
      )}
    </>
  );
};

export default Tikadi;
