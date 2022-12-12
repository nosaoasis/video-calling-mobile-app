import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContactScreen from "../screens/ContactScreen";
import CallingScreen from "../screens/CallingScreen";
import IncomingCallScreen from "../screens/IncomingCallScreen";
import CallScreen from "../screens/CallScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contacts" component={ContactScreen} />
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Call" component={CallScreen} />
            <Stack.Screen name="Calling" component={CallingScreen} />
            <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
