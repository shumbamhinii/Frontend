import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Footer({ navigation, activeIcon, setActiveIcon }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.iconContainer, activeIcon === 'academics' && styles.activeIcon]}
        onPress={() => {
          setActiveIcon('academics');
          navigation.navigate('Home'); // Adjust if necessary
        }}
      >
        <MaterialCommunityIcons
          name="book-open-variant"
          size={24}
          color={activeIcon === 'academics' ? '#F7C300' : '#FFFFFF'}
        />
        <Text style={[styles.iconLabel, { color: activeIcon === 'academics' ? '#F7C300' : '#FFFFFF' }]}>
          Academics
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer, activeIcon === 'studentSupport' && styles.activeIcon]}
        onPress={() => {
          setActiveIcon('studentSupport');
          navigation.navigate('StudentSupport'); // Adjust if necessary
        }}
      >
        <MaterialCommunityIcons
          name="account-group-outline"
          size={24}
          color={activeIcon === 'studentSupport' ? '#F7C300' : '#FFFFFF'}
        />
        <Text style={[styles.iconLabel, { color: activeIcon === 'studentSupport' ? '#F7C300' : '#FFFFFF' }]}>
          Student Support
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer, activeIcon === 'admin' && styles.activeIcon]}
        onPress={() => {
          setActiveIcon('admin');
          navigation.navigate('Admin'); // Adjust if necessary
        }}
      >
        <MaterialCommunityIcons
          name="office-building-outline"
          size={24}
          color={activeIcon === 'admin' ? '#F7C300' : '#FFFFFF'}
        />
        <Text style={[styles.iconLabel, { color: activeIcon === 'admin' ? '#F7C300' : '#FFFFFF' }]}>
          Admin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer, activeIcon === 'extracurricular' && styles.activeIcon]}
        onPress={() => {
          setActiveIcon('extracurricular');
          navigation.navigate('Extracurricular'); // Adjust if necessary
        }}
      >
        <MaterialCommunityIcons
          name="basketball"
          size={24}
          color={activeIcon === 'extracurricular' ? '#F7C300' : '#FFFFFF'}
        />
        <Text style={[styles.iconLabel, { color: activeIcon === 'extracurricular' ? '#F7C300' : '#FFFFFF' }]}>
          Extracurricular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconContainer, activeIcon === 'resources' && styles.activeIcon]}
        onPress={() => {
          setActiveIcon('resources');
          navigation.navigate('Resources'); // Adjust if necessary
        }}
      >
        <MaterialCommunityIcons
          name="library"
          size={24}
          color={activeIcon === 'resources' ? '#F7C300' : '#FFFFFF'}
        />
        <Text style={[styles.iconLabel, { color: activeIcon === 'resources' ? '#F7C300' : '#FFFFFF' }]}>
          Resources
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#0033A0', // Primary blue color
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    color: 'white',
    fontSize: 10,
    marginTop: 2,
  },
  activeIcon: {
    borderColor: '#F7C300',
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
  },
});
