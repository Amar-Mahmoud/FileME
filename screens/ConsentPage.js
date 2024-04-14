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

const ConsentPage = () => {
 const navigation = useNavigation();
 const [consent, setConsent] = useState(false);

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
      source={require("../assets/progress4.png")}
     />
    </View>

    <Text style={styles.title}>Do you Consent to Save Your Data with us?</Text>
    <Text style={styles.subtitle}>
     We’re doing this out of the kindness of our heart, your info is safe wit
     us!
    </Text>

    <View style={styles.inputContainer}>
     <SecondaryButton
      onPress={() => {
       setConsent(false);
      }}
      title="No"
     />
     <SecondaryButton
      onPress={() => {
       setConsent(true);
      }}
      title="Yes"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("LetsContinue");
    }}
    title="Save"
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

export default ConsentPage;
