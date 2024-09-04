import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function PolicyDetailsScreen({ route }) {
  const { policyId } = route.params;
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolicyDetails = async () => {
      try {
       const response = await fetch(`http://graduateapp.onrender.com/policies/${policyId}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setPolicy(data);
      } catch (err) {
        console.error('Error fetching policy details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicyDetails();
  }, [policyId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {policy ? (
        <View>
          <Text style={styles.title}>{policy.title}</Text>
          <Text style={styles.description}>{policy.description}</Text>
        </View>
      ) : (
        <Text>No policy details found</Text>
      )}
    </View>
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
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});
