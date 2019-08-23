import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {baseStyle} from 'styles/theme';
import {TextInput} from '../components/Input';
import {dark} from '../styles/colors';

const Bible = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={baseStyle}>
        <Text>Bible screen</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          //   value={}
          //   onChangeText={}
          autoCorrect={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  inputStyle: {
    height: 40,
    color: dark,
    fontSize: 18,
    lineHeight: 23,
    borderColor: '#000',
  },
});

export default Bible;
