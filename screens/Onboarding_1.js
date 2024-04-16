import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const Onboarding_1 = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   <View style={styles.statusBarPlaceholder} />

   <View style={styles.indicatorContainer}>
    <View style={[styles.indicator, styles.activeIndicator]} />
    <View style={styles.indicator} />
    <View style={styles.indicator} />
   </View>

   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/onboarding_1.png")} // Path to your image
   />

   <View>
    <Text style={styles.subHeadline}>Easy to follow</Text>
    <Text style={styles.headline}>Enjoy the simplest tax process</Text>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => navigation.navigate("Onboarding_2")}
    title="Get Started"
   />
  </GradientContainer>
 );
};

export default Onboarding_1;
