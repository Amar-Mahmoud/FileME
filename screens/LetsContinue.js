import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";

const LetsContinue = () => {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/LetsContinue.png")} // Path to your image
   />

   <View style={{ marginHorizontal: 5 }}>
    <Text style={styles.subHeadline}>Great Job, Next!</Text>

    <Text style={styles.headline}>We’ll continue with your Income Now!</Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("EmploymentStatus")}
    title="Let's Continue!"
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
 statusBarPlaceholder: {
  height: 20, // Replace with actual status bar height
 },
 indicatorContainer: {
  flexDirection: "row",
  justifyContent: "center",
  paddingVertical: 20,
 },
 indicator: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: "#dcdcdc",
  marginHorizontal: 5,
 },
 activeIndicator: {
  width: 25,
  backgroundColor: "#0000ff", // Active indicator color
 },
 logo: {
  width: "100%",
  height: 200, // Adjust the height according to your image aspect ratio
  marginVertical: 30, // Space between image and text
 },
 headline: {
  fontSize: 26,
  textAlign: "center",
 },
 subHeadline: {
  fontSize: 28,
  textAlign: "center",
  fontWeight: "bold",
  color: "#000",
 },
 startButton: {
  position: "absolute",
  bottom: 20,
  left: 0,
  right: 0,
  paddingHorizontal: 60,
  paddingVertical: 15,
  borderRadius: 30,
  backgroundColor: "#0000ff",
 },
});

export default LetsContinue;
