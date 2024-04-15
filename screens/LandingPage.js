import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import styles from "../styles";

const LandingPage = () => {
 const navigation = useNavigation();

 React.useLayoutEffect(() => {
  navigation.setOptions({
   headerRight: () => (
    <View style={styles.headerButtons}>
     <CustomButton
      style={styles.buttonStyle}
      onPress={() => navigation.navigate("Signup")}
      title="Get Started"
      color="#1e90ff"
     />
     <View style={styles.buttonSpacer} />
     <CustomButton
      style={styles.buttonStyle}
      onPress={() => navigation.navigate("Login")}
      title="Login"
      color="#1e90ff"
     />
    </View>
   ),
  });
 }, [navigation]);

 return (
  <View style={styles.container}>
   <Text style={styles.heroTitle}>FileME: Simplify Your Tax Filing</Text>
   <Text style={styles.heroText}>
    Streamline your tax filing process with FileME, making tax season
    stress-free and straightforward.
   </Text>
  </View>
 );
};


export default LandingPage;
