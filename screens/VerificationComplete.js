import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const VerificationComplete = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   <View style={{ marginHorizontal: 5, alignSelf:"center", justifyContent: "center", flex: 1 }}>
    <Image
     style={{ ...styles.logo, margintop: "30%" }}
     resizeMode="contain"
     source={require("../assets/checkmark.png")}
    />
    <Text style={[styles.title, { textAlign: "center", fontSize: 24 }]}>
     Verification Complete
    </Text>
    <Text style={[styles.subHeadline2]}>
     Your Phone number has been verified.
    </Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("VerifyEmail")}
    title="Continue"
   />
  </GradientContainer>
 );
};

export default VerificationComplete;
