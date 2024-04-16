import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";
import GradientContainer from "../components/GradientContainer";

const LetsContinue = () => {
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
    <Text style={styles.subHeadline}>Great Job, Next!</Text>

    <Text style={styles.headline}>We’ll continue with your Income Now!</Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("EmploymentStatus")}
    title="Let's Continue!"
   />
  </GradientContainer>
 );
};

export default LetsContinue;
