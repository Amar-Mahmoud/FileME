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

const SINVerificationScreen = () => {
 const navigation = useNavigation();
 const [sin, setSin] = useState("");

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
     source={require("../assets/progress1.png")} // Path to your image
    />
   </View>

    <Text style={styles.title}>What is your Social Insurance Number?</Text>
    <Text style={styles.subtitle}>We need your SIN for the tax process!</Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>SIN</Text>
     <TextInput
      style={styles.input}
      value={sin}
      onChangeText={setSin}
      placeholder="123 456 789"
      keyboardType="number-pad"
     />
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => navigation.navigate("MartialStatus")}
    title="Next"
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#DAFFFF",
  padding: 20,
  paddingTop: 50, // Adjust according to the status bar height
  justifyContent: "space-between",
 },
 backButton: {
  position: "absolute",
  top: 40,
  left: 20,
 },
 indicatorContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 20,
 },
 logo: {
  marginVertical: 20, // Space between image and text
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
  width: "90%",
  marginBottom: 20,
 },
 inputLabel: {
  fontSize: 18,
  marginVertical: 10,
 },
 input: {
  height: 50,
  borderWidth: 1,
  borderColor: "gray",
  borderRadius: 10,
  backgroundColor: "white",
  paddingHorizontal: 10,
  fontSize: 18,
  marginTop: 5,
 },
 nextButton: {},
});

export default SINVerificationScreen;
