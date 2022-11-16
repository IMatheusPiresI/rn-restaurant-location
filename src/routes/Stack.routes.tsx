import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Menu } from '../screens/Menu';
import { RestaurantLocation } from '../screens/RestaurantLocation';

const Stack = createStackNavigator();

const StackRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="RestaurantLocation" component={RestaurantLocation} />
    <Stack.Screen name="Menu" component={Menu} />
  </Stack.Navigator>
);

export default StackRoutes;
