import React, { useEffect, useState } from 'react';
import {
  Button,
  Center,
  HStack,
  Modal,
  Text,
  Checkbox,
  Divider,
} from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectModalVisible,
  changeSortType,
  changeModalVisible,
  selectSortTypes,
  selectedSortType,
} from '../../redux/slices/rootSlice';
import { mvScale } from '../ui';

export default function SortModal() {
  const modalVisible = useSelector(selectModalVisible);
  const sortTypes = useSelector(selectSortTypes);
  const selectedSort = useSelector(selectedSortType);
  const dispatch = useDispatch();

  useEffect(() => {}, [modalVisible]);
  const DividerMy = () => {
    return <Divider w={mvScale(300)} my='4' mx='auto' />;
  };
  const [checked, setChecked] = React.useState('default');

  useEffect(() => {
    setSortType(checked);
  }, [checked]);

  const setSortType = (val) => {
    dispatch(changeSortType(val));
  };

  const SelectSortMethod = ({ value, title }) => {
    return (
      <Center alignItems={'flex-start'}>
        <Checkbox
          colorScheme={'orange'}
          value={value}
          isChecked={
            value === checked ? true : value === selectedSort ? true : false
          }
          onChange={() => {
            setChecked(value);
          }}>
          <Text ml={2}> {title} </Text>
        </Checkbox>
        <DividerMy />
      </Center>
    );
  };
  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => {
        dispatch(changeModalVisible(false));
      }}
      closeOnOverlayClick={true}
      justifyContent='center'
      alignItems={'center'}
      position='absolute'>
      <Modal.Content w={mvScale(325)}>
        <Modal.CloseButton borderWidth={'.5'} borderRadius={'full'} />

        <Modal.Header>
          <Text bold fontSize={mvScale(20)}>
            Sırala
          </Text>
        </Modal.Header>
        <Modal.Body>
          <SelectSortMethod value={'default'} title='Varsayılan' />
          <SelectSortMethod value={'bestSeller'} title='En Çok Satanlar (-)' />
          <SelectSortMethod value={'ascendingPrice'} title='Artan Fiyat' />
          <SelectSortMethod value={'descendingPrice'} title='Azalan Fiyat' />
          <SelectSortMethod value={'newest'} title='En Yeniler (-)' />
          <SelectSortMethod value={'alphabetical'} title='Alfabetik' />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
