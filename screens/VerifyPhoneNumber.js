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


const VerifyPhoneNumber = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [phone, setPhone] = React.useState(userData.phone || "");

 const handleSave = () => {
    updateUserData({ phone });
    navigation.navigate("CodeSent")
};

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/x.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", marginTop: "20%", padding: 10 }}>
    <Text style={styles.title}>Verify your phone number with code</Text>
    <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
     We’ll send you a code. It helps keep your account secure
    </Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Your Phone Number</Text>
     <View style={{ flexDirection: "row" }}>
      <TextInput
       style={{ ...styles.input, width: 70, marginRight: 5 }}
       placeholder="+1"
       keyboardType="number-pad"
      />
      <TextInput
       style={{ ...styles.input, marginHorizontal: 5 }}
       value={phone}
       onChangeText={setPhone}
       placeholder=""
       keyboardType="number-pad"
      />
     </View>
     <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 15 }}>
      Already have an account? {signIn()}
     </Text>
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => handleSave()}
    title="Send Code"
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

export default VerifyPhoneNumber;
