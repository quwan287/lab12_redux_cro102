import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { MyTheme, useTheme } from './components/Theme';
import Block from './components/Block ';
import CustomTextInput from './components/CustomTextInput ';
import CustomButton from './components/CustomButton ';



const App = () => {
  return (
    <MyTheme>
      <RegistrationScreen />
    </MyTheme>
  );
};

const RegistrationScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [contact, setContact] = useState('');

  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme === 'light' ? '#fff' : '#000' }]}>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCNUmgIXmb9DdD1k4GURmooIHJ0j-YSRACQ&s'}} style={styles.logo} />
      <Block title="Thông tin cá nhân">
        <CustomTextInput label="Họ và tên" value={name} onChangeText={setName} style={undefined} />
        <CustomTextInput label="Email" value={email} onChangeText={setEmail} style={undefined} />
      </Block>
      <Block title="Thông tin khóa học">
        <CustomTextInput label="Khóa học" value={course} onChangeText={setCourse} style={undefined} />
      </Block>
      <Block title="Thông tin liên hệ">
        <CustomTextInput label="Liên hệ" value={contact} onChangeText={setContact} style={undefined} />
      </Block>
      <CustomButton title="Đăng ký" onPress={() => alert('Đăng ký thành công!')} style={undefined} />
      <CustomButton title="Đổi giao diện" onPress={toggleTheme} style={undefined} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius:10
  },
});

export default App;
