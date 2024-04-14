import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, View, Text } from "react-native";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import LandingPage from "./screens/LandingPage";
import MainPage from "./screens/MainPage";
import MyAccount from "./screens/MyAccount";
import SplashScreen from "./screens/SplashScreen";
import Onboarding_1 from "./screens/Onboarding_1";
import Onboarding_2 from "./screens/Onboarding_2";
import Onboarding_3 from "./screens/Onboarding_3";
import EmailVerificationScreen from "./screens/EmailVerificationScreen";
import ProvideInfoScreen from "./screens/ProvideInfoScreen";
import SINVerificationScreen from "./screens/SINVerificationScreen";
import MartialStatus from "./screens/MartialStatus";
import DependentsPage from "./screens/DependentsPage";
import ConsentPage from "./screens/ConsentPage";
import Dependents from "./screens/Dependents";
import LetsContinue from "./screens/LetsContinue";
import EmploymentStatus from "./screens/EmploymentStatus";
import EmploymentIncome from "./screens/EmploymentIncome";
import SelfEmploymentIncome from "./screens/SelfEmploymentIncome";
import InvestmentIncome from "./screens/InvestmentIncome";

const Stack = createNativeStackNavigator();

import * as Font from "expo-font";
import RegisteredInvestmentAccounts from "./screens/RegisteredInvestmentAccounts";

async function loadFonts() {
 await Font.loadAsync({
  "SourceSansPro-Regular": require("./assets/fonts/SourceSansPro-Regular.ttf"),
  "SourceSansPro-Bold": require("./assets/fonts/SourceSansPro-Bold.ttf"),
 });
}

function App() {
 loadFonts();

 return (
  <NavigationContainer>
   <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{
     headerStyle: {
      backgroundColor: "#fff",
     },
     headerTintColor: "#000",
     headerTitleStyle: {
      fontWeight: "bold",
     },
    }}
   >
    <Stack.Screen
     name="Onboarding_1"
     component={Onboarding_1}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="Onboarding_2"
     component={Onboarding_2}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="Onboarding_3"
     component={Onboarding_3}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="ProvideInfoScreen"
     component={ProvideInfoScreen}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="SINVerificationScreen"
     component={SINVerificationScreen}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="MartialStatus"
     component={MartialStatus}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="DependentsPage"
     component={DependentsPage}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="Dependents"
     component={Dependents}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="ConsentPage"
     component={ConsentPage}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="LetsContinue"
     component={LetsContinue}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="EmploymentStatus"
     component={EmploymentStatus}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="EmploymentIncome"
     component={EmploymentIncome}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="SelfEmploymentIncome"
     component={SelfEmploymentIncome}
     options={{ headerShown: false }}
    />

    <Stack.Screen
     name="InvestmentIncome"
     component={InvestmentIncome}
     options={{ headerShown: false }}
    />

    <Stack.Screen
     name="RegisteredInvestmentAccounts"
     component={RegisteredInvestmentAccounts}
     options={{ headerShown: false }}
    />

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
     name="EmailVerificationScreen"
     component={EmailVerificationScreen}
     options={{ title: "EmailVerificationScreen", headerLeft: null }}
    />
    <Stack.Screen
     name="MainPage"
     component={MainPage}
     options={{ title: "Dashboard", headerLeft: null }}
    />
    <Stack.Screen
     name="MyAccount"
     component={MyAccount}
     options={{ title: "Dashboard", headerLeft: null }}
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
  width: 200,
  height: 100,
  marginRight: 10,
 },
 headerText: {
  fontSize: 20,
  color: "#000",
 },
});

export default App;
