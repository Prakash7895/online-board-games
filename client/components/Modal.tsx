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
import React, { FC, ReactNode } from 'react';
import Text from './Theme/Text';
import { Keyboard } from 'react-native';

interface IModal {
  body?: ReactNode;
  heading: string;
  primaryBtn: string;
  onCancel: () => void;
  onClose?: () => void;
  secondaryBtn?: string | null;
  primaryBtnHandler?: () => void;
  secondaryBtnHandler?: () => void;
}

const Modal: FC<IModal> = ({
  body,
  onClose,
  heading,
  onCancel,
  primaryBtn,
  primaryBtnHandler,
  secondaryBtnHandler,
  secondaryBtn = 'Cancel',
}) => {
  const ref = React.useRef(null);

  const handleCancel = () => onCancel();

  return (
    <GModal
      isOpen={true}
      onClose={onClose && onClose()}
      finalFocusRef={ref}
      onStartShouldSetResponder={() => true}
      onResponderRelease={Keyboard.dismiss}
    >
      <ModalBackdrop onPress={Keyboard.dismiss} />
      <ModalContent>
        <ModalHeader>
          <Heading size='lg'>{heading}</Heading>
          <ModalCloseButton onPress={handleCancel}>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          {typeof body === 'string' ? <Text>{body}</Text> : body}
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
