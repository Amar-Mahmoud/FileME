import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 ScrollView,
 Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton"; // Assuming this is your styled 'Next' button
import RadioForm from "react-native-simple-radio-button"; // You might need to install this package

const Dependents = () => {
 const navigation = useNavigation();
 const [formData, setFormData] = useState({
  fullName: "",
  sin: "",
  dob: "",
  relationship: "",
  income: "",
  educationCosts: "",
  residency: "",
 });

 const relationshipOptions = [
  { label: "Your Spouse", value: "spouse" },
  { label: "Your Child", value: "child" },
  { label: "Your Elder (family member)", value: "elder" },
  { label: "Impaired / Challenged Dependent", value: "impaired" },
 ];

 const residencyOptions = [
  { label: "Yes they have!", value: "full" },
  { label: "Partially throughout the year!", value: "partial" },
  { label: "No, they haven’t.", value: "none" },
 ];

 const handleSubmit = () => {
  // Process formData here or navigate to the next screen
  console.log(formData);
  // navigation.navigate('NextScreen', { formData }); // Example navigation
 };

 // A function to update form data
 const handleInputChange = (name, value) => {
  setFormData((prevState) => ({
   ...prevState,
   [name]: value,
  }));
 };

 return (
  <ScrollView contentContainerStyle={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>
   <ScrollView contentContainerStyle={{ justifyContent: "center", marginTop: "15%" }} showsVerticalScrollIndicator="false">
    <Text style={styles.subtitle}>Full Name:</Text>

    <TextInput
     style={styles.input}
     placeholder="Enter their Full Name"
     value={formData.fullName}
     onChangeText={(text) => handleInputChange("fullName", text)}
    />
    <Text style={styles.subtitle}>SIN:</Text>

    <TextInput
     style={styles.input}
     placeholder="SIN (Social Insurance Number)"
     value={formData.sin}
     onChangeText={(text) => handleInputChange("sin", text)}
    />
    <Text style={styles.subtitle}>Date of Birth:</Text>

    <TextInput
     style={styles.input}
     placeholder="Date of Birth"
     value={formData.dob}
     onChangeText={(text) => handleInputChange("dob", text)}
    />
    <Text style={styles.subtitle}>What is their relationship to you?</Text>
    <RadioForm
     radio_props={relationshipOptions}
     initial={-1}
     onPress={(value) => handleInputChange("relationship", value)}
     buttonColor={"#2196f3"}
     selectedButtonColor={"#2196f3"}
    />
    <Text style={styles.subtitle}> Income:</Text>

    <TextInput
     style={styles.input}
     placeholder="Income"
     value={formData.income}
     onChangeText={(text) => handleInputChange("income", text)}
    />

    <Text style={styles.subtitle}> Education:</Text>

    <TextInput
     style={styles.input}
     placeholder="Education Costs"
     value={formData.educationCosts}
     onChangeText={(text) => handleInputChange("educationCosts", text)}
    />
   </ScrollView>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("ConsentPage");
    }}
    title="Next"
   />
  </ScrollView>
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
  marginVertical: "auto",
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
  marginVertical: 10,
  color: "gray",
 },
 inputContainer: {
  marginBottom: 20,
  marginTop: 20,
  alignSelf: "center",
  justifyContent: "space-between",
  flexDirection: "row",
 },
 inputLabel: {
  fontSize: 18,
 },
 input: {
  height: 50,
  backgroundColor: "#fff",
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
  left: 0,
  right: 0,
  paddingHorizontal: 60,
  paddingVertical: 15,
  borderRadius: 30,
  backgroundColor: "#0000ff",
 },
});

export default Dependents;
