import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonStyled = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#3A83F1',
    backgroundColor: '#3A83F1',
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ButtonStyled;
