import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const Details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [movie, setMovie] = useState<any>(null);
  const [credits, setCredits] = useState<any[]>([]);
  const [similar, setSimilar] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.EXPO_PUBLIC_IMDB_API_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const headers = {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        };

        const [movieRes, creditRes, similarRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, { headers }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, { headers }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`, { headers }),
        ]);

        setMovie(movieRes.data);
        setCredits(creditRes.data.cast.slice(0, 10));
        setSimilar(similarRes.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading || !movie) {
    return (
      <View className="flex-1 bg-black justify-center items-center">
        <ActivityIndicator size="large" color="#80013f" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Backdrop Image */}
      <View className="relative">
        <Image
          style={{ width, height: height * 0.4 }}
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
          contentFit="cover"
          transition={500}
        />
        <TouchableOpacity
          className="absolute top-16 left-5"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Details */}
      <View className="p-4">
        <Text className="text-white text-3xl font-bold mb-1">{movie.title}</Text>
        <Text className="text-white text-base mb-3">{movie.overview}</Text>

        <View className="mb-3">
          <Text className="text-white">
            <Text className="font-bold">Release Date:</Text> {movie.release_date}
          </Text>
          <Text className="text-white">
            <Text className="font-bold">Runtime:</Text> {movie.runtime} min
          </Text>
          <Text className="text-white">
            <Text className="font-bold">Rating:</Text> {movie.vote_average.toFixed(1)} ⭐
          </Text>
        </View>

        {/* Genres */}
        {movie.genres?.length > 0 && (
          <View className="flex-row flex-wrap gap-2 mb-4">
            {movie.genres.map((genre: any) => (
              <Text
                key={genre.id}
                className="text-white border border-white px-2 py-1 rounded-full text-xs"
              >
                {genre.name}
              </Text>
            ))}
          </View>
        )}
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-between px-4 mb-6">
        <TouchableOpacity
          style={{ width: width * 0.45 }}
          className="bg-[#80013f] h-14 justify-center rounded-md"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Watch Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: width * 0.45 }}
          className="bg-white h-14 justify-center rounded-md"
        >
          <Text className="text-[#80013f] text-center text-lg font-semibold">
            Get Tickets
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cast Section */}
      <View className="px-4 mb-6">
        <Text className="text-white text-xl font-bold mb-2">Top Cast</Text>
        <FlatList
          data={credits}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="mr-4 items-center">
              <Image
                source={{
                  uri: item.profile_path
                    ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
                    : "https://via.placeholder.com/80x120?text=No+Image",
                }}
                style={{ height: 100, width: 80, borderRadius: 10 }}
                contentFit="cover"
              />
              <Text className="text-white text-xs mt-1 text-center w-20">{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Similar Movies */}
      <View className="px-4 mb-10">
        <Text className="text-white text-xl font-bold mb-2">Similar Movies</Text>
        <FlatList
          data={similar}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="mr-4"
              onPress={() =>
                router.push({
                  pathname: "/details/[id]",
                  params: { id: item.id.toString() },
                })
              }
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                }}
                style={{ height: 160, width: 110, borderRadius: 8 }}
                contentFit="cover"
              />
              <Text
                numberOfLines={1}
                className="text-white text-sm mt-1 w-[110px] text-center"
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Details;
