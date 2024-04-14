import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import CustomButton from "../components/CustomButton";

const MartialStatus = () => {
 const navigation = useNavigation();
 const [married, setMarried] = useState("");

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image
     resizeMode="contain"
     source={require("../assets/back_icon.png")}
    />
   </TouchableOpacity>

   {/* Page Indicators */}
   <View style={{justifyContent: "center"}}>
   <View style={styles.indicatorContainer}>
    <Image
     style={styles.logo}
     resizeMode="contain"
     source={require("../assets/progress2.png")} // Path to your image
    />
   </View>

   <Text style={styles.title}>What is your Marital Status?</Text>
   <Text style={styles.subtitle}>Are you currently legally married?</Text>

   <View style={styles.inputContainer}>
    <SecondaryButton onPress={() => {setMarried(true)}} title="Married" />
    <SecondaryButton onPress={() => {setMarried(false)}} title="Single" />
   </View>
   </View>

   <CustomButton style={styles.startButton} onPress={() => {navigation.navigate("DependentsPage")}} title="Next" />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#DAFFFF",
  padding: 20,
  paddingTop: 20,
  justifyContent: "space-between",
 },
 backButton: {
  position: "absolute",
  top: 10,
  margin: 10,
  left: 10,
 },
 indicatorContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 20,
 },

 logo: {
  marginVertical: 20,
  padding: 20,
 },
 title: {
  fontSize: 34,
  fontWeight: "bold",
  textAlign: "left",
 },
 subtitle: {
  fontSize: 20,
  textAlign: "left",
  fontWeight: "bold",
  color: "gray",
 },
 inputContainer: {
  marginBottom: 20,
  marginTop: 20,
  justifyContent: "space-between",
  flexDirection: "row",
 },
 inputLabel: {
  fontSize: 18,
 },
 input: {
  height: 50,
  borderWidth: 1,
  borderColor: "gray",
  borderRadius: 10,
  paddingHorizontal: 10,
  fontSize: 18,
  marginTop: 5,
 },
 startButton: {
  position: "absolute", // Position button at the bottom
  bottom: 20, // Distance from the bottom
  left: 0, // Align to the left side
  right: 0, // Align to the right side
  paddingHorizontal: 60,
  paddingVertical: 15,
  borderRadius: 30,
  backgroundColor: "#0000ff",
 },
});

export default MartialStatus;
