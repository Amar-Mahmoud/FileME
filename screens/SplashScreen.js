import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const LandingPage = () => {
 const navigation = useNavigation();

 React.useLayoutEffect(() => {
  navigation.setOptions({
   headerRight: () => (
    <View style={styles.headerButtons}>
     <CustomButton
      style={styles.buttonStyle}
      onPress={() => navigation.navigate("Signup")}
      title="Get Started"
      color="#1e90ff"
     />
     <View style={styles.buttonSpacer} />
     <CustomButton
      style={styles.buttonStyle}
      onPress={() => navigation.navigate("Login")}
      title="Login"
      color="#1e90ff"
     />
    </View>
   ),
  });
 }, [navigation]);

 return (
  <View style={styles.container}>
   <Image 
    resizeMode="contain"
    source={require("../assets/logo1.png")} // Ensure this path is correct
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: 20,
 },
 heroTitle: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10,
 },
 heroText: {
  fontSize: 18,
  textAlign: "center",
  marginBottom: 20,
 },
 headerButtons: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginRight: "10%",
  width: 200,
 },
 buttonSpacer: {
  width: 10, // Adjust the spacing between the buttons
 },
 buttonStyle: {
  width: 100,
  fontSize: 16,
 },
});

export default LandingPage;
