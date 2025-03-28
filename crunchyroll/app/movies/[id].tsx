import { 
  View, Text, ScrollView, Image, StyleSheet, StatusBar, 
  TouchableOpacity, ActivityIndicator 
} from 'react-native';
import React from 'react';
import useFetch from '@/services/useFetch';
import { fetchMovieDetails } from '@/services/api';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View style={styles.infoContainer}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value || 'N/A'}</Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() => fetchMovieDetails(id as string));

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F47521" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Movie Poster */}
        <View style={styles.posterContainer}>
          <Image 
            style={styles.image} 
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} 
          />
        </View>

        {/* Movie Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{movie?.title}</Text>
        </View>

        {/* Movie Info: Year, Runtime */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>{movie?.release_date?.split("-")[0]}</Text>
          <Text style={styles.detailText}>{movie?.runtime} min</Text>
        </View>

        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          <Text style={styles.rating}>⭐ {Math.round(movie?.vote_average ?? 0)}/10</Text>
          <Text style={styles.voteCount}>({movie?.vote_count} votes)</Text>
        </View>

        {/* Overview */}
        <MovieInfo label="Overview" value={movie?.overview} />

        {/* Genres */}
        <MovieInfo 
          label="Genres" 
          value={movie?.genres?.map((g) => g.name).join(" - ") || "N/A"} 
        />

        {/* Budget & Revenue */}
        <View style={styles.budgetContainer}>
          <MovieInfo label="Budget" value={`$${movie?.budget / 1_000_000}M`} />
          <MovieInfo label="Revenue" value={`$${Math.round(movie?.revenue) / 1_000_000}M`} />
        </View>

        {/* Production Companies */}
        <MovieInfo 
          label="Production Companies" 
          value={movie?.production_companies?.map((g) => g.name).join(", ") || "N/A"} 
        />
      </ScrollView>

      {/* Back Button at Bottom */}
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Ionicons name="chevron-back" size={24} color="white" />
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

// 🔹 **Styles**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Extra space for back button
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  posterContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  titleContainer: {
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingBottom: 10,
  },
  detailText: {
    color: "#555",
    fontSize: 14,
  },
  ratingsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F47521",
  },
  voteCount: {
    fontSize: 14,
    color: "#777",
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F47521",
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: "#333",
  },
  budgetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F47521",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width:"95%",
    justifyContent:"center"
  },
  backText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovieDetails;
