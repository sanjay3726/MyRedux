import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './component/ProductWraper';
import ProductList from './component/ProductList';

// Capitalize the stack instance
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={ProductWrapper} />
       <Stack.Screen name="ProductList" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
