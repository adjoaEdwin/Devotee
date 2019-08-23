import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {white} from 'styles';

const Button = ({onPress, children, style}) => {
  const {textStyle} = styles;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: white,
    alignSelf: 'center',
    fontSize: 16,
  },
});

export {Button};
