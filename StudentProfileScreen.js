import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon component
import { useNavigation } from '@react-navigation/native';

const StudentProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, styles.resultsCard]}
        onPress={() => navigation.navigate('Results')}
      >
        <Icon name="grade" size={30} color="#FFEB3B" style={styles.icon} />
        <Text style={styles.cardText}>Results</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.financialStatementsCard]}
        onPress={() => navigation.navigate('FinancialStatements')}
      >
        <Icon name="attach-money" size={30} color="#4CAF50" style={styles.icon} />
        <Text style={styles.cardText}>Financial Statements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.courseAssessmentCard]}
        onPress={() => navigation.navigate('CourseAssessment')}
      >
        <Icon name="assessment" size={30} color="#2196F3" style={styles.icon} />
        <Text style={styles.cardText}>Course Assessment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.registrationStatusCard]}
        onPress={() => navigation.navigate('RegistrationStatus')}
      >
        <Icon name="event-available" size={30} color="#FFC107" style={styles.icon} />
        <Text style={styles.cardText}>Registration Status</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.digitalIDCard]}
        onPress={() => navigation.navigate('DigitalID')}
      >
        <Icon name="account-circle" size={30} color="#F44336" style={styles.icon} />
        <Text style={styles.cardText}>Digital ID</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
  resultsCard: {
    backgroundColor: '#FFFDE7',
  },
  financialStatementsCard: {
    backgroundColor: '#E8F5E9',
  },
  courseAssessmentCard: {
    backgroundColor: '#E3F2FD',
  },
  registrationStatusCard: {
    backgroundColor: '#FFF9C4',
  },
  digitalIDCard: {
    backgroundColor: '#FFEBEE',
  },
});

export default StudentProfileScreen;
