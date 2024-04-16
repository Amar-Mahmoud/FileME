import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const Onboarding_2 = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   <View style={styles.statusBarPlaceholder} />

   <View style={styles.indicatorContainer}>
    <View style={styles.indicator} />
    <View style={[styles.indicator, styles.activeIndicator]} />
    <View style={styles.indicator} />
   </View>

   <Image
    style={[styles.logo]}
    source={require("../assets/onboarding_2.png")}
    resizeMode="contain"
   />

   <View>
    <Text style={styles.subHeadline}>Zero Cost</Text>

    <Text style={styles.headline}>Completely Free</Text>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => navigation.navigate("Onboarding_3")}
    title="Get Started"
   />
  </GradientContainer>
 );
};

export default Onboarding_2;
