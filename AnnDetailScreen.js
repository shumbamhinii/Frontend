import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function AnnDetailScreen({ route }) {
  // Ensure that item is defined
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No data available</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {item.imagedata ? (
        <Image
          source={{ uri: `data:image/png;base64,${item.imagedata}` }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No image available</Text>
        </View>
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0033A0',
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#000',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  imagePlaceholder: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
});
