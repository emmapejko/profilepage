import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import NameScreen from './app/screens/NameScreen';
import NumberScreen from './app/screens/NumberScreen';
import EmailScreen from './app/screens/EmailScreen';
import BioScreen from './app/screens/BioScreen';
import ProfileImageScreen from './app/screens/ProfileImageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
            initialParams={{image: '', name: 'Micah Smith', number: '(208) 206-5039', email: 'micahsmith@gmail.com', bio: 'Hi my name is Micah Smith...'}}
          />
          <Stack.Screen
            name="Name"
            component={NameScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Number"
            component={NumberScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Email"
            component={EmailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Bio"
            component={BioScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileImage"
            component={ProfileImageScreen}
            options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;