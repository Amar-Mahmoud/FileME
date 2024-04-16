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

const ConsentPage = () => {
 const navigation = useNavigation();
   const { userData, updateUserData } = useData();
 const [consent, setConsent] = React.useState(userData.consent || false);

 const handleSave = () => {
  updateUserData({ consent });
  navigation.navigate("LetsContinue");
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
      <Image resizeMode="contain" source={require("../assets/progress4.png")} />
     </View>

     <View style={{ padding: 10 }}>
      <Text style={styles.title}>
       Do you Consent to Save Your Data with us?
      </Text>
      <Text style={styles.subtitle}>
       We’re doing this out of the kindness of our heart, your info is safe wit
       us!
      </Text>

      <View style={styles.inputContainer}>
       <SecondaryButton
        onPress={() => {
         setConsent(false);
        }}
        title="No"
       />
       <SecondaryButton
        onPress={() => {
         setConsent(true);
        }}
        title="Yes"
       />
      </View>
     </View>
    </View>

    <CustomButton
     style={{ ...styles.nextButton, bottom: 0 }}
     onPress={() => {
      handleSave();
     }}
     title="Save"
    />
   </View>
  </GradientContainer>
 );
};

export default ConsentPage;
