// TechnicalSupportScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TechnicalSupportScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ChatBot')}>
        <Card style={styles.card}>
          <MaterialCommunityIcons name="robot" size={50} color="#0033A0" style={styles.icon} />
          <Card.Title title="ChatBot" />
          <Card.Content>
            <Text style={styles.content}>Interact with our ChatBot for quick support.</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('ChatBot')}>Learn More</Button>
          </Card.Actions>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SupportReq')}>
        <Card style={styles.card}>
          <MaterialCommunityIcons name="email" size={50} color="#0033A0" style={styles.icon} />
          <Card.Title title="Submit a Support Request" />
          <Card.Content>
            <Text style={styles.content}>Submit a support request for more personalized assistance.</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => navigation.navigate('SupportReq')}>Learn More</Button>
          </Card.Actions>
        </Card>
      </TouchableOpacity>

      <Card style={styles.card}>
        <MaterialCommunityIcons name="contacts" size={50} color="#0033A0" style={styles.icon} />
        <Card.Title title="Contact Information" />
        <Card.Content>
          <Text style={styles.content}>Find contact details for various support channels.</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('ContactInfo')}>Learn More</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    alignSelf: 'center',
    marginVertical: 16,
  },
  content: {
    fontSize: 14,
    color: '#000',
  },
});

export default TechnicalSupportScreen;
