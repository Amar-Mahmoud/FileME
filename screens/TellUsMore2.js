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
import Octicons from "react-native-vector-icons/Octicons";

const TellUsMore2 = () => {
 const navigation = useNavigation();
 const [dob, setDOB] = useState("");

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
      placeholder="MM/DD/YYYY"
      keyboardType="number-pad"
     />
    </View>
   </View>

   <View style={{ flexDirection: "column" }}>
    <Text style={{ ...styles.subHeadline2, textAlign: "left" }}>
     By registering, you agree to our {terms()} and {privacy()}

    </Text>
    <CustomButton
     style={styles.nextButton}
     onPress={() => navigation.navigate("AllDone")}
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
