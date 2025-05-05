import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Row from '@/components/Row';
  const data = [
    {
      id: 1,
      title: 'Meals',
      image: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYWx8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      title: 'Find a Gym',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww',
    },
    {
      id: 3,
      title: 'Trainer',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 4,
      title: 'Activity',
      image: 'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fHww',
    },
    {
      id: 5,
      title: 'Goals',
      image: 'https://plus.unsplash.com/premium_photo-1726761933972-04234e1303cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VpZ2h0JTIwc2NsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    
  ];
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View className="flex-row items-center justify-between p-3">
      <View className="flex-row gap-2">
        <Image
          style={{ height: 50, width: 50, borderRadius: 50 }}
          source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=60"
          contentFit="cover"
        />
     
      </View>

      <MaterialIcons name="search" size={30} color="white"  />
    </View>
<Row name='Trending Now' dataA={data}/>
   
  </SafeAreaView>
  )
}

export default index