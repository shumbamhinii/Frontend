import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

const QuotationsDetailsScreen = ({ route }) => {
  const { quotation } = route.params;

  // Fallback values in case some data is missing
  const safeQuotation = {
    program_name: quotation?.program_name || 'N/A',
    faculty_name: quotation?.faculty_name || 'N/A',
    quotation_date: quotation?.quotation_date ? new Date(quotation.quotation_date).toLocaleDateString() : 'N/A',
    registration_fees: quotation?.registration_fees || '0.00',
    exam_fees: quotation?.exam_fees || '0.00',
    medical_aid_fees: quotation?.medical_aid_fees || '0.00',
    academic_fees: quotation?.academic_fees || '0.00',
    laboratory_fees: quotation?.laboratory_fees || '0.00',
    technology_fees: quotation?.technology_fees || '0.00',
    sports_fees: quotation?.sports_fees || '0.00',
    maintenance_fees: quotation?.maintenance_fees || '0.00',
    student_union_levy: quotation?.student_union_levy || '0.00',
    other_fees: quotation?.other_fees || '0.00',
    internet_data_fees: quotation?.internet_data_fees || '0.00',
    total_usd: quotation?.total_usd || '0.00',
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>{safeQuotation.program_name}</Text>
          <Text style={styles.faculty}>Faculty: {safeQuotation.faculty_name}</Text>
          <Text style={styles.date}>Quotation Date: {safeQuotation.quotation_date}</Text>

          <View style={styles.feesContainer}>
            <Text style={styles.feeTitle}>Fees Breakdown:</Text>
            <Text style={styles.fee}>Registration Fees: ${safeQuotation.registration_fees}</Text>
            <Text style={styles.fee}>Exam Fees: ${safeQuotation.exam_fees}</Text>
            <Text style={styles.fee}>Medical Aid Fees: ${safeQuotation.medical_aid_fees}</Text>
            <Text style={styles.fee}>Academic Fees: ${safeQuotation.academic_fees}</Text>
            <Text style={styles.fee}>Laboratory Fees: ${safeQuotation.laboratory_fees}</Text>
            <Text style={styles.fee}>Technology Fees: ${safeQuotation.technology_fees}</Text>
            <Text style={styles.fee}>Sports Fees: ${safeQuotation.sports_fees}</Text>
            <Text style={styles.fee}>Maintenance Fees: ${safeQuotation.maintenance_fees}</Text>
            <Text style={styles.fee}>Student Union Levy: ${safeQuotation.student_union_levy}</Text>
            <Text style={styles.fee}>Other Fees: ${safeQuotation.other_fees}</Text>
            <Text style={styles.fee}>Internet/Data Fees: ${safeQuotation.internet_data_fees}</Text>
            <Text style={styles.total}>Total USD: ${safeQuotation.total_usd}</Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  card: {
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  faculty: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  feesContainer: {
    marginTop: 10,
  },
  feeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  fee: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginTop: 10,
  },
});

export default QuotationsDetailsScreen;
