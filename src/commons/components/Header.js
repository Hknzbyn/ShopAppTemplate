import {
  Center,
  Text,
  Button,
  HStack,
  Popover,
  IconButton,
  Pressable,
} from 'native-base';
import React from 'react';
import BasketPop from './BasketPop';
import { BasketIcon, mvScale, PersonIcon } from '../ui';

export default function Header() {
  return (
    <Center w='full' h={mvScale(114)} bg='#660099'>
      <HStack
        w='full'
        justifyContent={'space-around'}
        alignItems='center'
        pb={mvScale(48)}>
        <IconButton
          h={mvScale(40)}
          w={mvScale(66)}
          variant='unstyled'
          bg='#5B0486'
          icon={<PersonIcon />}
        />

        <Text
          color='white'
          numberOfLines={2}
          w='25%'
          textAlign={'center'}
          fontSize={mvScale(20)}
          fontWeight='bold'>
          MAYZOR TEST CASE
        </Text>

        <BasketPop />
      </HStack>
    </Center>
  );
}
