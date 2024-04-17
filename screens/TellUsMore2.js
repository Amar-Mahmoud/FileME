import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";

const TellUsMore2 = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [dob, setDOB] = React.useState(userData.dob || "");

 const [errorMessage, setErrorMessage] = useState("");

 const handleSave = async () => {
  let date = new Date(dob);
  if (!isNaN(date)) {
   const dob2 = date.toISOString().split("T")[0];
   console.log("Formatted DOB:", dob2); 
   setDOB(dob2);
   await updateUserData({ dob: dob2 });
   console.log("Updated UserData:", { ...userData, dob: dob2 }); 
  } else {
   console.error("DOB is not a valid Date object");
  }
 };

 const handleSubmit = async () => {
  try {
   const response = await fetch("http://localhost:3001/signup", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
   });

   const result = await response.json();
   console.log("Server Response:", result); 

   if (response.ok) {
    navigation.navigate("AllDone");
   } else {
    throw new Error(result.message || "Failed to create account");
   }
  } catch (error) {
   setErrorMessage(error.message);
  }
 };

 const wrapper = async () => {
  await handleSave();
  handleSubmit();
 };

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", marginTop: "20%" }}>
    <Text style={styles.title}>What is your date of birth?</Text>
    <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
     We need your DOB to verify your account
    </Text>

    <View
     style={{
      flexDirection: "column",
      marginTop: 20,
      paddingVertical: 10,
     }}
    >
     <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
      Date of birth
     </Text>
     <TextInput
      style={{
       ...styles.input,
       paddingRight: 40,
       paddingLeft: 10,
      }}
      value={dob}
      onChangeText={setDOB}
      placeholder="YYYY-MM-DD"
      keyboardType="number-pad"
     />
    </View>
   </View>
   {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

   <View style={{ flexDirection: "column" }}>
    <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
     By registering, you agree to our {terms()} and {privacy()}
    </Text>

    <CustomButton
     style={styles.nextButton}
     onPress={() => wrapper()}
     title="Create account"
    />
   </View>
  </GradientContainer>
 );

 function terms() {
  return (
   <Text
    onPress={() => navigation.navigate("Terms")}
    style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, color: "#3A45AD" }}
   >
    Terms of Service
   </Text>
  );
 }

 function privacy() {
  return (
   <Text
    onPress={() => navigation.navigate("Privacy")}
    style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, color: "#3A45AD" }}
   >
    Privacy Policy
   </Text>
  );
 }
};

export default TellUsMore2;
