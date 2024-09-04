import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import ELearningScreen from './ELearningScreen';
import ChatListScreen from './ChatListScreen';
import ZoomLecturesScreen from './ZoomLecturesScreen';
import AssignmentsScreen from './AssignmentsScreen';
import GroupsScreen from './GroupsScreen';
import ContactsScreen from './ContactsScreen'
const Tab = createBottomTabNavigator();

function ELearningTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Chats') {
            iconName = 'chat';
          } else if (route.name === 'Groups') {
            iconName = 'group';
          } else if (route.name === 'Reminders') {
            iconName = 'alarm';
          } else if (route.name === 'Calls') {
            iconName = 'call';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#d06009',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          display: 'flex',
        },
      })}
    >
      <Tab.Screen
        name="Chats"
        component={ELearningScreen}
        options={{ headerShown: false, title: 'Chats' }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{ headerShown: false, title: 'Groups' }}
      />
      <Tab.Screen
        name="Reminders"
        component={AssignmentsScreen}
        options={{ headerShown: false, title: 'Reminders' }}
      />
      <Tab.Screen
        name="Calls"
        component={ZoomLecturesScreen}
        options={{ headerShown: false, title: 'Calls' }}
      />
    </Tab.Navigator>
  );
}

export default ELearningTabs;
