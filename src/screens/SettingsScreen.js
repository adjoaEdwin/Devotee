import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const SettingsScreen = createStackNavigator({
  Settings: {
    screen: Settings,
  },
});

export default SettingsScreen;
