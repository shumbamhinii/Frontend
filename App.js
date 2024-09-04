import React from 'react';
import AppNavigator from './AppNavigator'; // Adjust the path if necessary
import { UserProvider } from './UserContext'; // Adjust the path if necessary
import CourseRegistrationScreen from './CourseRegistrationScreen';
export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
