import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Details = () => {
  const { id, title, description, image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <View className="relative">
        <Image
          style={{ width, height: height * 0.3 }}
          source={{ uri: image as string }}
          contentFit="cover"
          transition={1000}
        />
        <TouchableOpacity
          className="absolute top-16 left-5"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-white text-3xl font-bold mb-2">{title}</Text>
        <Text className="text-white text-base">{description}</Text>
      </View>
    </View>
  );
};

export default Details;
