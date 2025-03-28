import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { logo } from '@/constants/image'
import SearchBar from '@/components/SearchBar'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const { width } = useWindowDimensions(); // Get screen width dynamically

  // Dynamically adjust number of columns based on screen width
  const numColumns = width > 600 ? 3 : width > 400 ? 2 : 1;

  const { data: movies, loading: moviesLoading, error: moviesError, refetch: loadMovies, reset } = useFetch(() =>
    fetchMovies({ query: searchQuery })
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        numColumns={numColumns} // Dynamically set number of columns
        columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined} // Avoid error if numColumns is 1
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.title}>Crunchyroll</Text>
            </View>
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder='Search movies...'
                onChangeText={(text: string) => setSearchQuery(text)}
                value={searchQuery}
              />
            </View>

            {moviesLoading && <ActivityIndicator size="large" color="#F47521" style={styles.loader} />}
            {moviesError && <Text style={styles.errorText}>Error: {moviesError.message}</Text>}

            {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
              <Text style={styles.resultText}>
                Search results for <Text style={styles.highlightText}>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <Text style={styles.emptyText}>
              {searchQuery.trim() ? "No Movies Found" : "Search For Movies..."}
            </Text>
          ) : null
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  searchContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loader: {
    marginVertical: 10,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  resultText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  highlightText: {
    fontWeight: "bold",
    color: "#F47521",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 16,
    marginVertical: 5,
  },
});

export default Search;
