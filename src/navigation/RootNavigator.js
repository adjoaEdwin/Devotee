import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import HomeScreen from 'screens/HomeScreen';
import MessageScreen from 'screens/AddMessage';
import BibleScreen from 'screens/BibleScreen';
import ProfileScreen from 'screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {primary, lightGrey} from 'styles';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="ios-home" color={tintColor} theme="filled" size={30} />
        ),
      },
    },
    Bible: {
      screen: BibleScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="ios-book" color={tintColor} theme="filled" size={30} />
        ),
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: 'Message',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            name="ios-add-circle-outline"
            color={tintColor}
            theme="filled"
            size={30}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused, tintColor}) => (
          <Icon name="ios-person" color={tintColor} theme="filled" size={30} />
        ),
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        resetOnBlur: true,
      };
    },
    tabBarOptions: {
      activeTintColor: primary,
      inactiveTintColor: lightGrey,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        paddingTop: 5,
      },
    },
  },
  {headerMode: 'screen'},
);

class MainAppContainer extends Component {
  render() {
    return <AppContainer />;
  }
}

export default MainAppContainer;

const MainAppNavigator = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
  },
);

const AppContainer = createAppContainer(MainAppNavigator);
