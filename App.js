import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import ContactsScreen from "./src/screens/ContactScreen";
// import CallingScreen from "./src/screens/CallingScreen";
// import IncomingCallScreen from "./src/screens/IncomingCallScreen";
// import CallScreen from "./src/screens/CallScreen";
import Navigation from "./src/Navigation"

export default function App() {

  // const 
  
  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
        {/* <StatusBar barStyle={"dark-content"} /> */}
        {/* <ContactsScreen /> */}
        {/* <CallingScreen /> */}
        {/* <IncomingCallScreen /> */}
        {/* <CallScreen /> */}
        <Navigation />
      {/* </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
});
