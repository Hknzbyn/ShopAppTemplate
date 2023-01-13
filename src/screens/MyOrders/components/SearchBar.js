import React from 'react';
import {
  Box,
  Center,
  Input,
  Pressable,
  IconButton,
  SearchIcon,
} from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { MicIcon, mvScale } from '../../../commons/ui';

export default function SearchBar(props) {
  const dispatch = useDispatch();
  
  return (
    <Center
      rounded={'md'}
      flexDirection={'row'}
      justifyContent='space-evenly'
      alignItems='center'
      bg='#FFFFFF'
      shadow={0.5}
      h={mvScale(50)}
      w={mvScale(240)}>
      <MicIcon size={mvScale(16)} color={'#606060'} />

      <Input
        multiline={false}
        variant='unstyled'
        w={mvScale(150)}
        size='md'
        borderWidth='0'
        placeholderTextColor={'#606060'}
        placeholder='Siparişlerinde Ara...'
        onChangeText={props.onChangeText}
        onEndEditing={props.onEndEditing}
        value={props.value}
      />
      <Pressable
        justifyContent='center'
        alignItems={'center'}
        backgroundColor='#F4F6FB'
        h={mvScale(36)}
        w={mvScale(45)}>
        <SearchIcon size={mvScale(16)} />
      </Pressable>

     
    </Center>
  );
}
