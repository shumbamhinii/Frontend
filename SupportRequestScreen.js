import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SupportRequestScreen = () => {
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = () => {
    alert('Support request submitted. We will get back to you soon.');
    setEmail('');
    setIssue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit a Support Request</Text>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email" size={20} color="#0033A0" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Your Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="comment-text" size={20} color="#0033A0" style={styles.icon} />
        <TextInput
          style={[styles.input, styles.issueInput]}
          value={issue}
          onChangeText={setIssue}
          placeholder="Describe your issue"
          multiline
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} color="#0033A0" />
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  issueInput: {
    height: 120, // Increased height for multiline input
    textAlignVertical: 'top', // Ensures text starts at the top
  },
  icon: {
    padding: 10,
  },
});

export default SupportRequestScreen;
