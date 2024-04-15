import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles";

const ExpenseContinue = () => {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   <Image
    style={styles.logo}
    resizeMode="contain"
    source={require("../assets/ExpenseInfoContinue.png")} // Path to your image
   />

   <View style={{ marginHorizontal: 5 }}>
    <Text style={styles.subHeadline}>Great Job, Next!</Text>

    <Text style={styles.headline}>
     We’ll continue with your Expenses information!
    </Text>
   </View>

   <SecondaryButton
    style={styles.startButton}
    onPress={() => navigation.navigate("BusinessPage")}
    title="Let's Continue!"
   />
  </View>
 );
};



export default ExpenseContinue;
