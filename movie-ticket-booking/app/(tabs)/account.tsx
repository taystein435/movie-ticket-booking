import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const profileData = [
  {
    id: 1,
    title: "Name",
    description: "Taiwo Babatunde",
    icon: <MaterialCommunityIcons name="account" size={24} color="white" />,
  },
  {
    id: 3,
    title: "Height",
    description: "5'10\"",
    icon: <MaterialCommunityIcons name="human-male-height" size={24} color="white" />,
  },
  {
    id: 4,
    title: "Weight",
    description: "75 kg",
    icon: <MaterialCommunityIcons name="weight-kilogram" size={24} color="white" />,
  },
  {
    id: 5,
    title: "Workouts Completed",
    description: "56",
    icon: <MaterialCommunityIcons name="run-fast" size={24} color="white" />,
  },
  {
    id: 6,
    title: "Calories Burned",
    description: "3500 kcal",
    icon: <MaterialCommunityIcons name="fire" size={24} color="white" />,
  },
  {
    id: 7,
    title: "Steps Taken",
    description: "120,000 steps",
    icon: <MaterialCommunityIcons name="walk" size={24} color="white" />,
  },

  {
    id: 9,
    title: "Distance Covered",
    description: "100 km",
    icon: <MaterialCommunityIcons name="map-marker-distance" size={24} color="white" />,
  },
  {
    id: 10,
    title: "Active Hours",
    description: "6 hours",
    icon: <MaterialCommunityIcons name="clock" size={24} color="white" />,
  },
];

const Account = () => {
  return (
    <SafeAreaView>
      <View className='flex-row  px-8 py-2 items-center justify-between w-2/3'>
        <MaterialIcons name="arrow-back" size={24} color="white" />
        <Text className='text-2xl font-bold text-white'>Profile</Text>
      </View>
      <Image 
        style={{ marginVertical:25,height: 100, width: 100, borderRadius: 50 ,display:'flex',alignSelf:"center"}}
        source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=60"
        contentFit="cover"
      />
      <FlatList
      data={profileData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, marginTop:10,paddingHorizontal:30 }}>
          {item.icon}
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      )}
    />
    </SafeAreaView>
  );
};

export default Account;
