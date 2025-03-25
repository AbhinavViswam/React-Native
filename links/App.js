// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';

// // import { Welcome } from './component/Welcome';
// // import {WebView} from 'react-native-webview';

// // export default function App() {
// //   const names = ["Gojo Satoru", "Hatake Kakashi", "Sung Jinwoo"]
// //   return (
// //     // <View style={styles.container}>
// //     //   <Text>Hello world</Text>
// //     //   <StatusBar style="auto" />
// //     //   {
// //     //     names.map((i,j)=>(
// //     //       <Welcome key={j} name={i} />
// //     //     ))
// //     //   }

// //     // </View>
// //     <View>
// //       <WebView source={{uri:"https://www.google.co.in/"}} style={{ flex: 1 }} />
// //     </View>
// //   );
// // }



// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'lavender',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });




// // import { StatusBar } from 'expo-status-bar';
// import { View ,Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
// // import { WebView } from 'react-native-webview';

// export default function App() {
//   return (
//     // <View style={{flex:1}}> 
//     //   <WebView source={{ uri: "https://space-tour-rp1t.onrender.com/" }} style={{ flex: 1 }} />
//     //   <StatusBar style='auto' />
//     // </View>
//     // <View style={styles.container}>
//     //   <Text>Hello</Text>
//     //   <Image
//     //   style={styles.img}
//     //   source={{uri:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNofGVufDB8fDB8fHww"}}
//     //   />
//     // </View>
//     <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
// <TouchableOpacity style={styles.button} onLongPress={()=>Alert.alert("thats a long press")} onPress={()=>Alert.alert("hello")}>
//   <Text style={styles.buttonText}>CLICK</Text>
// </TouchableOpacity>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  
  const triggerClick = () => {
    if(name){
      Alert.alert(`Welcome ${name}`);
    }
    else{
      Alert.alert(`😡`);
    }
    setName('')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wanna Try?</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        onChangeText={(text) => setName(text)}
        value={name}
        keyboardType='numeric'
      />
      <Pressable style={styles.button} onPress={triggerClick}>
        <Text style={styles.buttonText}>OK</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
