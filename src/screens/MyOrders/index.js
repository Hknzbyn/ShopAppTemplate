import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards, ProductCard } from '../../commons/components';
import Header from '../../commons/components/Header';

import { Center, Divider, HStack, Menu } from 'native-base';
import { mvScale } from '../../commons/ui';
import MyTabs from './components/MyTabs';
import SearchBar from './components/SearchBar';
import FilterMenu from './components/FilterMenu';
import AllOrders from './Orders/AllOrders';
import CancelledOrders from './Orders/CancelledOrders';
import RefundOrders from './Orders/RefundOrders';
import { selectSearchText, setSearchText } from '../../redux/slices/rootSlice';

const MyOrders = ({ navigation }) => {
  const [activeOrders, setActiveOrders] = useState('AllOrders'); // AllOrders, CancelledOrders, RefundOrders
  const searchText = useSelector(selectSearchText);
  const dispatch = useDispatch();
  const OpenSelectedOrders = () => {
    switch (activeOrders) {
      case 'AllOrders':
        return <AllOrders />;
        break;
      case 'CancelledOrders':
        return <CancelledOrders />;
        break;
      case 'RefundOrders':
        return <RefundOrders />;
        break;
      default:
        break;
    }
  };

  return (
    <Center
      flex='1'
      bg='#F4F6FB'
      alignItems='center'
      justifyContent='flex-start'>
      <Header />
      <Center position={'absolute'} pt={mvScale(72)}>
        <MyTabs
          activePage={activeOrders}
          goAllOrders={() => setActiveOrders('AllOrders')}
          goCancelledOrders={() => setActiveOrders('CancelledOrders')}
          goRefundOrders={() => setActiveOrders('RefundOrders')}
        />
      </Center>
      <HStack w={mvScale(325)} justifyContent='space-between' mt={mvScale(48)}>
        <SearchBar
          size={'lg'}
          value={searchText}
          onChangeText={(text) => dispatch(setSearchText(text))}
         
        />
        <FilterMenu
          activePage={activeOrders}
          onPress1={() => setActiveOrders('AllOrders')}
          onPress2={() => setActiveOrders('CancelledOrders')}
          onPress3={() => setActiveOrders('RefundOrders')}
        />
      </HStack>

      <OpenSelectedOrders />
    </Center>
  );
};

export default MyOrders;
