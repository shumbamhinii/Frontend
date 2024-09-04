import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ResultsScreen = () => {
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/results');
        const currentYear = new Date().getFullYear(); // Get the current year
        const formattedResults = response.data.map(result => ({
          ...result,
          classification: result.result <= 3 ? 'Pass' : 'Fail',
          year: currentYear, // Add the current year
        }));
        setResults(formattedResults);
      } catch (error) {
        console.error('Error fetching results:', error);
        alert('Failed to fetch results. Please try again.');
      }
    };

    fetchResults();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {results.map(result => (
        <TouchableRipple
          key={result.id}
          onPress={() => navigation.navigate('ResultDetail', { result })}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card style={styles.card}>
            <View style={styles.iconContainer}>
               <Icon name="school" size={50} color="#0033A0" />
            </View>
            <Card.Title title={`${result.course_code} - ${result.course_name}`} titleStyle={styles.cardTitle} />
            <Card.Content>
              <Text style={styles.content}>Result: {result.result}</Text>
              <Text style={styles.content}>Classification: {result.classification}</Text>
              <Text style={styles.content}>Semester: {result.semester}</Text>
              <Text style={styles.content}>Year: {result.year}</Text>
            </Card.Content>
          </Card>
        </TouchableRipple>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F8FF',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0', // Blue color for title
  },
  content: {
    fontSize: 14,
    color: '#333',
  },
});

export default ResultsScreen;