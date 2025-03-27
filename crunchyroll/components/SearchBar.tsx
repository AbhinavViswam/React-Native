import { View, TextInput, StyleSheet, Image } from 'react-native'
import { searchIcon } from '@/constants/image'
import React from 'react'

const SearchBar = ({onPress,placeholder,value,onChangeText}:{onPress?:any,placeholder:string, value?:string, onChangeText?:(text:string)=>void}) => {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        onPress={onPress}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#F47521"
        cursorColor="#F47521"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 30,
    paddingHorizontal: 10,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width:"95%",
    marginLeft:10
  },
  input: {
    flex: 1,
    color: "#F47521",
    paddingVertical: 8,
    fontSize: 16,
  },
  icon: {
    height: 24,
    width: 24,
    tintColor: "#F47521"
  }
})

export default SearchBar
