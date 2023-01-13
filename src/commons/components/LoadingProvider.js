import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import { changeIsLoading, selectIsLoading } from '../../redux/slices/rootSlice';
import { Heading } from 'native-base';

const LoadingProvider = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const toggleLoading = (value) => {
    if (value) {
      dispatch(changeIsLoading(true));
    } else {
      dispatch(changeIsLoading(false));
    }
  };

  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [scale, setScale] = useState(new Animated.Value(1.3));

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(changeIsLoading(false));
      }, 1500);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.spring(scale, {
        toValue: 1,
        bounciness: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.spring(scale, {
        toValue: 1.3,
        bounciness: 10,
        useNativeDriver: true,
      }).start();
    }
  }, [isLoading]);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          loading: {
            isLoading,
            toggleLoading,
          },
        })
      )}
      {isLoading && (
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(256, 256, 256, 0.5)',
          }}>
          <LottieView
            source={require('../../../assets/lottie/loading-lottie.json')}
            speed={0.8}
            autoPlay
            loop
          />
          <Heading color='#000' pt={48}>
            GEÇMİŞ VERİLER YÜKLENİYOR...
          </Heading>
        </Animated.View>
      )}
    </>
  );
};

export default LoadingProvider;
