import { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CallActionBox = () => {

  const [isCameraOn, setIsCamaeraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(false)

  const handleCameraReverse = () => {
    console.warn("you clicked on handleCameraReverse");
  };
  const handleCameraOff = () => {
    setIsCamaeraOn(currentValue => !currentValue)
  };
  const handleMicrophoneOff = () => {
    setIsMicOn(currentValue => !currentValue)
  };
  const handleEndCall = () => {
    console.warn("you clicked on handleEndCall");
  };
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={handleCameraReverse} style={styles.vectorIconView}>
          <Ionicons name="camera-reverse" size={25} color="white" />
        </Pressable>
        <Pressable onPress={handleCameraOff} style={styles.vectorIconView}>
          <MaterialIcons name={isCameraOn ? "camera-off" : "camera"} size={25} color="white" />
        </Pressable>
        <Pressable onPress={handleMicrophoneOff} style={styles.vectorIconView}>
          <MaterialIcons name={isMicOn ? "microphone-off" : "microphone"} size={25} color="white" />
        </Pressable>
        <Pressable
          onPress={handleEndCall}
          style={[styles.vectorIconView, { backgroundColor: "red" }]}
        >
          <MaterialIcons name={"phone-hangup"} size={25} color="white" />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#333333",
    // width: "100%",
    paddingVertical: 20,
    opacity: 0.8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  vectorIconView: {
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 50,
  },
});

export default CallActionBox;
