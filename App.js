import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import ContactsScreen from "./src/screens/ContactScreen";
import CallingScreen from "./src/screens/CallingScreen";
import IncomingCallScreen from "./src/screens/IncomingCallScreen";

export default function App() {

  
  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
        <StatusBar barStyle={"dark-content"} />
        {/* <ContactsScreen /> */}
        {/* <CallingScreen /> */}
        <IncomingCallScreen />
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
