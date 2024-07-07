import {
  ModalCloseButton,
  Modal as GModal,
  ModalBackdrop,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ButtonText,
  CloseIcon,
  ModalBody,
  Heading,
  Button,
  Icon,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import Text from './Theme/Text';

interface IModal {
  onClose?: () => void;
  heading: string;
  body?: string;
  onCancel: () => void;
  secondaryBtn?: string;
  secondaryBtnHandler?: () => void;
  primaryBtn: string;
  primaryBtnHandler?: () => void;
}

const Modal: FC<IModal> = ({
  onClose,
  heading,
  onCancel,
  body,
  primaryBtn,
  primaryBtnHandler,
  secondaryBtn = 'Cancel',
  secondaryBtnHandler,
}) => {
  const ref = React.useRef(null);

  const handleCancel = () => onCancel();

  return (
    <GModal isOpen={true} onClose={onClose && onClose()} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size='lg'>{heading}</Heading>
          <ModalCloseButton onPress={handleCancel}>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>{body}</Text>
        </ModalBody>
        <ModalFooter>
          {secondaryBtn && (
            <Button
              variant='outline'
              size='sm'
              action='secondary'
              mr='$3'
              onPress={secondaryBtnHandler ?? handleCancel}
            >
              <ButtonText>{secondaryBtn}</ButtonText>
            </Button>
          )}
          <Button
            size='sm'
            action='positive'
            borderWidth='$0'
            onPress={primaryBtnHandler}
          >
            <ButtonText>{primaryBtn}</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </GModal>
  );
};

export default Modal;
