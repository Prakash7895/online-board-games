import React from 'react';
import Ground from './Ground';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import TikadiSuccessModal from './TikadiSuccessModal';

const Tikadi = () => {
  const tikadi = useSelector((state: RootState) => state.tikadi);

  console.log(JSON.stringify(tikadi, null, 2));

  return (
    <>
      <Ground />
      {tikadi.winner > 0 && <TikadiSuccessModal />}
    </>
  );
};

export default Tikadi;
