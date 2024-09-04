import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView, Image, ActivityIndicator } from 'react-native';

const CourseInfoScreen = ({ route }) => {
  const { course } = route.params; // Get course data from navigation params

  // Validate the image URL

  const image1 = require("C:\\Users\\Christian\\GraduateApp\\assets\\COF.png");

  // State to manage image loading
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleDownload = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    } else {
      console.warn("URL not provided.");
    }
  };

  // Parse the lecturers string into an array
  const lecturers = course.lecturers ? JSON.parse(course.lecturers) : [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Show a loading indicator until the image is fully loaded */}
        {!imageLoaded && <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />}
      <Image
        source={image1}
        style={styles.image}
        resizeMode="cover"
        onLoad={() => console.log('Image loaded successfully')}
        onError={(e) => console.error('Image loading error:', e.nativeEvent.error)}
      />
      </View>

      <Text style={styles.title}>{course.name || 'Course Name'}</Text>
      <Text style={styles.description}>{course.description || 'No description available.'}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lecturers</Text>
        {lecturers.length > 0 ? (
          lecturers.map((lecturer, index) => (
            <View key={index} style={styles.lecturerContainer}>
              <Text style={styles.lecturerName}>{lecturer.name || 'Unknown'}</Text>
              <Text style={styles.lecturerContact}>Contact: {lecturer.contact || 'N/A'}</Text>
            </View>
          ))
        ) : (
          <Text>No lecturers available</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Download Materials</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload(course.outlineUrl)}>
          <Text style={styles.buttonText}>Download Course Outline</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDownload(course.readingMaterialsUrl)}>
          <Text style={styles.buttonText}>Download Reading Materials</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lecturerContainer: {
    marginBottom: 10,
  },
  lecturerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lecturerContact: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#d06009', // UZ orange color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF', // White color for the button text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseInfoScreen;
