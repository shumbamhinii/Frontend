// ZoomLecturesScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const ZoomLecturesScreen = () => {
  // Example Zoom link
  const zoomLink = 'https://zoom.us/j/your-meeting-id';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zoom Lectures</Text>
      <Button
        title="Join Lecture"
        onPress={() => Linking.openURL(zoomLink)}
      />
      {/* You can add more functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ZoomLecturesScreen;
