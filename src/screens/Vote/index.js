import React from 'react';
import { Button, Text, Center, Heading } from 'native-base';
import useNavigationParam from '@react-navigation/native';
const Vote = ({ route, navigation }) => {
  const { order_id } = route.params;

  return (
    <Center flex={1} bg='blueGray.300'>
      <Heading my='2' size={'2xl'}>
        Vote Screen
      </Heading>

      <Text fontSize={20}>
        {' '}
        Oy vermek istediğiniz sipariş no :{' '}
        <Text bold>{JSON.stringify(order_id)}</Text>
      </Text>
      <Text
        fontSize={20}
        underline
        onPress={() => {
          navigation.goBack();
        }}>
        goBack
      </Text>
    </Center>
  );
};

export default Vote;
