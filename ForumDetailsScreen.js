import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ForumDetailsScreen = () => {
  const route = useRoute();
  const { forum } = route.params;  // Destructure the forum object from route params

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{forum.forum_name}</Text>
      <Text style={styles.description}>
        {forum.description}
      </Text>
      <Text style={styles.category}>
        Category: {forum.category}
      </Text>
      <Text style={styles.info}>
        Contacts: {forum.contacts}
      </Text>
      <Text style={styles.info}>
        How to Join: {forum.how_to_join}
      </Text>
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
    fontWeight: '700',
    marginBottom: 10,
    color: '#0033A0',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555555',
  },
  category: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
    fontWeight: '600',
  },
  info: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 10,
  },
});

export default ForumDetailsScreen;
