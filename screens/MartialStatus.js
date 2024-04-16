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
import { useData } from "../context/DataContext";

const MartialStatus = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [married, setMarried] = React.useState(userData.married || false);

 const handleSave = () => {
  updateUserData({ email });
  navigation.navigate("DependentsPage")
 };

 return (
  <GradientContainer style={styles.container}>
   <View style={{ justifyContent: "space-between", flex: 1 }}>
    <TouchableOpacity
     style={styles.backButton}
     onPress={() => navigation.goBack()}
    >
     <Image resizeMode="contain" source={require("../assets/back_icon.png")} />
    </TouchableOpacity>

    <View
     style={{
      flex: 1,
      flexDirection: "column",
     }}
    >
     <View style={styles.indicatorContainer}>
      <Image resizeMode="contain" source={require("../assets/progress2.png")} />
     </View>

     <View style={{ padding: 10 }}>
      <Text style={styles.title}>What is your Marital Status?</Text>
      <Text style={styles.subtitle}>Are you currently legally married?</Text>

      <View style={styles.inputContainer}>
       <SecondaryButton
        onPress={() => {
         setMarried(true);
        }}
        title="Married"
       />
       <SecondaryButton
        onPress={() => {
         setMarried(false);
        }}
        title="Single"
       />
      </View>
     </View>
    </View>

    <CustomButton
     style={{ ...styles.nextButton, bottom: 0 }}
     onPress={() => handleSave()}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default MartialStatus;
