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

const SINVerificationScreen = () => {
 const navigation = useNavigation();
 const [sin, setSin] = useState("");

 return (
  <View style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image
     resizeMode="contain"
     source={require("../assets/back_icon.png")}
    />
   </TouchableOpacity>

   {/* Page Indicators */}
   <View style={{justifyContent: "center"}}>
   <View style={styles.indicatorContainer}>
    <Image
     style={styles.logo}
     resizeMode="contain"
     source={require("../assets/progress1.png")} // Path to your image
    />
   </View>

    <Text style={styles.title}>What is your Social Insurance Number?</Text>
    <Text style={styles.subtitle}>We need your SIN for the tax process!</Text>

    <View style={styles.inputContainer}>
     <Text style={styles.inputLabel}>SIN</Text>
     <TextInput
      style={styles.input}
      value={sin}
      onChangeText={setSin}
      placeholder="123 456 789"
      keyboardType="number-pad"
     />
    </View>
   </View>

   <CustomButton
    style={styles.nextButton}
    onPress={() => navigation.navigate("MartialStatus")}
    title="Next"
   />
  </View>
 );
};



export default SINVerificationScreen;
