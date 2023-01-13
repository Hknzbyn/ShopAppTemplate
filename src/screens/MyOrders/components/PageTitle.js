import { Center, HStack, Text } from 'native-base';
import { mvScale } from '../../../commons/ui';

export default function PageTitle({ title, totalQuantity }) {
  return (
    <Center my='2' px='1' w={mvScale(325)}>
      <HStack w='full' justifyContent='space-between' alignItems='center'>
        <Text bold color={'#191D25'} fontSize={mvScale(14)}>
          {title}
        </Text>
        <Text color={'#606060'} fontSize={mvScale(12)}>
          Toplam <Text bold>{totalQuantity}</Text> Adet
        </Text>
      </HStack>
    </Center>
  );
}
