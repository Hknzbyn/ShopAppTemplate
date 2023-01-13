import { Text, Center, Heading } from 'native-base';
const ShippingTracking = ({ route, navigation }) => {
  const { order_id } = route.params;

  return (
    <Center flex={1} bg='blueGray.500'>
      <Heading my='2' size={'2xl'}>
        Shipping Tracking Screen
      </Heading>

      <Text fontSize={20}>
        {' '}
        Takip etmek istediğiniz sipariş no :{' '}
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

export default ShippingTracking;
