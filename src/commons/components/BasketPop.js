import React from 'react';
import { Popover, Button, Text, Pressable, HStack, Center } from 'native-base';
import { mvScale, TextColor } from '../ui';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../redux/slices/rootSlice';
export default function BasketPop() {
  const basketCount = useSelector(selectBasket);
  return (
    <Popover
      placement='bottom end'
      trigger={(triggerProps) => {
        return (
          <Pressable
            rounded={'md'}
            variant='subtle'
            bg='#FF9600'
            justifyContent={'space-evenly'}
            alignItems={'center'}
            flexDirection={'row'}
            h={mvScale(40)}
            w={mvScale(66)}
            {...triggerProps}>
            <FontAwesome5
              name='shopping-basket'
              size={mvScale(20)}
              color='#ffffff'
            />
            <Text fontSize={mvScale(16)} color={'#ffffff'}>
              ({basketCount.length})
            </Text>
          </Pressable>
        );
      }}>
      <Popover.Content w={mvScale(200)}>
        <Popover.Body w='full' borderTopWidth='0'>
          <Text fontSize={mvScale(20)} textAlign={'center'}>
            SEPET
          </Text>
        </Popover.Body>
        <Popover.Footer
          justifyContent={'center'}
          alignItems='center'
          borderTopWidth='0'>
          {basketCount.length === 0 ? (
            <Center w={mvScale(180)} h={mvScale(100)}>
              <Text textAlign={'center'} fontSize={mvScale(14)} color='#000'>
                {' '}
                Sepetinizde ürün bulunmamaktadır.{' '}
              </Text>
            </Center>
          ) : (
            <HStack
              w={mvScale(180)}
              h={mvScale(100)}
              justifyContent={'space-evenly'}
              alignItems='center'></HStack>
          )}

          <Button
            disabled={basketCount.length === 0 ? true : false}
            bg={basketCount.length === 0 ? 'blueGray.300' : '#FF9600'}
            _pressed={{ bg: 'gray.400' }}>
            Alışverişi Tamamla
          </Button>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  );
}
