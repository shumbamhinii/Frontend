import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ResearchProgramsScreen = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/research-programs');
        setPrograms(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching research programs:', error);
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const handlePress = (program) => {
    navigation.navigate('ResearchInfo', { research: program });
  };

  const renderProgramItem = ({ item }) => (
    <Card style={styles.card} onPress={() => handlePress(item)}>
      <Card.Content>
        <Text style={styles.programName}>{item.name}</Text>
        <Text style={styles.programDescription}>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Programs...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={programs}
        renderItem={renderProgramItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#0033A0',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  programName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0033A0',
  },
  programDescription: {
    fontSize: 14,
    marginVertical: 4,
    color: '#000000',
  },
});

export default ResearchProgramsScreen;
