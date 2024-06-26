import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const Onboarding_3 = () => {
 const navigation = useNavigation();

 return (
  <GradientContainer style={styles.container}>
   <View
    style={{
     marginHorizontal: 5,
     alignSelf: "center",
     justifyContent: "center",
     flex: 1,
    }}
   >
    <Image
     style={{ ...styles.logo, margintop: "30%" }}
     resizeMode="contain"
     source={require("../assets/provideinfoscreen.png")}
    />
    <Text style={[styles.title, { textAlign: "center", fontSize: 24 }]}>
     Let's Start
    </Text>
    <Text style={[styles.subHeadline2]}>
     First, we’ll start with your Personal infomation!
    </Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("SINVerificationScreen")}
    title="Provide Your Info!"
   />
  </GradientContainer>
 );
};

export default Onboarding_3;
