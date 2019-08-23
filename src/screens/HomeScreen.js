import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Products from '../components/Products';
import {headerStyle} from 'styles/theme';
import {fonts} from '../styles/fonts';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{...headerStyle}}>Sermons 📚</Text>
      <Text style={[fonts.tertiary, {textAlign: 'center', paddingBottom: 50}]}>
        Take each message to heart
      </Text>
      <Text>Today's Sermon</Text>
      <ScrollView>
        <Products />
        <Products />
        <Products />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
