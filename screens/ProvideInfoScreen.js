import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";

const Onboarding_3 = () => {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/provideinfoscreen.png")}
   />

   <View style={{ marginHorizontal: 5 }}>
    <Text style={[styles.title, { textAlign: "center" }]}>Let's Start</Text>
    <Text style={[styles.subtitle, { textAlign: "center" }]}>
     First, we’ll start with your Personal infomation!
    </Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("SINVerificationScreen")}
    title="Provide Your Info!"
   />
  </View>
 );
};

export default Onboarding_3;
