import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import axios from 'axios';

const DigitalResourcesScreen = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://graduateapp.onrender.com/university-resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching university resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Resources...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Digital Resources</Text>
      {resources.map((resource) => (
        <View key={resource.id} style={styles.resourceContainer}>
          <Text style={styles.resourceTitle}>{resource.title}</Text>
          <Text style={styles.resourceDescription}>{resource.description}</Text>
          <TouchableOpacity onPress={() => handleLinkPress(resource.preview_link)}>
            <Text style={styles.previewLink}>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLinkPress(resource.download_link)}>
            <Text style={styles.downloadLink}>Download</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#0033A0',
  },
  resourceContainer: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  previewLink: {
    fontSize: 14,
    color: '#0033A0',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  downloadLink: {
    fontSize: 14,
    color: '#0033A0',
    textDecorationLine: 'underline',
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
});

export default DigitalResourcesScreen;
