// GroupsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const GroupsScreen = ({ navigation }) => {
  // Example group data
  const groups = [
    { id: '1', name: 'Study Group 1', members: '5 members' },
    { id: '2', name: 'Project Team Alpha', members: '4 members' },
    // Add more group entries as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.groupItem}
            onPress={() => navigation.navigate('GroupDetail', { groupId: item.id })}
          >
            <View style={styles.groupInfo}>
              <Text style={styles.groupName}>{item.name}</Text>
              <Text style={styles.groupMembers}>{item.members}</Text>
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
  groupItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  groupInfo: {
    flexDirection: 'column',
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  groupMembers: {
    color: '#777',
    marginTop: 5,
  },
});

export default GroupsScreen;
