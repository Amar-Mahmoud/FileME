import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../components/SecondaryButton";
import CustomButton from "../components/CustomButton";
import styles from "../styles";

const EmploymentIncome = () => {
 const navigation = useNavigation();
 const [income, setIncome] = useState();

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   {/* Page Indicators */}
   <View style={{ justifyContent: "center" }}>
    <View style={styles.indicatorContainer}>
     <Image
      style={styles.logo}
      resizeMode="contain"
      source={require("../assets/progress_2_1.png")} // Path to your image
     />
    </View>

    <Text style={styles.title}>What is your Employment Income?</Text>
    <Text style={styles.subtitle}>
     Your employer should have given you a T4 slip near tax season. Enter the
     income amount here!
    </Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>Employment Income</Text>
     <TextInput
      style={styles.input}
      value={income}
      onChangeText={setIncome}
      placeholder="$ 0.00"
      keyboardType="number-pad"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     navigation.navigate("SelfEmploymentIncome");
    }}
    title="Next"
   />
  </View>
 );
};



export default EmploymentIncome;
