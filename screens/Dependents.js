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
import GradientContainer from "../components/GradientContainer";

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
  console.log(formData);
  // navigation.navigate('NextScreen', { formData }); // Example navigation
 };

 const handleInputChange = (name, value) => {
  setFormData((prevState) => ({
   ...prevState,
   [name]: value,
  }));
 };

 return (
  <GradientContainer style={styles.container}>
   <View style={{ justifyContent: "space-between", flex: 1 }}>
    <TouchableOpacity
     style={styles.backButton}
     onPress={() => navigation.goBack()}
    >
     <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
    </TouchableOpacity>

    <ScrollView
     contentContainerStyle={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "center"
     }}
    >
     <View style={{ padding: 10 }}>
      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>First and Last Name</Text>
       <TextInput
        style={styles.input}
        value={formData.fullName}
        onChangeText={(value) => handleInputChange("fullName", value)}
        placeholder=""
        keyboardType="number-pad"
       />
       <Text style={styles.inputLabel}>SIN</Text>
       <TextInput
        style={styles.input}
        value={formData.sin}
        onChangeText={(value) => handleInputChange("sin", value)}
        placeholder="XXX-XXX-XXX"
        keyboardType="number-pad"
       />

       <Text style={styles.inputLabel}>Date of Birth</Text>
       <TextInput
        style={styles.input}
        value={formData.dob}
        onChangeText={(value) => handleInputChange("dob", value)}
        placeholder="MM/DD/YYYY"
        keyboardType="number-pad"
       />

       <View style={styles.inputContainer}>
        <RadioForm
         radio_props={relationshipOptions}
         initial={-1}
         onPress={(value) => handleInputChange("relationship", value)}
         buttonColor={"#2196f3"}
         selectedButtonColor={"#2196f3"}
        />
       </View>

       <Text style={styles.inputLabel}>Income</Text>
       <TextInput
        style={styles.input}
        value={formData.income}
        onChangeText={(value) => handleInputChange("income", value)}
        placeholder=""
        keyboardType="number-pad"
       />
      </View>
     </View>
    </ScrollView>

    <CustomButton
     style={{ ...styles.nextButton, bottom: 0 }}
     onPress={() => navigation.navigate("MartialStatus")}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default Dependents;
