import React from 'react';
import Ground from './Ground';
import TikadiSuccessModal from './TikadiSuccessModal';
import { useAppSelector } from '@/hooks/useAppSelector';

const Tikadi = () => {
  const tikadi = useAppSelector((state) => state.tikadi);

  console.log(JSON.stringify(tikadi, null, 2));

  return (
    <>
      <Ground />
      {tikadi.winner > 0 && <TikadiSuccessModal />}
    </>
  );
};

export default Tikadi;
