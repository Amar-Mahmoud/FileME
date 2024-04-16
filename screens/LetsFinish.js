import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const LetsFinish = () => {
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
     source={require("../assets/finish.png")}
    />
    <Text style={styles.subHeadline}>Let's Finish up</Text>

    <Text style={styles.headline}>We’ll continue with any extra information!</Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("Charity")}
    title="Let's Continue!"
   />
  </GradientContainer>
 );
};

export default LetsFinish;
