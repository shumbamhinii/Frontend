import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomHeader = ({ navigation, title }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={title} titleStyle={styles.title} />
      <Appbar.Action icon="calendar" color="#FFFFFF" onPress={() => {}} />
      <Appbar.Action icon="magnify" color="#FFFFFF" onPress={() => {}} />
      <Appbar.Action icon="account" color='#0033A0' onPress={() => {}} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0033A0',
  },
  title: {
    color: '#0033A0',
  },
});

export default CustomHeader;
