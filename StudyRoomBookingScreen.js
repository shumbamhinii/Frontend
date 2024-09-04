import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const StudyRoomBookingScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showBookingDatePicker, setShowBookingDatePicker] = useState(false);
  const { control, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    axios.get('http://graduateapp.onrender.com/rooms')
      .then(response => setRooms(response.data))
      .catch(error => {
        console.error('Error fetching rooms:', error);
        Alert.alert('Error', 'Failed to fetch rooms.');
      });
  }, []);

  const onConfirmStartDate = (date) => {
    setValue('startDate', date.toISOString());
    setShowStartDatePicker(false);
  };

  const onConfirmEndDate = (date) => {
    setValue('endDate', date.toISOString());
    setShowEndDatePicker(false);
  };

  const onConfirmBookingDate = (date) => {
    setValue('bookingDate', date.toISOString().split('T')[0]);
    setShowBookingDatePicker(false);
  };

 const onSubmit = (data) => {
   if (new Date(data.startDate) >= new Date(data.endDate)) {
     Alert.alert('Error', 'End date must be after start date.');
     return;
   }

   axios.post('http://graduateapp.onrender.com/bookings', {
     room_id: selectedRoom,
     booked_by: data.bookedBy,
     start_time: data.startDate,
     end_time: data.endDate,
     booking_date: data.bookingDate,
     status: 'Confirmed',
   })
   .then(response => Alert.alert('Success', 'Room booked successfully!'))
   .catch(error => {
     console.error('Error booking room:', error);
     Alert.alert('Error', error.response?.data || 'Failed to book room.');
   });
 };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Book a Study Room</Text>

        <Controller
          control={control}
          name="bookedBy"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Select Room:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedRoom}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedRoom(itemValue)}
          >
            <Picker.Item label="Select a Room" value="" />
            {rooms.map(room => (
              <Picker.Item key={room.id} label={room.room_name} value={room.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Start Date & Time:</Text>
        <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.button}>
          <Text style={styles.buttonText}>Select Start Date & Time</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{getValues('startDate') ? new Date(getValues('startDate')).toLocaleString() : 'Not Selected'}</Text>

        <DateTimePickerModal
          isVisible={showStartDatePicker}
          mode="datetime"
          onConfirm={onConfirmStartDate}
          onCancel={() => setShowStartDatePicker(false)}
        />

        <Text style={styles.label}>End Date & Time:</Text>
        <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.button}>
          <Text style={styles.buttonText}>Select End Date & Time</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{getValues('endDate') ? new Date(getValues('endDate')).toLocaleString() : 'Not Selected'}</Text>

        <DateTimePickerModal
          isVisible={showEndDatePicker}
          mode="datetime"
          onConfirm={onConfirmEndDate}
          onCancel={() => setShowEndDatePicker(false)}
        />

        <Text style={styles.label}>Booking Date:</Text>
        <TouchableOpacity onPress={() => setShowBookingDatePicker(true)} style={styles.button}>
          <Text style={styles.buttonText}>Select Booking Date</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{getValues('bookingDate') || 'Not Selected'}</Text>

        <DateTimePickerModal
          isVisible={showBookingDatePicker}
          mode="date"
          onConfirm={onConfirmBookingDate}
          onCancel={() => setShowBookingDatePicker(false)}
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button, !selectedRoom || !getValues('bookedBy') || !getValues('startDate') || !getValues('endDate') ? styles.buttonDisabled : null]}
          disabled={!selectedRoom || !getValues('bookedBy') || !getValues('startDate') || !getValues('endDate')}
        >
          <Text style={styles.buttonText}>Book Room</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
    backgroundColor: '#F9F9F9',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0033A0',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#0033A0',
  },
  dateText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#0033A0',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
});

export default StudyRoomBookingScreen;
