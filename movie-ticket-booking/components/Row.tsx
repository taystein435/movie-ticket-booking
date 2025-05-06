import { View, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import axios from "axios";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");
const imdbKey = process.env.EXPO_PUBLIC_IMDB_API_KEY;
type rowProps = {
  name: string;
  fetchUrl: string;
};

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  
};

const Row = ({ name, fetchUrl }: rowProps) => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${imdbKey}`

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
          <Link
            href={{
              pathname: "/details/[id]",
              params: {
                id: item.id.toString(),
                title: item.title,
                description: item.overview,
                image: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
              },
            }}
            asChild
          >
            <TouchableOpacity>
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
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

export default Row;


