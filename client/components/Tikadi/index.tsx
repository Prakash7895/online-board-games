import React from 'react';
import Ground from './Ground';
import TikadiSuccessModal from './TikadiSuccessModal';
import { useAppSelector } from '@/hooks/useAppSelector';
import Box from '../Theme/Box';

const Tikadi = () => {
  const tikadi = useAppSelector((state) => state.tikadi);

  console.log(JSON.stringify(tikadi, null, 2));

  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Ground />
      {tikadi.winner > 0 && <TikadiSuccessModal />}
    </Box>
  );
};

export default Tikadi;
