import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';

const Movies = () => {
    const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() =>
        fetchMovies({ query: "" })
      );
  return (
    <View>
      <Text>Movies</Text>
    </View>
  )
}

export default Movies