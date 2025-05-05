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
    id: 2,
    title: "Email",
    description: "taiwo@example.com",
    icon: <MaterialCommunityIcons name="email" size={24} color="white" />,
  },
  {
    id: 3,
    title: "Favorite Genre",
    description: "Action",
    icon: <MaterialCommunityIcons name="movie-open" size={24} color="white" />,
  },
  {
    id: 4,
    title: "Tickets Purchased",
    description: "24",
    icon: <MaterialCommunityIcons name="ticket-confirmation" size={24} color="white" />,
  },
  {
    id: 5,
    title: "Loyalty Points",
    description: "1,250",
    icon: <MaterialCommunityIcons name="star-circle" size={24} color="white" />,
  },
  {
    id: 6,
    title: "Favorite Cinema",
    description: "Odeon Greenwich",
    icon: <MaterialCommunityIcons name="theater" size={24} color="white" />,
  },
  {
    id: 7,
    title: "Membership Tier",
    description: "Gold",
    icon: <MaterialCommunityIcons name="medal" size={24} color="white" />,
  },
  {
    id: 8,
    title: "Last Movie Watched",
    description: "Dune: Part Two",
    icon: <MaterialCommunityIcons name="filmstrip" size={24} color="white" />,
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
        style={{borderColor:'#80013f',borderWidth:3, marginVertical:25,height: 100, width: 100, borderRadius: 50 ,display:'flex',alignSelf:"center"}}
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
            <Text style={{ fontSize: 16, fontWeight: 'bold' ,color:'white'}}>{item.title}</Text>
            <Text className="text-gray-400" style={{ fontSize: 14, color: 'white' }}>{item.description}</Text>
          </View>
        </View>
      )}
    />
    </SafeAreaView>
  );
};

export default Account;
