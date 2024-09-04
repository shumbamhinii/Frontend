import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const QuotationsScreen = () => {
  const [quotations, setQuotations] = useState([]);
  const [filteredQuotations, setFilteredQuotations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/quotations'); // Replace with your API endpoint
        //console.log(response.data);  // Debugging: Check the structure of the data
        setQuotations(response.data);
        setFilteredQuotations(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchQuotations();
  }, []);

  useEffect(() => {
    const result = quotations.filter(quotation =>
      quotation.program_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotations(result);
  }, [searchTerm, quotations]);

  const handlePress = (item) => {
    navigation.navigate('QuotationsDetails', { quotation: item });
  };

  const renderQuotationItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.card}>
        <Text style={styles.programName}>{item.program_name}</Text>
        <Text style={styles.totalUsd}>Total USD: {item.total_usd}</Text>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item) => item.id ? item.id.toString() : item.program_name;  // Use a fallback key

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error fetching data: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by program name"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredQuotations}
        keyExtractor={keyExtractor}
        renderItem={renderQuotationItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  programName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalUsd: {
    fontSize: 16,
    color: '#777',
  },
  listContainer: {
    paddingBottom: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default QuotationsScreen;
