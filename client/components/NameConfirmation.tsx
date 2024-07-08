import Modal from './Modal';
import { setName } from '@/store/user';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  EditIcon,
  Icon,
  Input,
  InputField,
  Pressable,
} from '@gluestack-ui/themed';
import Box from './Theme/Box';
import Text from './Theme/Text';

const NameConfirmation = () => {
  const { name } = useAppSelector((state) => state.user);
  const [userName, setUserName] = useState(name);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!show) {
      setUserName(name);
    }
  }, [show]);

  return (
    <Box justifyContent='center' alignItems='center' flexDirection='row'>
      <Text>Welcome, {name}</Text>
      <Pressable onPress={() => setShow(true)}>
        <Icon as={EditIcon} m='$2' w='$4' h='$4' />
      </Pressable>
      {(show || !name) && (
        <Modal
          heading='Enter Name'
          primaryBtn='Save'
          onCancel={() => setShow(false)}
          secondaryBtn={null}
          primaryBtnHandler={() => {
            dispatch(setName(userName));
            setShow(false);
          }}
          body={
            <Input
              variant='underlined'
              size='xl'
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                placeholder='Enter Text here'
                value={userName}
                onChangeText={(t) => {
                  setUserName(t);
                }}
              />
            </Input>
          }
        />
      )}
    </Box>
  );
};

export default NameConfirmation;
