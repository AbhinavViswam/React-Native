import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: any) => {
  return (
    //@ts-ignore
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          resizeMode="cover"
          style={styles.poster}
        />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.info}>⭐ {Math.round(vote_average/2)}</Text>
          <Text style={styles.info}>{release_date?.split('-')[0]}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    width: 170,
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  poster: {
    width: "100%",
    height: 240,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  details: {
    padding: 10,
    flex:1,
    flexDirection:"column"
  },
  title: {
    color: "#F47521",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    color: "#F47521",
    fontSize: 14,
  },
});

export default MovieCard;
