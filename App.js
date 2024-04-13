import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, View, Text } from "react-native";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import LandingPage from "./screens/LandingPage";
import MainPage from "./screens/MainPage";
import MyAccount from "./screens/MyAccount";
const Stack = createNativeStackNavigator();

function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator
    initialRouteName="Landing"
    screenOptions={{
     headerStyle: {
      backgroundColor: "#fff", // Customize background color
     },
     headerTintColor: "#000", // Customize header text colors
     headerTitleStyle: {
      fontWeight: "bold", // Customize title font weight
     },
    }}
   >
    <Stack.Screen
     name="Landing"
     component={LandingPage}
     options={{
      headerTitle: () => (
       <View style={styles.headerTitle}>
        <Image
         style={styles.logo}
         resizeMode="contain"
         source={require("./assets/logo.png")} // Ensure this path is correct
        />
        <Text style={styles.headerText}>FileME</Text>
       </View>
      ),
      headerRight: () => (
       <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="#000"
       />
      ),
     }}
    />
    <Stack.Screen
     name="Signup"
     component={SignupScreen}
     options={{ title: "Create Account" }}
    />
    <Stack.Screen
     name="Login"
     component={LoginScreen}
     options={{
      title: "Sign In",
      headerBackTitle: "Back", // Custom back button title (iOS mostly)
     }}
    />
    <Stack.Screen
     name="MainPage"
     component={MainPage}
     options={{ title: "Dashboard", headerLeft: null}}
    />
    <Stack.Screen
     name="MyAccount"
     component={MyAccount}
     options={{ title: "Dashboard", headerLeft: null}}
    />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 headerTitle: {
  flexDirection: "row",
  alignItems: "center",
 },
 logo: {
  width: 100,
  height: 70,
  marginRight: 10,
 },
 headerText: {
  fontSize: 20,
  color: "#000",
  
 },
});

export default App;
