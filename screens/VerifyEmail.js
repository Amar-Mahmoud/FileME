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
import { useData } from "../components/DataProvider";

const VerifyEmail = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [email, setEmail] = React.useState(userData.email || "");

 const handleSave = () => {
  updateUserData({ email });
  navigation.navigate("VerifyEmail2", { email: email });
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
    <Text style={styles.title}>Let's verify your email</Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Your email</Text>

     <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder=""
     />
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => handleSave()}
    title="Continue"
   />
  </GradientContainer>
 );

 function signIn() {
  return (
   <Text
    onPress={() => navigation.navigate("Login")}
    style={{ fontWeight: "bold", fontSize: 14, marginTop: 5, color: "#3A45AD" }}
   >
    Sign in
   </Text>
  );
 }
};

export default VerifyEmail;
