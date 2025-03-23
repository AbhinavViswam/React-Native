// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import { Welcome } from './component/Welcome';
// import {WebView} from 'react-native-webview';

// export default function App() {
//   const names = ["Gojo Satoru", "Hatake Kakashi", "Sung Jinwoo"]
//   return (
//     // <View style={styles.container}>
//     //   <Text>Hello world</Text>
//     //   <StatusBar style="auto" />
//     //   {
//     //     names.map((i,j)=>(
//     //       <Welcome key={j} name={i} />
//     //     ))
//     //   }

//     // </View>
//     <View>
//       <WebView source={{uri:"https://www.google.co.in/"}} style={{ flex: 1 }} />
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lavender',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex:1}}> 
      <WebView source={{ uri: "https://space-tour-rp1t.onrender.com/" }} style={{ flex: 1 }} />
      <StatusBar style='auto' />
    </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lavender',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
