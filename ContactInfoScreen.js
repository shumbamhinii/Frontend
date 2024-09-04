// ContactInfoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.info}>Email: support@university.com</Text>
      <Text style={styles.info}>Phone: +1234567890</Text>
      <Text style={styles.info}>Office Hours: Mon-Fri, 9 AM - 5 PM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
});

export default ContactInfoScreen;
