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


const SINVerificationScreen = () => {
 const navigation = useNavigation();
 const { userData, updateUserData } = useData();
 const [sin, setSin] = React.useState(userData.sin || "");

 const handleSave = () => {
  updateUserData({ sin });
  navigation.navigate("MartialStatus")
 };

 return (
  <GradientContainer style={styles.container}>
   <View style={{justifyContent: "space-between", flex: 1}}>
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
      <Image resizeMode="contain" source={require("../assets/progress1.png")} />
     </View>

     <View style={{ padding: 15 }}>
      <Text style={styles.title}>What is your Social Insurance Number?</Text>
      <Text style={styles.subtitle}>We need your SIN for the tax process!</Text>

      <View style={styles.inputContainer}>
       <Text style={styles.inputLabel}>SIN</Text>
       <TextInput
        style={styles.input}
        value={sin}
        onChangeText={setSin}
        placeholder="XXX-XXX-XXX"
        keyboardType="number-pad"
       />
      </View>
     </View>
    </View>

    <CustomButton
     style={{...styles.nextButton, bottom: 0}}
     onPress={() => handleSave()}
     title="Next"
    />
   </View>
  </GradientContainer>
 );
};

export default SINVerificationScreen;
