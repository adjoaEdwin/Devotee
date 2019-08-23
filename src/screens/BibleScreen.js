import React from 'react';
import {View, Text} from 'react-native';
import {headerStyle} from 'styles/theme';
import {Input} from '../components/Input';

const Bible = () => {
  //   const {headerStyle} = styles;
  return (
    <View>
      <View>
        <Text style={{...headerStyle}}>Bible screen📖</Text>
        <Text>Hello world</Text>
      </View>
    </View>
  );
};

export default Bible;
