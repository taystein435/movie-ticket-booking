import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import axios from "axios";

const { width, height } = Dimensions.get("window");

type rowProps = {
  name: string;
  fetchUrl: string;
};
type Movie = {
  id: number;
  poster_path: string;
};
const Row = ({ name, fetchUrl }: rowProps) => {

  
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzBjOTU1Yzg0MDY1Zjc3NmZmYWM3OWMzNzcwYzQ3NyIsIm5iZiI6MTY1NTczOTI4OC4yMzcsInN1YiI6IjYyYjA5Mzk4N2YxZDgzMDUwZWRmN2RhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7tZmXu0M6EfblsRUqVXVTVJrJgsZ4G2Ly2pQePlIEc'
          }
        });
        setData(response.data.results);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <View>
      <Text className="text-white text-2xl font-bold p-2">{name}</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="relative mt-3 px-1">
            <Image
              style={{
                height: height * 0.25,
                width: width * 0.4,
                margin: 5,
                borderRadius: 10,
              }}
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Row;
