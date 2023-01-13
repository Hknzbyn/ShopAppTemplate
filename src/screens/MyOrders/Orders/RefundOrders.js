import React, { useEffect, useState } from 'react';
import { Center, ScrollView } from 'native-base';
import PageTitle from '../components/PageTitle';
import { changeIsLoading } from '../../../redux/slices/rootSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectOrderHistory,
  selectSearchText,
} from '../../../redux/slices/rootSlice';
import { FlashList } from '@shopify/flash-list';
import { renderItem } from '../components/renderItem';

const RefundOrders = () => {
  const orderHistory = useSelector(selectOrderHistory);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const searchText = useSelector(selectSearchText);
  useEffect(() => {
    dispatch(changeIsLoading(true));
    let filtered = orderHistory.filter((item) => item.status === 'refunded');
    setData(filtered);
    setTimeout(() => {
      dispatch(changeIsLoading(false));
    }, 1000);
  }, [orderHistory]);

  return (
    <Center flex={1} w='full' bg='#F4F6FB'>
      <Center>
        <PageTitle
          title={'İade Edilen Siparişler'}
          totalQuantity={data.length}
        />
      </Center>
      <ScrollView my='2' w='full'>
        <FlashList
          data={data.filter((x) =>
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
          )}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={100}
          pt='2'
        />
      </ScrollView>
    </Center>
  );
};
export default RefundOrders;
