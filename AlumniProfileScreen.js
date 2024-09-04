import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AlumniProfileScreen = () => {
  const route = useRoute();
  const { alumni } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: alumni.image_url }} style={styles.alumniImage} />
      <Text style={styles.alumniName}>{alumni.name}</Text>
      <Text style={styles.alumniProfession}>{alumni.profession}</Text>
      <Text style={styles.alumniAchievements}>{alumni.achievements}</Text>
      <Text style={styles.alumniSuccessStory}>{alumni.success_story}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  alumniImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  alumniName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 8,
    textAlign: 'center',
  },
  alumniProfession: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
  },
  alumniAchievements: {
    fontSize: 16,
    color: '#777',
    marginBottom: 16,
    textAlign: 'center',
  },
  alumniSuccessStory: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
  },
});

export default AlumniProfileScreen;
