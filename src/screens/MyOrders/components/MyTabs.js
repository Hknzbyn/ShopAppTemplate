import React from 'react';
import { Center, Divider, Pressable, Text } from 'native-base';
import { mvScale } from '../../../commons/ui';

export default function MyTabs(props) {
  const OpenPageButton = ({ pageName, active, onPress }) => {
    return (
      <Pressable onPress={onPress}>
        <Center
          w={mvScale(90)}
          rounded='md'
          shadow={2}
          h={mvScale(40)}
          bg={active ? '#FF9600' : '#F4F6FB'}>
          <Text fontSize={mvScale(12)} color={active ? '#FFFFFF' : '#AAACAF'}>
            {pageName}
          </Text>
        </Center>
      </Pressable>
    );
  };

  return (
    <Center
      w={mvScale(325)}
      h={mvScale(70)}
      bg='#FFFFFF'
      rounded='md'
      shadow={2}
      flexDirection='row'
      justifyContent='space-evenly'
      alignItems='center'>
      <OpenPageButton
        pageName='Siparişlerim'
        active={props.activePage === 'AllOrders' ? true : false}
        onPress={props.goAllOrders}
      />
      <OpenPageButton
        pageName='İptallerim'
        active={props.activePage === 'CancelledOrders' ? true : false}
        onPress={props.goCancelledOrders}
      />
      <OpenPageButton
        pageName='İadelerim'
        active={props.activePage === 'RefundOrders' ? true : false}
        onPress={props.goRefundOrders}
      />
    </Center>
  );
}
