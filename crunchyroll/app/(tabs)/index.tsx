import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import SearchBar from "@/components/SearchBar";
import { logo } from "@/constants/image";
import React from "react";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();
  const { width } = useWindowDimensions(); // Get screen width

  // Constants for responsive grid
  const ITEM_MIN_WIDTH = 170; // Minimum width per movie card
  const SPACING = 15; // Space between columns

  let numColumns = Math.floor(width / (ITEM_MIN_WIDTH + SPACING));
  numColumns = Math.max(numColumns, 3); // ✅ Ensure at least 3 columns

  const itemWidth = width / numColumns - SPACING; // Adjust width dynamically

  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() =>
    fetchMovies({ query: "" })
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Crunchyroll</Text>
      </View>

      <SearchBar onPress={() => router.push("/search")} placeholder="Search for movies" />

      {moviesLoading ? (
        <ActivityIndicator size="large" color="#F47521" style={styles.loader} />
      ) : moviesError ? (
        <Text style={styles.errorText}>Error: {moviesError?.message}</Text>
      ) : (
        <View style={styles.moviesContainer}>
          <Text style={styles.sectionTitle}>Latest Movies</Text>

          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} width={itemWidth} />} // Pass dynamic width
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns} // ✅ Always at least 3 columns
            columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
            scrollEnabled={false}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F47521",
    marginLeft: 10,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  moviesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: "space-between", // ✅ Ensures even spacing
    paddingRight: 5,
    marginBottom: 10,
  },
});
