import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

const AddMessage = () => {
  return (
    <View>
      <Text>Add a New Message</Text>
    </View>
  );
};

const MessageScreen = createStackNavigator({
  Message: {
    screen: AddMessage,
  },
});

export default MessageScreen;
