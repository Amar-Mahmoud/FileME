import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const Onboarding_3 = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   {/* This view is for the status bar, skip this if you already have it handled */}
   <View style={styles.statusBarPlaceholder} />

   {/* Indicators, assuming they are non-interactive, if interactive use a proper component */}
   <View style={styles.indicatorContainer}>
    <View style={styles.indicator} />
    <View style={styles.indicator} />

    <View style={[styles.indicator, styles.activeIndicator]} />
   </View>

   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/onboarding_3.png")} // Path to your image
   />

   <View style={{ marginHorizontal: 5 }}>
    <Text style={styles.subHeadline}>Customer Friendly</Text>

    <Text style={styles.headline}>
     Seamless and transparent customer experience
    </Text>
   </View>

   <View style={{ flexDirection: "row", justifyContent : "space-evenly"}}>
    <CustomButton
     style={styles.startButton}
     onPress={() => navigation.navigate("VerifyPhoneNumber")}
     title="Register"
    />
    <CustomButton
     style={styles.startButton}
     onPress={() => navigation.navigate("Login")}
     title="Sign in"
    />
   </View>
  </GradientContainer>
 );
};


export default Onboarding_3;
