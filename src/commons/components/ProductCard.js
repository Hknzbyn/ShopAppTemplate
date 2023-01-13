import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import { DownIcon, mvScale, RightIcon } from '../ui';
const { height, width } = Dimensions.get('window');
import { CheckIcon, FailedIcon, RefundIcon, DarkTextColor } from '../ui';
import {
  Card,
  HStack,
  VStack,
  Box,
  Center,
  Text,
  Pressable,
  View,
  Accordion,
  Divider,
  Image,
} from 'native-base';
import { AccordionList, AccordionItem } from 'react-native-accordion-list-view';
import { Cards } from './Cards';
import { useNavigation } from '@react-navigation/native';

export default function ProductCard({
  order_id,
  status,
  order_status,
  order_total,
  order_products,
  type,
  name,

  amount,
  sellerName,
  cardNumber,
  order_date,
  order_date_time,
  cancel_date,
  cancel_date_time,
  campaignDescription,
  campaignName,
  orderNote,
  discount,
  total_pcs,
  delivery_price,
  image_source,

  item,
}) {
  const navigation = useNavigation();

  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const image_url = image_source;
  const statuss = status;
  const countItem = total_pcs;
  const product = item;
  const toogleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };

    Animated.timing(animationController, config).start();
    setShowContent(!showContent);
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const renderHead = () => {
    return (
      <HStack
        w={mvScale(300)}
        bg={'#FFFFFF'}
        justifyContent={'space-between'}
        alignItems='center'
        py={2}>
        <HStack
          w={mvScale(45)}
          h={mvScale(45)}
          rounded='md'
          space={5}
          bg='coolGray.100'
          justifyContent={'center'}
          alignItems='center'>
          <Image
            rounded='md'
            w={mvScale(45)}
            h={mvScale(45)}
            source={{
              uri: image_url,
            }}
            alt='Alternate Text'
          />
        </HStack>

        <VStack
          h={mvScale(40)}
          maxW={mvScale(300)}
          justifyContent={'center'}
          alignItems='flex-start'>
          <Text
            w={mvScale(100)}
            textAlign={'left'}
            color={DarkTextColor}
            fontSize={mvScale(12)}>
            {order_date} {order_date_time}
            <Text color={'#666666'} fontSize={mvScale(11)}>
              {' '}
              Toplam {total_pcs} Sipariş
            </Text>
          </Text>
        </VStack>

        <HStack
          shadow={2}
          rounded={'md'}
          w={mvScale(100)}
          h={mvScale(35)}
          bg='#F4F6FB'
          justifyContent={'space-evenly'}
          alignItems='center'>
          <Text bold fontSize={mvScale(12)}>
            {order_total},00 TL
          </Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            <RightIcon size={mvScale(20)} color='black' />
          </Animated.View>
        </HStack>
        <Center w={mvScale(20)} h={mvScale(20)} pb={mvScale(40)}>
          {statuss === 'completed' ? (
            <CheckIcon />
          ) : statuss === 'refunded' ? (
            <RefundIcon />
          ) : (
            <FailedIcon />
          )}
        </Center>
      </HStack>
    );
  };
  const renderBody = () => {
    return (
      <Center maxW={mvScale(300)}>
        <Divider />
        <Cards.OrderSummaryCard order_id={order_id} />
        <Divider />
        <Cards.OrderPaymentInfoCard
          campaignDescription={campaignDescription}
          campaignName={campaignName}
          cardNumber={cardNumber}
          discount={discount}
          amount={amount}
          delivery_price={delivery_price}
        />
        <Divider />
        <Cards.OrderNote orderNote={orderNote} />
        <Divider />

        <Cards.OrderInfoMessageCard
          type={type}
          name={name}
          amount={amount}
          sellerName={sellerName}
          cardNumber={cardNumber}
          order_date={order_date}
          order_date_time={order_date_time}
          cancel_date={cancel_date}
          cancel_date_time={cancel_date_time}
        />
        <Center
          flexDirection={'row'}
          flexWrap={'wrap'}
          alignContent={'space-around'}
          my='2'
          w={mvScale(300)}>
          <ActionButton
            onPress={() => {
              navigation.push('Rate', {
                order_id: order_id,
              });
            }}
            name='Değerlendir'
          />
          <ActionButton
            onPress={() => {
              navigation.push('BillingDetail', {
                order_id: order_id,
              });
            }}
            name='Fatura Göster'
          />
          <ActionButton
            onPress={() => {
              navigation.push('ShippingTracking', {
                order_id: order_id,
              });
            }}
            name='Kargo Takip'
          />
          <ActionButton
            onPress={() => {
              navigation.push('Report', {
                order_id: order_id,
              });
            }}
            name='Sorun Bildir'
          />
          <ActionButton
            onPress={() => {
              navigation.push('RefundRequest', {
                order_id: order_id,
              });
            }}
            name='İade Talebi'
          />
          <ActionButton
            onPress={() => {
              navigation.push('Vote', {
                order_id: order_id,
              });
            }}
            name='Oy Kullan'
          />
        </Center>
      </Center>
    );
  };

  const ActionButton = ({ name, onPress }) => {
    return (
      <Pressable
        rounded='md'
        shadow={1}
        m={1}
        bg='#F4F6FB'
        w={mvScale(90)}
        h={mvScale(40)}
        justifyContent='center'
        alignItems={'center'}
        onPress={onPress}>
        <Text>{name}</Text>
      </Pressable>
    );
  };

  return (
    <Center>
      <AccordionItem
        customTitle={renderHead}
        customBody={renderBody}
        animationDuration={300}
        isOpen={false}
        containerStyle={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
        customIcon={() => {
          return null;
        }}
        expandMultiple={false}
        onPress={(isOpen) => toogleListItem()}
      />
    </Center>
  );
}
