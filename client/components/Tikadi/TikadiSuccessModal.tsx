import React, { useEffect, useState } from 'react';
import Confetti from '../Confetti';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { PlayerTurn } from '@/utils/type';
import { resetTikadiState } from '@/store/tikadi';

const TikadiSuccessModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { winner } = useSelector((state: RootState) => state.tikadi);
  const dispatch = useDispatch();

  const winnerText = `${
    winner === PlayerTurn.currentPlayer ? 'You' : 'Opponent'
  } Won!`;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (winner > 0) {
      timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [winner]);

  return (
    <Confetti
      show={true}
      onFinish={() => {
        // setShow(false);
      }}
    >
      {showModal && (
        <Modal
          heading={winnerText}
          body='Play Again?'
          onCancel={() => {
            setShowModal(false);
          }}
          secondaryBtn='Go Home'
          primaryBtn='Yes'
          primaryBtnHandler={() => {
            setShowModal(false);
            dispatch(resetTikadiState());
          }}
        />
      )}
    </Confetti>
  );
};

export default TikadiSuccessModal;
