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

const MartialStatus = () => {
 const navigation = useNavigation();
 const [married, setMarried] = useState("");

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
     source={require("../assets/progress2.png")} // Path to your image
    />
   </View>

   <Text style={styles.title}>What is your Marital Status?</Text>
   <Text style={styles.subtitle}>Are you currently legally married?</Text>

   <View style={styles.inputContainer}>
    <SecondaryButton onPress={() => {setMarried(true)}} title="Married" />
    <SecondaryButton onPress={() => {setMarried(false)}} title="Single" />
   </View>
   </View>

   <CustomButton style={styles.startButton} onPress={() => {navigation.navigate("DependentsPage")}} title="Next" />
  </View>
 );
};


export default MartialStatus;
