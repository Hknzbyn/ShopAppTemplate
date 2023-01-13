import React from 'react';
import { Pressable, Menu, Center, Text } from 'native-base';
import { mvScale } from '../../../commons/ui';
import { Feather } from '@expo/vector-icons';
export default function FilterMenu(props) {
  return (
    <Menu
      placement='bottom'
      trigger={(triggerProps) => {
        return (
          <Pressable
            bg='#FFFFFF'
            rounded={'md'}
            shadow={0.5}
            h={mvScale(50)}
            w={mvScale(66)}
            justifyContent='center'
            alignItems='center'
            {...triggerProps}>
            <Feather name='filter' size={mvScale(20)} color='#606060' />
          </Pressable>
        );
      }}>
      <Menu.Item
        bg={props.activePage === 'AllOrders' ? '#FF9600' : 'none'}
        onPress={props.onPress1}>
        <Text color={props.activePage === 'AllOrders' ? '#FFF' : '#000'}>
          Tüm Siparişlerim
        </Text>
      </Menu.Item>
      <Menu.Item
        bg={props.activePage === 'CancelledOrders' ? '#FF9600' : 'none'}
        onPress={props.onPress2}>
        <Text color={props.activePage === 'CancelledOrders' ? '#FFF' : '#000'}>
          İptal Ettiğim Siparişlerim
        </Text>
      </Menu.Item>
      <Menu.Item
        bg={props.activePage === 'RefundOrders' ? '#FF9600' : 'none'}
        onPress={props.onPress3}>
        <Text color={props.activePage === 'RefundOrders' ? '#FFF' : '#000'}>
          İade Ettiğim Siparişlerim
        </Text>
      </Menu.Item>
    </Menu>
  );
}
