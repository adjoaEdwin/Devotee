import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {dark} from 'styles';
//import {Input} from 'react-native-elements';

const Input = ({
  title,
  placeholder,
  onChangeText,
  onSubmitEditing,
  autoCorrect,
  secureTextEntry,
  value,
}) => {
  return (
    <TextInput
      inputStyle={styles.inputStyle}
      title={title}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCorrect={autoCorrect}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    height: 40,
    color: dark,
    fontSize: 18,
    lineHeight: 23,
    borderColor: '#000',
    backgroundColor: '#F5F5F5',
  },
});

export {Input};
