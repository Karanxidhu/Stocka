import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StockScreen from './screens/StockScreen';
import AllStocks from './screens/AllStocks';
import NotificationScreen from './screens/NotificationScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="All" component={AllStocks} />
        <Stack.Screen name="Notify" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
