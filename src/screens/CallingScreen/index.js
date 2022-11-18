import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CallingScreen = () => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.cameraPreview}>
          <Text style={styles.name}>...iamI</Text>
          <Text style={styles.phoneNumber}> Ringing +234 802 **** ****</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.vectorIconView}>
            <Ionicons name="camera-reverse" size={25} color="white" />
          </View>
          <View style={styles.vectorIconView}>
            <MaterialIcons name={"camera-off"} size={25} color="white" />
          </View>
          <View style={styles.vectorIconView}>
            <MaterialIcons name={"microphone-off"} size={25} color="white" />
          </View>
          <View style={[styles.vectorIconView, {backgroundColor:"red"}]}>
            <MaterialIcons name={"phone-hangup"} size={25} color="white" />
          </View>
        </View>
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
  buttonsContainer: {
    backgroundColor: "#333333",
    width: "100%",
    paddingVertical: 20,
    opacity: 0.8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vectorIconView: {
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 50,
  },
});

export default CallingScreen;
