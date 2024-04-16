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
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";


const CodeSent = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/x.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", marginTop: "20%" }}>
    <Text style={styles.title}>We just sent an SMS</Text>
    <Text style={{...styles.subHeadline2, textAlign: "left"}}>Enter the security code we sent</Text>

    <View style={styles.inputContainer}>
     <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <TextInput
       style={{ ...styles.input, width: 40 }}
       placeholder=""
       keyboardType="number-pad"
      />
      <TextInput
       style={{ ...styles.input, width: 40 }}
       placeholder=""
       keyboardType="number-pad"
      />
      <TextInput
       style={{ ...styles.input, width: 40 }}
       placeholder=""
       keyboardType="number-pad"
      />
      <TextInput
       style={{ ...styles.input, width: 40 }}
       placeholder=""
       keyboardType="number-pad"
      />
      <TextInput
       style={{ ...styles.input, width: 40 }}
       placeholder=""
       keyboardType="number-pad"
      />
      <TextInput
       style={{ ...styles.input, width: 40 }}
       placeholder=""
       keyboardType="number-pad"
      />
     </View>
     <View
      style={{
       justifyContent: "space-between",
       flexDirection: "row",
       marginTop: 15,
      }}
     >
      <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, textAlign: "left" }}>
       Didn’t get the code? {ResendCode()}
      </Text>
      <Image
       resizeMode="contain"
       source={require("../assets/clock.png")}
       style={{ tintColor: "#000" }}
      />
     </View>
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => navigation.navigate("VerificationComplete")}
    title="Done"
   />
  </GradientContainer>
 );

 function ResendCode() {
  return (
   <Text
    onPress={() => navigation.navigate("VerifyPhoneNumber")}
    style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, color: "#3A45AD" }}
   >
    Resend it
   </Text>
  );
 }
};

export default CodeSent;
