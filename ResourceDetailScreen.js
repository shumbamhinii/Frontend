import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import Video from 'react-native-video'; // Correct import for video support

const ResourceDetailScreen = ({ route }) => {
  const { resource } = route.params;

  // Function to open download link
  const handleDownload = () => {
    Linking.openURL(resource.download_link);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{resource.title}</Text>
        <Text style={styles.description}>{resource.description}</Text>

        {/* Display video if available */}
        {resource.type === 'video' && resource.video_url && (
          <Video
            source={{ uri: resource.video_url }}
            style={styles.video}
            controls
          />
        )}

        {/* Display download link if available */}
        {resource.download_link && (
          <Button title="Download" onPress={handleDownload} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  detailContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  video: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginVertical: 10,
  },
});

export default ResourceDetailScreen;
