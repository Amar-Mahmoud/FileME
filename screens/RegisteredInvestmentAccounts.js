import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
 ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import CustomButton from "../components/CustomButton";

const RegisteredInvestmentAccounts = () => {
 const navigation = useNavigation();
 const [interestGain, setInterestGain] = useState();
 const [interestLoss, setInterestLoss] = useState();
 const [dividendGain, setDividendGain] = useState();
 const [dividendLoss, setDividendLoss] = useState();

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>
   <View style={styles.indicatorContainer}>
    <Image
     style={styles.logo}
     resizeMode="contain"
     source={require("../assets/progress_2_3.png")} // Path to your image
    />
   </View>
   <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
    <Text style={styles.title}>What is your Investment Income?</Text>
    <Text style={styles.subtitle}>
     How much did you contribute to your pension and RRSP? If you have, how much
     did you TAKE OUT of these accounts?
    </Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Your GAIN in interest?</Text>
     <TextInput
      style={styles.input}
      value={interestGain}
      onChangeText={setInterestGain}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
     <Text style={styles.inputLabel}>Your LOSS in interest?</Text>
     <TextInput
      style={styles.input}
      value={interestLoss}
      onChangeText={setInterestLoss}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
     <Text style={styles.inputLabel}>Your GAIN in dividends?</Text>
     <TextInput
      style={styles.input}
      value={dividendGain}
      onChangeText={setDividendGain}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
     <Text style={styles.inputLabel}>Your LOSS in dividends? </Text>
     <TextInput
      style={styles.input}
      value={dividendLoss}
      onChangeText={setDividendLoss}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
    </View>
   </ScrollView>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("ConsentPage");
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

export default RegisteredInvestmentAccounts;