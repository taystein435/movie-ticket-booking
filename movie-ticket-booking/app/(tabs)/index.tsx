import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Row from "@/components/Row";

const API_BASE = "https://api.themoviedb.org/3";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View className="flex-row items-center justify-between p-3">
        <View className="flex-row gap-2">
          <Image
            style={{ height: 50, width: 50, borderRadius: 50 ,borderColor:'#80013f',borderWidth:3,}}
            source="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=60"
            contentFit="cover"
          />
        </View>
        <MaterialIcons name="search" size={30} color="white" />
      </View>

      <ScrollView>
  <Row name="Trending Now" fetchUrl={`${API_BASE}/trending/movie/week?language=en-US`} />
  <Row name="Action" fetchUrl={`${API_BASE}/discover/movie?with_genres=28`} />
  <Row name="Adventure" fetchUrl={`${API_BASE}/discover/movie?with_genres=12`} />
  <Row name="Animation" fetchUrl={`${API_BASE}/discover/movie?with_genres=16`} />
  <Row name="Comedy" fetchUrl={`${API_BASE}/discover/movie?with_genres=35`} />
  <Row name="Crime" fetchUrl={`${API_BASE}/discover/movie?with_genres=80`} />
  <Row name="Documentary" fetchUrl={`${API_BASE}/discover/movie?with_genres=99`} />
  <Row name="Drama" fetchUrl={`${API_BASE}/discover/movie?with_genres=18`} />
  <Row name="Family" fetchUrl={`${API_BASE}/discover/movie?with_genres=10751`} />
  <Row name="Fantasy" fetchUrl={`${API_BASE}/discover/movie?with_genres=14`} />
  <Row name="Horror" fetchUrl={`${API_BASE}/discover/movie?with_genres=27`} />
  <Row name="Music" fetchUrl={`${API_BASE}/discover/movie?with_genres=10402`} />
  <Row name="Mystery" fetchUrl={`${API_BASE}/discover/movie?with_genres=9648`} />
  <Row name="Romance" fetchUrl={`${API_BASE}/discover/movie?with_genres=10749`} />
  <Row name="Science Fiction" fetchUrl={`${API_BASE}/discover/movie?with_genres=878`} />
  <Row name="Thriller" fetchUrl={`${API_BASE}/discover/movie?with_genres=53`} />
  <Row name="War" fetchUrl={`${API_BASE}/discover/movie?with_genres=10752`} />
  <Row name="Western" fetchUrl={`${API_BASE}/discover/movie?with_genres=37`} />
</ScrollView>

    </SafeAreaView>
  );
};

export default index;
