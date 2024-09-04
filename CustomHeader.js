// CustomHeader.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function CustomHeader() {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="GradUate" titleStyle={styles.title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="bell" onPress={() => {}} />
      <Appbar.Action icon="account" onPress={() => {}} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0033A0', // Custom blue color for the header
  },
  title: {
    color: '#0033A0, // White text color for the title
  },
});
