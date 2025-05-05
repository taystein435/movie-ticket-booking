import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabLayout() {
 
  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#80013f',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        backgroundColor: 'black',
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) =><MaterialCommunityIcons name="movie-search" size={24} color={color} />
        }}
      />
                <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) =><MaterialIcons name="circle-notifications" size={24} color={color} />,
        }}
      />
          <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />
        }}
      />

    </Tabs>
  );
}
