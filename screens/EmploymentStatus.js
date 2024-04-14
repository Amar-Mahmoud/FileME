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

const EmploymentStatus = () => {
 const navigation = useNavigation();
 const [employed, setEmployed] = useState("");

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   {/* Page Indicators */}
   <View style={{ justifyContent: "center", margin: "auto" }}>


    <Text style={styles.title}>What is your Employment Status?</Text>
    <Text style={styles.subtitle}>
     Are you working? And if you are, are you salaried or commissioned
    </Text>

    
    <View style={styles.inputContainer}>
     <SecondaryButton
      onPress={() => {
       setEmployed(true);
      }}
      title="Employed"
     />
     <SecondaryButton
      onPress={() => {
       setEmployed(false);
      }}
      title="Not Employed"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("EmploymentIncome");
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
  paddingHorizontal: 10,
  fontSize: 18,
  marginTop: 5,
 },
 startButton: {
  position: "absolute",
  bottom: 20,
  margin: "auto",
  left: 0,
  right: 0,
  paddingHorizontal: 30,
  paddingVertical: 15,
  borderRadius: 30,
  backgroundColor: "#0000ff",
 },
});

export default EmploymentStatus;
