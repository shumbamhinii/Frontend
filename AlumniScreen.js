import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AlumniScreen = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('AlumniDirectory');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alumni Resources</Text>

      <TouchableOpacity style={styles.itemContainer} onPress={navigateToDetails}>
        <Icon name="people" size={36} color="#0033A0" style={styles.itemIcon} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>Alumni Directory</Text>
          <Text style={styles.itemDescription}>Browse through a directory of notable alumni.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer} onPress={navigateToDetails}>
        <Icon name="contact-mail" size={36} color="#0033A0" style={styles.itemIcon} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>Contact Alumni</Text>
          <Text style={styles.itemDescription}>Connect with alumni for advice and networking.</Text>
        </View>
      </TouchableOpacity>
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#0033A0',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemIcon: {
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default AlumniScreen;
