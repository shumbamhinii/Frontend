import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const CoResourcesScreen = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/resources');
        setResources(response.data);
        setFilteredResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredResources(
        resources.filter((resource) =>
          resource.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredResources(resources);
    }
  }, [searchQuery, resources]);

  const handlePress = (resource) => {
    navigation.navigate('ResourceDetail', { resource });
  };

  const renderResource = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search resources..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredResources}
        renderItem={renderResource}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 3, // Adds shadow to create depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  card: {
    marginVertical: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CoResourcesScreen;
