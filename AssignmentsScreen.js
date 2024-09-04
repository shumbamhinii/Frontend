// AssignmentsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const AssignmentsScreen = ({ navigation }) => {
  // Example assignment data
  const assignments = [
    { id: '1', title: 'Math Assignment 1', dueDate: '2024-08-25', status: 'Pending' },
    { id: '2', title: 'Physics Assignment 1', dueDate: '2024-08-28', status: 'Completed' },
    // Add more assignment entries as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={assignments}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.assignmentItem}>
            <View style={styles.assignmentInfo}>
              <Text style={styles.assignmentTitle}>{item.title}</Text>
              <Text style={styles.assignmentDate}>Due: {item.dueDate}</Text>
              <Text style={styles.assignmentStatus}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  assignmentItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  assignmentInfo: {
    flexDirection: 'column',
  },
  assignmentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  assignmentDate: {
    color: '#777',
    marginTop: 5,
  },
  assignmentStatus: {
    color: '#d06009',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default AssignmentsScreen;
