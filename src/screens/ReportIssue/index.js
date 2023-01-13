import React from 'react';
import { Text, Center, Heading } from 'native-base';
const ReportIssue = ({ route, navigation }) => {
  const { order_id } = route.params;

  return (
    <Center flex={1} bg='red.200'>
      <Heading my='2' size={'2xl'}>
        Report Issue Screen
      </Heading>

      <Text fontSize={20}>
        {' '}
        Sorun bildirmek istediğiniz sipariş no :{' '}
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
export default ReportIssue;
