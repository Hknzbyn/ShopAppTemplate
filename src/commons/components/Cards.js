import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import { DownIcon, mvScale, RightIcon } from '../ui';
const { height, width } = Dimensions.get('window');
import {
  CheckIcon,
  FailedIcon,
  RefundIcon,
  DarkTextColor,
  VisaIcon,
  PaypalIcon,
  MasterCardIcon,
} from '../ui';
import {
  Card,
  HStack,
  VStack,
  Box,
  Center,
  Text,
  Pressable,
  View,
} from 'native-base';

const InfoMessageCard = ({
  bg,
  icon,
  title,
  titleColor,
  description,
  descriptionColor,
  type,
  amount,
  sellerName,
  cardNumber,
  descriptionDetails,
}) => {
  return (
    <Center
      shadow={2}
      my='3'
      bg={bg}
      rounded='lg'
      w={mvScale(300)}
      minH={mvScale(50)}
      alignItems={'flex-start'}>
      <HStack space={5} p={2}>
        <Center maxW={mvScale(50)} maxH={mvScale(50)}>
          {icon}
        </Center>
        <VStack space={2} alignItems='flex-start'>
          <Text
            textAlign={'left'}
            color={titleColor || DarkTextColor}
            fontSize={mvScale(12)}>
            {title}
          </Text>
          {type === 'refunded' ? (
            <Text
              w={mvScale(225)}
              textAlign={'left'}
              color={descriptionColor}
              fontSize={mvScale(11)}>
              <Text bold>{amount}</Text> TL geri ödemeniz{' '}
              <Text bold>{sellerName} </Text> tarafından tarafından bankanıza
              yapılmıştır. <Text bold>{cardNumber} </Text> numaralı kredi
              kartına iade edildi. Belirtilen süre geçmesine rağmen geri
              ödemeniz yapılmadıysa <Text bold>bankanızla</Text> iletişime
              geçebilirsiniz.
            </Text>
          ) : (
            <Text
              w={mvScale(225)}
              textAlign={'left'}
              color={descriptionColor}
              fontSize={mvScale(11)}>
              {description}
            </Text>
          )}
        </VStack>
      </HStack>
    </Center>
  );
};
const PaymentInfoCard = ({
  bg,
  icon,
  title,
  titleColor,
  description,
  descriptionColor,
  type,
  descriptionDetails,
}) => {
  return (
    <Center
      mx='1'
      my='1'
      bg={bg}
      rounded='lg'
      w={mvScale(300)}
      maxH={mvScale(171)}
      px={2}
      py={2}
      alignItems={'flex-start'}>
      <VStack>
        <HStack space={5} p={2}>
          <Center maxW={mvScale(50)} maxH={mvScale(50)}>
            {icon}
          </Center>
          <Text></Text>
        </HStack>
        <Text>asdasdasd</Text>
      </VStack>
    </Center>
  );
};

export const Cards = {
  OrderInfoMessageCard: ({
    type,
    name,
    amount,
    sellerName,
    cardNumber,
    order_date,
    order_date_time,
    cancel_date,
    cancel_date_time,
  }) => {
    //  types: 'succes' | 'failed' | 'refundProcess' | 'refundComplete' | 'shippingProcess' ;
    switch (type) {
      case 'completed':
        return (
          <InfoMessageCard
            bg='#D4FCD7'
            icon={<CheckIcon />}
            title={name + ` adlı kişiye teslim edildi.`}
            description={
              `Teslim tarihi: ` + (order_date + ' ' + order_date_time)
            }
            descriptionColor='#13C122'
          />
        );
        break;
      case 'cancelled':
        return (
          <InfoMessageCard
            bg='#F6D6D8'
            icon={<FailedIcon />}
            title={'İptal işlemi sağlandı.'}
            description={
              `İptal Tarihi: ` + (cancel_date + ' ' + cancel_date_time)
            }
            descriptionColor='#FF0000'
          />
        );
        break;
      case 'refunded':
        return (
          <InfoMessageCard
            bg='#F5F5F5'
            icon={<RefundIcon />}
            title={'İade işlemi tamamlandı.'}
            descriptionColor='#606060'
            type={type}
            amount={amount}
            sellerName={sellerName}
            cardNumber={cardNumber}
          />
        );
        break;

      default:
        return null;
        break;
    }
  },
  OrderSummaryCard: ({ order_id, orderDetail }) => {
    return (
      <HStack my='2' w={mvScale(300)} justifyContent={'space-between'}>
        <VStack>
          <Text fontSize={mvScale(12)} color='#191D25' bold>
            Online Kredi/Banka Kartı
          </Text>
          <Text fontSize={mvScale(10)} color='#B0B0B0' bold>
            {orderDetail}
          </Text>
        </VStack>
        <Center w={mvScale(100)} h={mvScale(35)} bg='#F6E7D6' rounded='md'>
          <Text fontSize={mvScale(10)} color='#191D25'>
            Sipariş No: {order_id}
          </Text>
        </Center>
      </HStack>
    );
  },
  OrderPaymentInfoCard: ({
    amount,
    campaignName,
    campaignDescription,
    delivery_price,
    discount,
    cardNumber,
  }) => {
    return (
      <VStack my='2' w={mvScale(300)} h={mvScale(171)}>
        <VStack>
          <HStack
            borderColor={'#000'}
            borderWidth={0.2}
            rounded='md'
            maxW={mvScale(300)}
            h={mvScale(45)}
            justifyContent={'center'}
            alignItems='center'>
            <Center mx='2'>
              <VisaIcon size={mvScale(20)} color='#051244' />
            </Center>
            <Text
              textAlign={'left'}
              mx='2'
              fontSize={mvScale(12)}
              color='#191D25'>
              {cardNumber} (Kredi Kartı ile)
            </Text>
          </HStack>
          <VStack>
            <HStack my='1' w={mvScale(300)} justifyContent={'space-between'}>
              <Text fontSize={mvScale(12)}>Kargo</Text>
              <Text fontSize={mvScale(12)}>{delivery_price},00</Text>
            </HStack>
            <HStack my='1' w={mvScale(300)} justifyContent={'space-between'}>
              <Text fontSize={mvScale(12)}>Ürünler</Text>
              <Text fontSize={mvScale(12)}>{amount - delivery_price},00</Text>
            </HStack>
            <HStack my='1' w={mvScale(300)} justifyContent={'space-between'}>
              <VStack maxW={mvScale(250)}>
                <Text fontSize={mvScale(12)} color='#660099'>
                  {campaignName}
                </Text>
                <Text fontSize={mvScale(12)} color='#660099'>
                  {campaignDescription} & Lorem Ipsum is simply dummy text of
                  the printing.
                </Text>
              </VStack>
              <Text fontSize={mvScale(12)} color='#660099'>
                {discount},00
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    );
  },
  OrderNote: ({ orderNote }) => {
    return (
      <VStack my='2' w={mvScale(300)} h={mvScale(42)}>
        <Text fontSize={mvScale(12)} color='#191D25'>
          Sipariş Notu:
        </Text>
        <Text fontSize={mvScale(10)} color='#B0B0B0'>
          {orderNote}
        </Text>
      </VStack>
    );
  },
  
};
