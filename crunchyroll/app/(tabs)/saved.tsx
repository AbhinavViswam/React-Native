import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { naruto,solo,onepiece } from '@/constants/image';
const savedAnime = [
  {
    id: '1',
    title: 'Naruto Shippuden',
    image: naruto,
    status: 'Watching',
  },
  {
    id: '2',
    title: 'One Piece',
    image: onepiece,
    status: 'Completed',
  },
  {
    id: '3',
    title: 'Solo Levelling',
    image: solo,
    status: 'Ongoing',
  },
];

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Anime</Text>

      <FlatList
        data={savedAnime}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.animeCard}>
            <Image source={item.image} style={styles.animeImage} />
            <View style={styles.animeInfo}>
              <Text style={styles.animeTitle}>{item.title}</Text>
              <Text style={styles.animeStatus}>{item.status}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  animeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  animeImage: {
    width: 60,
    height: 80,
    borderRadius: 5,
  },
  animeInfo: {
    flex: 1,
    marginLeft: 10,
  },
  animeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  animeStatus: {
    fontSize: 12,
    color: '#888',
  },
  removeButton: {
    backgroundColor: '#FF6600',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Saved;
