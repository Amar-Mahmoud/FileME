import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const FinishPage = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/onboarding_1.png")}
   />

   <View style={{ marginHorizontal: 5 }}>
    <Text style={styles.subHeadline}>We’re all done!</Text>

    <Text style={styles.headline}>
     We’re All Set! Your tax information is now available in the home screen!
    </Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("EmploymentStatus")}
    title="Bring Me Back Home!"
   />
  </GradientContainer>
 );
};


export default FinishPage;
