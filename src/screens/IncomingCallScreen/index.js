import { Text, StyleSheet, View, ImageBackground, Pressable } from "react-native";
import bg from "../../../assets/images/incoming_call_bg_image.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

const IncomingCallScreen = () => {

  const handleAccept = () => {
    console.log("h=accepted the call")
    console.warn("h=accepted the call")
  }

  const handleDecline = () => {
    console.log("sorry your call has been declined....")
    console.warn("sorry your call has been declined....")
  }


  return (
    <>
      {/* <View style={styles.root}> */}
      <ImageBackground source={bg} style={styles.bgImage}>
        <Text style={styles.name}>......iamI</Text>
        <Text style={styles.phoneNumber}>Ringing +234 802 *** ****</Text>

        <View style={[styles.row, {marginTop:"auto"}]}>
          <View style={styles.iconContainer}>
            <Ionicons name="alarm" color="white" size={20} />
            <Text style={styles.iconText}>Remind me</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="message" color="white" size={20} />
            <Text style={styles.iconText}>Message</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* Decline Button */}
          <Pressable onPress={handleDecline} style={styles.iconContainer}>
            <View style={styles.iconButtonContainer}>
              <Ionicons name="close" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </Pressable>
          {/* Accept Button */}
          <Pressable onPress={handleAccept} style={styles.iconContainer}>
            <View style={[styles.iconButtonContainer, {backgroundColor: "green"}]}>
              <Ionicons name="checkmark" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  // root: {
  //   height: "100%",
  // },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 100,
  },
  phoneNumber: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 20
  },
  iconText: {
    color: "white",
    marginTop: 10,
  },
  iconButtonContainer : {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    margin: 10
  }
});

export default IncomingCallScreen;
