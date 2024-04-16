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
import GradientContainer from "../components/GradientContainer";
import { useData } from "../components/DataProvider";


const EmploymentStatus = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [employed, setEmployed] = React.useState(userData.employed || false);

 const handleSave = () => {
  updateUserData({ employed });
  navigation.navigate("EmploymentIncome");
 };

 return (
  <GradientContainer style={styles.container}>
   <TouchableOpacity
    style={styles.backButton}
    onPress={() => navigation.goBack()}
   >
    <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
   </TouchableOpacity>

   <View style={{ justifyContent: "center", margin: "auto" }}>
    <Text style={styles.title}>What is your Employment Status?</Text>
    <Text style={styles.subtitle}>
     Are you working? And if you are, are you salaried or commissioned
    </Text>

    <View style={styles.inputContainer}>
     <SecondaryButton
      onPress={() => {
       setEmployed(true);
      }}
      title="Employed"
     />
     <SecondaryButton
      onPress={() => {
       setEmployed(false);
      }}
      title="Not Employed"
     />
    </View>
   </View>

   <CustomButton
    style={styles.startButton}
    onPress={() => {
     handleSave();
    }}
    title="Next"
   />
  </GradientContainer>
 );
};

export default EmploymentStatus;
