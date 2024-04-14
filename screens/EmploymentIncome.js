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

const EmploymentIncome = () => {
 const navigation = useNavigation();
 const [income, setIncome] = useState();

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   {/* Page Indicators */}
   <View style={{ justifyContent: "center" }}>
    <View style={styles.indicatorContainer}>
     <Image
      style={styles.logo}
      resizeMode="contain"
      source={require("../assets/progress_2_1.png")} // Path to your image
     />
    </View>

    <Text style={styles.title}>What is your Employment Income?</Text>
    <Text style={styles.subtitle}>
     Your employer should have given you a T4 slip near tax season. Enter the
     income amount here!
    </Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Employment Income</Text>
     <TextInput
      style={styles.input}
      value={income}
      onChangeText={setIncome}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("SelfEmploymentIncome");
    }}
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
  marginTop: 10,
  color: "gray",
 },
 inputContainer: {
  marginBottom: 20,
  marginTop: 20,
  justifyContent: "space-between",
  flexDirection: "column",
 },
 inputLabel: {
  fontSize: 18,
 },
 input: {
  height: 50,
  borderWidth: 1,
  borderColor: "gray",
  borderRadius: 10,
  backgroundColor: "#fff",
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
  // Remove marginBottom if it's no longer needed
 },
});

export default EmploymentIncome;
