import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CallActionBox from "../../components/CallActionBox";


const CallingScreen = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.cameraPreview}>
          <Text style={styles.name}>...iamI</Text>
          <Text style={styles.phoneNumber}> Ringing +234 802 **** ****</Text>
        </View>

        <CallActionBox />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: "#56adf0",
  },
  cameraPreview: {
    backgroundColor: "#56adf0",
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 50,
  },
  phoneNumber: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
});

export default CallingScreen;
