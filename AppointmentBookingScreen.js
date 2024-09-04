import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const availableSlots = [
  { id: '1', date: '2024-07-25', time: '09:00 AM' },
  { id: '2', date: '2024-07-25', time: '11:00 AM' },
  { id: '3', date: '2024-07-26', time: '02:00 PM' },
  { id: '4', date: '2024-07-26', time: '04:00 PM' },
  { id: '5', date: '2024-07-27', time: '10:00 AM' },
];

const AppointmentBookingScreen = () => {
  const route = useRoute();
  const counselor = route.params?.counselor;
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    // Fetch available slots for the selected counselor here if using a database/API.
  }, [counselor]);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookingConfirm = () => {
    if (selectedSlot) {
      // Implement booking logic here (e.g., API call to book the slot).
      console.log(`Booked ${selectedSlot.date} at ${selectedSlot.time} with ${counselor.name}`);
    }
  };

  if (!counselor) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No counselor selected.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Slots for {counselor.name}</Text>
      <FlatList
        data={availableSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.slot,
              selectedSlot?.id === item.id && styles.selectedSlot,
            ]}
            onPress={() => handleSlotSelect(item)}
          >
            <Text style={styles.slotText}>{item.date} - {item.time}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedSlot && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.selectedSlotText}>
            Selected Slot: {selectedSlot.date} at {selectedSlot.time}
          </Text>
          <TouchableOpacity style={styles.confirmButton} onPress={handleBookingConfirm}>
            <Text style={styles.confirmButtonText}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  slot: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedSlot: {
    backgroundColor: '#cce7ff',
  },
  slotText: {
    fontSize: 18,
  },
  confirmationContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  selectedSlotText: {
    fontSize: 18,
    marginBottom: 16,
  },
  confirmButton: {
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AppointmentBookingScreen;
