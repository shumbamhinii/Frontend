// FeesPaymentScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You might need to install this package if not already
import { useNavigation } from '@react-navigation/native';
const FeesPaymentScreen = () => {
 const navigation = useNavigation();
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [amount, setAmount] = useState('');

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  const handlePaymentOptionPress = (option) => {
    // Navigate to the specific payment option screen or handle payment process
    console.log(`Selected payment option: ${option} in ${currency}`);
  };

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleSubmit = () => {
    if (!amount) {
      alert('Please enter an amount.');
      return;
    }
    // Handle the submission logic here
    console.log(`Submitting ${amount} ${currency}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Select a Payment Option</Text>

      {/* Currency Selector */}
      <Picker
        selectedValue={currency}
        style={styles.picker}
        onValueChange={handleCurrencyChange}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="ZWL" value="ZWL" />
      </Picker>

      {/* Amount Input */}
      <TextInput
        style={styles.amountInput}
        placeholder={`Enter amount in ${currency}`}
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
      />

      {/* Payment Options */}
      <TouchableOpacity onPress={() => handlePaymentOptionPress('Card')}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="credit-card" size={24} color="#000" style={styles.icon} />
            <View style={styles.info}>
              <Title>Pay with Card</Title>
              <Paragraph>Use your debit or credit card to pay fees in {currency}.</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePaymentOptionPress('EcoCash')}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="money-off" size={24} color="#000" style={styles.icon} />
            <View style={styles.info}>
              <Title>Pay with EcoCash</Title>
              <Paragraph>Use EcoCash to pay your fees in {currency}.</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePaymentOptionPress('TeleCash')}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="phone-android" size={24} color="#000" style={styles.icon} />
            <View style={styles.info}>
              <Title>Pay with TeleCash</Title>
              <Paragraph>Use TeleCash to pay your fees in {currency}.</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Proceed to Payment" onPress={handleSubmit} color="#007BFF" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures the ScrollView content takes up full space
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  amountInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  card: {
    marginVertical: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30, // Added some bottom margin to avoid the button getting cut off
    alignItems: 'center',
  },
});

export default FeesPaymentScreen;
