import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, style, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#ffffff', // Màu sắc thương hiệu
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ffffff', // Màu sắc thương hiệu
    borderRadius: 10,
  },
});

export default CustomTextInput;
