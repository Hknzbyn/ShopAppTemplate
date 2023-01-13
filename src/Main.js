import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsLoading } from './redux/slices/rootSlice';
import LoadingProvider from './commons/components/LoadingProvider';
import { HomeStack } from './navigation/StackNavigator';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SortModal } from './commons/components';
import { setOrderHistory } from './redux/slices/rootSlice';
import orderHistoryDatas from '../orderHistoryDatas.json';

const Main = () => {
  const dispatch = useDispatch();

  //Like a api call
  const fetchDatas = () => {
    setTimeout(() => {
      dispatch(setOrderHistory(orderHistoryDatas));
      dispatch(changeIsLoading(false));
    }, 2000);
  };

  useEffect(() => {
    dispatch(changeIsLoading(true));
    fetchDatas();
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <LoadingProvider>
        <HomeStack />
        <SortModal />
      </LoadingProvider>
    </NavigationContainer>
  );
};

export default Main;
