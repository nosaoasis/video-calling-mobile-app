import { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CallActionBox from "../../components/CallActionBox";
import { useNavigation, useRoute } from "@react-navigation/core";

const CallingScreen = () => {

  const navigation = useNavigation()
  const route = useRoute()

  const user = route?.params?.user
  console.log("User value is",user)

  const goBack = () => {
    console.warn("hello back")
    navigation.goBack()
  }


  return (
    <>
      <View style={styles.page}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Ionicons name="chevron-back" color={"white"} size={25} />
        </Pressable>
        <View style={styles.cameraPreview}>
          <Text style={styles.name}>{user?.user_display_name}</Text>
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
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    // color: "black",
    zIndex: 100
  }
});

export default CallingScreen;
