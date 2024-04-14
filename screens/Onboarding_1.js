import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const Onboarding_1 = () => {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   {/* This view is for the status bar, skip this if you already have it handled */}
   <View style={styles.statusBarPlaceholder} />

   {/* Indicators, assuming they are non-interactive, if interactive use a proper component */}
   <View style={styles.indicatorContainer}>
    <View style={[styles.indicator, styles.activeIndicator]} />

    <View style={styles.indicator} />
    <View style={styles.indicator} />
   </View>

   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/onboarding_1.png")} // Path to your image
   />

   <Text style={styles.subHeadline}>Easy to follow</Text>

   <Text style={styles.headline}>Enjoy the simplest tax process</Text>

   <CustomButton
    style={styles.startButton}
    onPress={() => navigation.navigate("Onboarding_2")}
    title="Get Started"
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
  height: 300, // Adjust the height according to your image aspect ratio
  marginVertical: 30, // Space between image and text
 },
 headline: {
  fontSize: 34,
  fontWeight: "bold",
  textAlign: "center",
 },
 subHeadline: {
  fontSize: 28,
  textAlign: "center",
  fontWeight: "bold",
  color: "#3A45AD",
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

export default Onboarding_1;
