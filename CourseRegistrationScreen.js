import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';
import { Card, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const CourseRegistrationScreen = () => {
  // State variables
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [programCode, setProgramCode] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Fetch courses from the server
    axios.get('http://graduateapp.onrender.com/courses')
      .then(response => {
        setCourses(response.data);
        setFilteredCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = courses.filter(course => course.department.toLowerCase() === programCode.toLowerCase());
    setFilteredCourses(filtered);
  };

  const handleCheckboxToggle = (courseCode) => {
    if (selectedCourses.includes(courseCode)) {
      setSelectedCourses(selectedCourses.filter(code => code !== courseCode));
    } else {
      setSelectedCourses([...selectedCourses, courseCode]);
    }
  };

 const handleRegister = () => {
   if (!registrationNumber) {
     setIsModalVisible(true); // Show modal if registration number is missing
     return;
   }

   // Handle course registration logic
   axios.post('http://graduateapp.onrender.com/register-courses', {
     registration_number: registrationNumber,
     courses: selectedCourses,
   })
   .then(response => {
     Alert.alert('Registration Successful', 'Courses have been registered.');
   })
   .catch(error => {
     if (error.response) {
       // Server responded with a status other than 200 range
       console.error('Server Error:', error.response.data);
       Alert.alert('Registration Failed', `Error: ${error.response.data.message}`);
     } else if (error.request) {
       // Request was made but no response received
       console.error('Network Error:', error.request);
       Alert.alert('Registration Failed', 'Network error, please try again later.');
     } else {
       // Something happened in setting up the request
       console.error('Error:', error.message);
       Alert.alert('Registration Failed', 'An error occurred, please try again.');
     }
   });
 };

  const handleContinue = () => {
    if (!registrationNumber) {
      Alert.alert('Registration Required', 'Please enter your registration number.');
      return;
    }

    // Proceed with registration
    handleRegister();
    setIsModalVisible(false); // Hide modal after registration
  };

  const renderCourseItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.courseContainer}>
          <Checkbox
            status={selectedCourses.includes(item.code) ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxToggle(item.code)}
          />
          <View style={styles.courseDetailsContainer}>
            <Text style={styles.courseCode}>{item.code}</Text>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseDetails}>Semester: {item.semester}</Text>
            <Text style={styles.courseDetails}>Compulsory: {item.compulsory}</Text>
            <Text style={styles.courseDetails}>Department: {item.department}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0033A0" />
        <Text style={styles.loadingText}>Loading Courses...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#0033A0" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Program Code"
          value={programCode}
          onChangeText={(text) => {
            setProgramCode(text);
            handleSearch(); // Call search when text changes
          }}
        />
      </View>
      <FlatList
        data={filteredCourses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.code}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register Selected Courses</Text>
      </TouchableOpacity>

      {/* Modal for entering registration number */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter Registration Number"
              value={registrationNumber}
              onChangeText={(text) => setRegistrationNumber(text)}
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleContinue}>
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseDetailsContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  courseCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0033A0',
  },
  courseName: {
    fontSize: 14,
    marginVertical: 4,
    color: '#000000',
  },
  courseDetails: {
    fontSize: 12,
    color: '#555555',
  },
  registerButton: {
    backgroundColor: '#0033A0',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#0033A0',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CourseRegistrationScreen;
