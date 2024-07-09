import React, { useEffect, useState } from 'react';
import Confetti from '../Confetti';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { PlayerTurn } from '@/utils/type';
import { resetTikadiState } from '@/store/tikadi';
import { useAppSelector } from '@/hooks/useAppSelector';
import { router } from 'expo-router';

const TikadiSuccessModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { winner } = useAppSelector((state) => state.tikadi);
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
          secondaryBtnHandler={() => {
            router.back();
          }}
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
