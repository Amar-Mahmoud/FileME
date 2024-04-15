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
import styles from "../styles";

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
   <ScrollView
    contentContainerStyle={{ justifyContent: "center", marginTop: "25%", paddingVertical:20 }}
    showsVerticalScrollIndicator="false"
   >
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
    <Text style={styles.subtitle}>Relationship to You</Text>
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

export default Dependents;
