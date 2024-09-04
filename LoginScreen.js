import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Login button pressed:', { registrationNumber, password });
    try {
      const response = await fetch('https://graduateapp.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ registration_number: registrationNumber, password }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        if (data.message === 'Login successful') {
          onLogin(); // Notify AppNavigator of successful login
        } else {
          Alert.alert('Login Failed', data.message || 'Login failed.');
        }
      } else {
        Alert.alert('Login Failed', data.message || 'An unknown error occurred.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Failed', 'An error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={(text) => setRegistrationNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0033A0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LoginScreen;
