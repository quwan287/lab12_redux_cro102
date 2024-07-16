import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children, style }) => {
  return (
    <View style={[styles.block, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 15,
    backgroundColor: '#FAC1FB',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff', // Màu hồng
    marginBottom: 10,
  },
  content: {
    padding: 10,
  },
});

export default Block;
