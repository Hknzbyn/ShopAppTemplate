import React, { useEffect, useState } from 'react';
import {
  Center,
  HStack,
  ScrollView,
  Text,
  PresenceTransition,
  Menu,
} from 'native-base';
import PageTitle from '../components/PageTitle';
import { Pressable } from 'react-native';
import { mvScale } from '../../../commons/ui';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import {
  changeModalVisible,
  changeIsLoading,
} from '../../../redux/slices/rootSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilter,
  setFilter,
  selectOrderHistory,
  selectSearchText,
  selectedSortType,
} from '../../../redux/slices/rootSlice';
import { FlashList } from '@shopify/flash-list';
import { renderItem } from '../components/renderItem';

const AllOrders = () => {
  const selectedFilter = useSelector(selectFilter);
  const selectedSort = useSelector(selectedSortType);
  const orderHistory = useSelector(selectOrderHistory);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const searchText = useSelector(selectSearchText);

  useEffect(() => {
    const filterData = (data, filter) => {
      dispatch(changeIsLoading(true));
      switch (filter) {
        case 'all':
          return setData(orderHistory);

        case 'completed' || 'failed':
          let filtered = data.filter((item) => item.status === 'completed');
          return setData(filtered);

        case 'continuing':
          let filtered2 = data.filter((item) => item.status === 'continuing');
          return setData(filtered2);

        default:
          break;
      }
    };
    filterData(data, selectedFilter);
    dispatch(changeIsLoading(false));
  }, [selectedFilter]);

  const sortData = () => {
    if (selectedSort === 'ascendingPrice') {
      return (a, b) => a.total_price - b.total_price;
    } else if (selectedSort === 'descendingPrice') {
      return (a, b) => b.total_price - a.total_price;
    } else if (selectedSort === 'alphabetical') {
      return (a, b) => a.items[0].title.localeCompare(b.items[0].title);
    }
  };

  useEffect(() => {}, [selectedSort]);

  useEffect(() => {
    dispatch(changeIsLoading(true));
    orderHistory.length !== 0 ? setData(orderHistory) : setData([]);
    setTimeout(() => {
      dispatch(changeIsLoading(false));
    }, 1000);
  }, [orderHistory]);

  const MyButton = ({ title, onPress, icon }) => {
    return (
      <Pressable onPress={onPress} disabled={isOpen}>
        <Center
          rounded={'md'}
          shadow={2}
          w={mvScale(150)}
          h={mvScale(40)}
          justifyContent={'center'}
          alignItems={'center'}
          bg='#FFFFFF'>
          <HStack w='full' justifyContent={'center'}>
            <Center mx='1'>{icon}</Center>
            <Text fontSize={mvScale(14)} mx='1' color='#AAACAF'>
              {title}
            </Text>
          </HStack>
        </Center>
      </Pressable>
    );
  };
  const GrowingButton = ({ title, icon }) => {
    const MenuElement = ({ value, title }) => {
      return (
        <Menu.Item
          value={value}
          bg={selectedFilter === value ? '#FF9600' : '#FFFFFF'}
          w={mvScale(150)}
          h={mvScale(45)}
          justifyContent={'center'}
          alignItems={'center'}
          onPress={() => {
            dispatch(setFilter(value)), setIsOpen(false);
          }}>
          <Text
            fontSize={mvScale(16)}
            color={selectedFilter === value ? '#FFFFFF' : '#000000'}>
            {title}
          </Text>
        </Menu.Item>
      );
    };
    return (
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <Center
          rounded={'md'}
          shadow={2}
          w={mvScale(150)}
          h={mvScale(40)}
          justifyContent={'center'}
          alignItems={'center'}
          bg='#FFFFFF'>
          <HStack w='full' justifyContent={'center'}>
            <Center mx='1'>{icon}</Center>
            <Text fontSize={mvScale(14)} mx='1' color='#AAACAF'>
              {!isOpen ? title : 'KAPAT'}
            </Text>
          </HStack>
        </Center>
        <PresenceTransition
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 250,
            },
          }}>
          <Center
            w={!isOpen ? 0 : mvScale(150)}
            h={!isOpen ? 0 : mvScale(150)}
            bg='#FFFFFF'
            rounded='md'>
            <MenuElement title='Hepsi' value='all' />
            <MenuElement title='Tamamlananlar' value='completed' />
            <MenuElement title='Devam Edenler' value='continuing' />
          </Center>
        </PresenceTransition>
      </Pressable>
    );
  };

  return (
    <Center flex={1} w='full' bg='#F4F6FB'>
      <Center>
        <PageTitle title={'Siparişlerim'} totalQuantity={data.length} />
      </Center>
      <HStack mb='2' w={mvScale(325)} justifyContent={'space-between'}>
        <GrowingButton
          title={'Filtrele'}
          icon={<Feather name='filter' size={mvScale(18)} color='#606060' />}
        />
        <MyButton
          title={'Sırala'}
          onPress={() => {
            dispatch(changeModalVisible(true));
          }}
          icon={
            <FontAwesome5
              name='sort-amount-down-alt'
              size={mvScale(16)}
              color='#606060'
            />
          }
        />
      </HStack>

      <ScrollView my='2' w='full'>
        <FlashList
          data={data
            .filter((x) =>
              searchText === ''
                ? x
                : x.items[0].title
                    .toUpperCase()
                    .includes(searchText.toUpperCase()) ||
                  x.items[0].description
                    .toUpperCase()
                    .includes(searchText.toUpperCase()) ||
                  x.items[0].brand
                    .toUpperCase()
                    .includes(searchText.toUpperCase())
            )
            .sort(sortData())}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={100}
          pt='2'
        />
      </ScrollView>
    </Center>
  );
};
export default AllOrders;
