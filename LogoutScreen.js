import { TouchableOpacity, View, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Define your logout function
const handleLogout = async (navigation) => {
  try {
    const response = await fetch('http://graduateapp.onrender.com/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Navigate to login screen or show a success message
      navigation.navigate('Login'); // Adjust the screen name as necessary
    } else {
      // Show an error message
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  } catch (error) {
    console.error('Error during logout:', error);
    Alert.alert('Error', 'Failed to log out. Please try again.');
  }
};
