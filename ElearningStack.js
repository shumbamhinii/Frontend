// eLearningStack.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import ELearningTabs from './ELearningTabs'; // Updated import
import ChatListScreen from './ChatListScreen';
import ChatScreen from './ChatScreen';
import DashboardScreen from './DashboardScreen';
import ZoomLecturesScreen from './ZoomLecturesScreen';
import AssignmentsScreen from './AssignmentsScreen';
import GroupsScreen from './GroupsScreen';
import Frame1 from './Frame1';
import ContactsScreen from './ContactsScreen'

const Stack = createStackNavigator();

function ELearningStack({ navigation }) {
  return (
    <MenuProvider>
      <Stack.Navigator>
       <Stack.Screen
         name="ELearningTabs"
         component={ELearningTabs}
         options={{
           headerTitle: () => (
             <TouchableOpacity onPress={() => navigation.navigate('GradUate')}>
               <Text style={styles.headerTitle}>GradUate</Text>
             </TouchableOpacity>
           ),
           headerStyle: {
             backgroundColor: '#d06009', // Orange background
           },
           headerTitleStyle: {
             color: '#fff', // White text
             fontWeight: 'bold',
           },
           headerTintColor: '#fff', // White icon and back button
           headerLeft: () => null, // This removes the back arrow
           headerRight: () => (
             <Menu>
               <MenuTrigger>
                 <MaterialIcons
                   name="more-vert"
                   size={24}
                   color="#fff"
                   style={{ marginRight: 15 }}
                 />
               </MenuTrigger>
               <MenuOptions>
                 <MenuOption onSelect={() => navigation.navigate('ZoomLectures')}>
                   <Text>Zoom Lectures</Text>
                 </MenuOption>
                 <MenuOption onSelect={() => navigation.navigate('Assignments')}>
                   <Text>Assignments</Text>
                 </MenuOption>
                 <MenuOption onSelect={() => navigation.navigate('Groups')}>
                   <Text>Groups</Text>
                 </MenuOption>
               </MenuOptions>
             </Menu>
           ),
         }}
       />
        <Stack.Screen
          name="Frame1"
          component={Frame1}
          options={{
            headerShown: false,
            headerTitle: 'GradUate',
            headerStyle: {
              backgroundColor: '#d06009',
            },
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
                  name="Assignments"
                  component={AssignmentsScreen}
                  options={{
                              headerShown: true,
                              headerTitle: 'GradUate',
                              headerStyle: {
                                backgroundColor: '#d06009',
                              },
                              headerTintColor: '#FFFFFF',
                            }}
                />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
                  name="Contacts"
                  component={ContactsScreen}
                  options={{
                    headerShown: true,
                    headerTitle: 'GradUate',
                    headerStyle: {
                    backgroundColor: '#d06009',
                      },
                    headerTintColor: '#FFFFFF',
                     }}
           />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
          headerShown: false,
          title: 'Chat' }}
        />
      </Stack.Navigator>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ELearningStack;
