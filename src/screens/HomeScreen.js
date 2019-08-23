import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Homestack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default Homestack;
