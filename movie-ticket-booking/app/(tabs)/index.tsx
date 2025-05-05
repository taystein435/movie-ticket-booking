import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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

   
  </SafeAreaView>
  )
}

export default index