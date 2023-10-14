import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import IconFilter from '../../../../assets/vectors/IconFilter';

const InputText = ({ value, onChangeText, placeholder, iconSource }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      <IconFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#3A83F1',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    marginVertical: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 46,
  },
});

export default InputText;