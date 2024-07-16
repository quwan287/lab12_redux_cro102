import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    
  }, []);

  const handleAddOrEditTodo = () => {
    if (editingIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editingIndex ? { ...todo, title, description } : todo
      );
      setTodos(updatedTodos);
      setEditingIndex(null);
    } else {
      setTodos([...todos, { title, description, completed: false }]);
    }
    setTitle('');
    setDescription('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleStatus = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    const todo = todos[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setEditingIndex(index);
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const incompleteCount = todos.length - completedCount;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <Text style={styles.counter}>Hoàn thành: {completedCount} / Không hoan thành: {incompleteCount}</Text>
      <TextInput
        style={styles.input}
        placeholder="Tiêu đề"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Mô tả"
        value={description}
        onChangeText={setDescription}
      />
      <Button
        title={editingIndex !== null ? 'Sửa Todo' : 'Thêm Todo'}
        onPress={handleAddOrEditTodo} color={'#F133F5'}
      />
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <TodoItem
            item={item}
            onDelete={() => handleDeleteTodo(index)}
            onToggleStatus={() => handleToggleStatus(index)}
            onEdit={() => handleEditTodo(index)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#FCD4FD'
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    justifyContent:'center',
    alignContent:'center'
  },
  counter: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;
