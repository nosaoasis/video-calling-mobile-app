import { Text, StyleSheet, View } from "react-native";

const IncomingCallScreen = () => {
  return (
    <>
      <View>
        <Text style={styles.name}>......iamI</Text>
        <Text style={styles.phoneNumber}>+234 802 *** ****</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: "bold",
    // color: "white",
    marginTop: 50,
  },
  phoneNumber: {
    fontSize: 18,
    // color: "white",
    marginTop: 10,
  },
});

export default IncomingCallScreen;
