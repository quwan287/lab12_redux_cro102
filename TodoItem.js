import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, onDelete, onToggleStatus, onEdit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={[styles.title, item.completed && styles.completed]}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onToggleStatus} style={styles.actionButton}>
          <Text>{item.completed ? 'Không hoàn thành' : 'Hoàn thành'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
          <Text>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
          <Text>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor:'#ffffff',
    borderRadius:10,
    margin:10
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
  },
  description: {
    color: '#777',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 10,
  },
});

export default TodoItem;
