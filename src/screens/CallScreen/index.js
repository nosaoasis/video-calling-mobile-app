import { Text, View, StyleSheet } from "react-native";
import CallActionBox from "../../components/CallActionBox";

const CallScreen = () => {
  return (
    <>

      <View style={styles.page}>
        <View style={styles.cameraPreview}>
          <View style={styles.callerVideoBox}></View>
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
  callerVideoBox: {
    height: 200,
    width: 120,
    position: "absolute",
    backgroundColor: "#ffff6e",
    borderRadius:10,
    top: 100,
    right: 30
  }
});

export default CallScreen;
