import { createStackNavigator } from '@react-navigation/stack';

//Screens
import BillingDetail from '../screens/BillingDetail';
import MyOrders from '../screens/MyOrders';

import Profile from '../screens/Profile/';
import Rate from '../screens/Rate';
import RefundRequest from '../screens/RefundRequest';
import Report from '../screens/ReportIssue';
import ShippingTracking from '../screens/ShippingTracking';
import Vote from '../screens/Vote';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='MyOrders'>
      <Stack.Screen name='BillingDetail' component={BillingDetail} />
      <Stack.Screen name='MyOrders' component={MyOrders} />

      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Rate' component={Rate} />
      <Stack.Screen name='RefundRequest' component={RefundRequest} />
      <Stack.Screen name='Report' component={Report} />
      <Stack.Screen name='ShippingTracking' component={ShippingTracking} />
      <Stack.Screen name='Vote' component={Vote} />
    </Stack.Navigator>
  );
};

export { HomeStack };
