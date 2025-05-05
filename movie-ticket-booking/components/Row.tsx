import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");

type rowProps = {
  name: string;
  dataA: {
    id: number;
    title: string;
    image: string;
  }[];
};

  
const Row = ({name,dataA}:rowProps) => {
  return (
<View>
    <Text className="text-white text-2xl font-bold p-2">{name}</Text>
         <FlatList
           data={dataA}
           keyExtractor={(item) => item.id.toString()}
         horizontal
           renderItem={({item}) => (
             <View className="relative mt-3 px-1">
                <Image
              style={{ height: height * 0.25, width: width * 0.4, margin: 5, borderRadius: 10 }}
              source={{ uri: item.image }} 
              contentFit="cover"
              transition={1000}
            />       
                </View>
           )}
         />
       </View>
  );
};

export default Row