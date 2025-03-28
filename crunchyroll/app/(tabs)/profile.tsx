import { kakashi } from '@/constants/image';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image 
        source={kakashi} 
        style={styles.profileImage}
      />

   
      <Text style={styles.username}>OtakuMaster99</Text>
      <Text style={styles.membership}>Premium Member</Text>

   
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Episodes Watched</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>35</Text>
          <Text style={styles.statLabel}>Series Completed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Favorites</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    borderWidth: 4,
    borderColor: '#FF6600',
  },
  username: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  membership: {
    color: '#FF6600',
    fontSize: 14,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 12,
  },
  buttonPrimary: {
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonSecondary: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
