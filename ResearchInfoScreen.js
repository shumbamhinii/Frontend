import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Linking } from 'react-native';

const ResearchInfoScreen = ({ route }) => {
  const { research } = route.params;

  const handleDownload = async () => {
    try {
      // Check if a download link is provided
      if (research.download_link) {
        await Linking.openURL(research.download_link);
      } else {
        await Share.share({
          message: `Research Program: ${research.name}\n\nDescription: ${research.description}`,
        });
      }
    } catch (error) {
      console.error('Error sharing or opening download link:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{research.name}</Text>
      <Text style={styles.description}>{research.description}</Text>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.downloadButtonText}>Download Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#000000',
  },
  downloadButton: {
    backgroundColor: '#0033A0',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ResearchInfoScreen;
