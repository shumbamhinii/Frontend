import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <TouchableOpacity style={{ marginRight: 15 }}>
        <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginRight: 15 }}>
        <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')}>
        <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
