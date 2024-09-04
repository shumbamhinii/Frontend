import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CounselingServicesOverviewScreen = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/counseling-services');
        setServices(response.data);
        setFilteredServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handlePress = (service) => {
    navigation.navigate('CounselingServiceDetails', { service });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = services.filter(service =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  };

  const renderService = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <Avatar.Icon size={40} icon="account" />
            <View style={styles.textContainer}>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search services..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredServices}
        renderItem={renderService}
        keyExtractor={(item) => item.id.toString()}
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
  },
  card: {
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
});

export default CounselingServicesOverviewScreen;
